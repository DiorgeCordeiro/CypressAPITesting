describe('Token API', () => {
    it('should generate an access token', () => {
        const clientID = '67823c6d-58de-494f-96d9-86a4c22682cb';
        const clientSecret = 'c2d6a06f-5f31-448b-9079-7e170e8536e4';

        const authString = `${clientID}:${clientSecret}`;
        const base64Auth = Buffer.from(authString).toString('base64');

        // Realiza a requisição POST para gerar o token
        cy.request({
            method: 'POST',
            url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
            headers: {
                'Authorization': `Basic ${base64Auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'scope=oob&grant_type=client_credentials',
        }).then((response) => {
            // Verifica se a resposta é bem-sucedida
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('access_token');
            expect(response.body).to.have.property('token_type', 'Bearer');
            expect(response.body).to.have.property('expires_in');
        });
    });

    it('should return 401 with invalid credentials', () => {
        const clientID = 'invalid-client-id';
        const clientSecret = 'invalid-client-secret';

        const authString = `${clientID}:${clientSecret}`;
        const base64Auth = Buffer.from(authString).toString('base64');

        cy.request({
            method: 'POST',
            url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
            headers: {
                'Authorization': `Basic ${base64Auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'scope=oob&grant_type=client_credentials',
            failOnStatusCode: false // Para não falhar ao receber status 401
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.have.property('error');
            expect(response.body).to.have.property('error_description');
        });
    });

    it('should return 400 with missing parameters', () => {
        const clientID = '67823c6d-58de-494f-96d9-86a4c22682cb';
        const clientSecret = 'c2d6a06f-5f31-448b-9079-7e170e8536e4';

        const authString = `${clientID}:${clientSecret}`;
        const base64Auth = Buffer.from(authString).toString('base64');

        cy.request({
            method: 'POST',
            url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
            headers: {
                'Authorization': `Basic ${base64Auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials', // omitindo o parâmetro scope
            failOnStatusCode: false // Para não falhar ao receber status 400
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error');
            expect(response.body).to.have.property('error_description');
        });
    });
});
