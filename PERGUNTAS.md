## 1. Validação de Máquina de Cartão

Um cliente adquiriu um novo modelo de máquina de cartão que aceita as bandeiras Visa, Master,
Elo, Amex e Hiper. A máquina suporta tanto transações de débito quanto de crédito para cada uma
dessas bandeiras.

Pergunta: Como você estruturaria o plano de testes para validar essa máquina, considerando todas
as bandeiras e tipos de transação? Quantos casos de teste seriam necessários e qual técnica de
teste você utilizaria para garantir a cobertura completa e eficiente dos cenários?


Primeiro iria identificar os requisitos necessários para os testes, levando em consideração o contexto da pergunta acredito que
seriam realizados apenas testes funcionais referente as transações desse novo modelo de máquina de cartão.

Os cenários de testes seriam testes envolvendo transações de dois tipos: Débito e crédito para cada uma das bandeiras: Visa, Master,
Elo, Amex e Hiper.

Considerando 5 bandeiras e 5 tipos de transação teriamos 50 casos de testes, sendo 25 casos de testes para débito e 25 casos de testes para crédito. 


DÉBITO:

Visa, Master, Elo, Amex e Hiper (Débito):

 - Transação aprovada 
 - Transação negada saldo insuficiente
 - Transação negada cartão vencido
 - Transação cancelada
 - Transação com erro (dados incorretos, falha na conexão, etc.) 

CRÉDITO:

Visa, Master, Elo, Amex e Hiper (Crédito):

 - Transação aprovada 
 - Transação negada saldo insuficiente
 - Transação negada cartão vencido
 - Transação cancelada
 - Transação com erro (dados incorretos, falha na conexão, etc.) 


Um exemplo de como poderia escrever esse cenário utilizando a abordagem BDD utilizando a linguagem Gherkin:

Feature: Transações com a máquina de cartão

  Scenario: Transação de débito aprovada com cartão Visa
    Dado que o cliente possui um saldo disponível
    Quando o cliente faz uma transação de débito com o cartão Visa
    Então a transação deve ser aprovada
    E a mensagem "Transação aprovada" deve ser exibida

  Scenario: Transação de crédito negada por saldo insuficiente com cartão Master
    Dado que o cliente não possui saldo disponível
    Quando o cliente tenta realizar uma transação de crédito com o cartão Master
    Então a transação deve ser negada
    E a mensagem "Saldo insuficiente" deve ser exibida

Posteriormente utilizando substituindo Dado, Quando, Então, E, por Given, When, Then, And visando a automação do processo.

Com relação a técnica utilizada, usaria a técnica de caixa preta como principal abordagem, mas também técnicas como teste de Regressão para garantir 
que novas alterações não quebres funcionalidades já existentes. 


## 2. Ferramentas de Automação de Testes

Liste as ferramentas que você conhece para automação de testes em diferentes plataformas (Web e
APIs). Explique por que você escolheria cada uma delas.

R: Tenho conhecimento em Cypress e atualmente estou estudando sobre Robot Framework.

Em projetos onde o foco principal são testes de API e UI em uma abordagem end-to-end, utilizar o Cypress seria uma excelente escolha,
principalmente se o projeto utiliza JavaScript, Cypress possui uma sintaxe muito intuitiva, é uma ferramenta de fácil integração em pipelines de CI/CD
o que seria uma boa opção para projetos ágeis.

Robot Framework possui muitas características parecidas com Cypress mas para projetos onde o foco seja integrações complexas e múltiplas APIs, o Robot Framework talvez seja a melhor opção.



## 3. Automação de Testes em Ambientes Complexos

Em ambientes de software complexos, onde múltiplos sistemas e microserviços interagem, a
automação de testes pode se tornar desafiadora.

Pergunta: Como você abordaria a automação de testes em um ambiente com múltiplos
microserviços e alta interdependência entre sistemas? Quais estratégias você utilizaria para garantir
a confiabilidade dos testes automatizados?


Desenvolver a automação de testes nesse contexto, seria um grande desafio. 
Seguindo o que pesquisei a respeito desse tema iria seguir algumas estratégias: 

Testes em Camadas: Iniciaria com testes em camadas, focando em unidades e integrações para entender melhor o funcionamento de cada microserviço. 
Isso me permitiria validar que, por exemplo, o fluxo de assinatura funcione corretamente antes de testar a interação com os sistemas de comunicação.

Uso de Ferramentas de Teste: Buscaria ferramentas de automação adequadas que integrem bem com as plataformas em uso. 

Documentação e Testes de Contrato: Seria essencial compreender a documentação do projeto, dessa forma eu teria o entendimento de como os diferentes sistemas se comunicam. 
Também buscaria aprender sobre testes de contrato, que asseguram que as interações entre os serviços ocorram conforme o esperado, garantindo, por exemplo, que uma assinatura de contrato acione as notificações apropriadas.

Colaboração com a Equipe: É fundamental sempre ter uma boa comunicação, dessa forma consigo aprender com colegas mais experientes, especialmente aqueles que conhecem bem a 
integração entre os diversos sistemas, isso poderá me ajudar a desenvolver estratégias eficazes e a aplicar boas práticas.



## 4. Integração Contínua e Automação de Testes

Explique como a prática de Integração Contínua (CI) pode ser combinada com automação de testes
para melhorar a qualidade do software e a eficiência do time. 


É importante que, dentro da Integração Contínua, a equipe tenha etapas que executem testes automatizados em diferentes níveis, como unidades, integração, serviços e interface gráfica. 
Trabalhando em conjunto dessa maneira, os testes automatizados proporcionam segurança para a integração do código. 

Usando ferramentas como o Azure DevOps por exemplo, os testes podem ser facilmente integrados ao pipeline de CI/CD. Sempre que o código for alterado, os testes serão executados automaticamente, permitindo que os desenvolvedores recebam um feedback imediato sobre possíveis quebras na aplicação. 

Dessa forma, a combinação de CI com automação de testes melhora significativamente a qualidade do software e a eficiência do time, permitindo que problemas sejam detectados e corrigidos rapidamente, contribuindo para um fluxo de trabalho mais produtivo.


