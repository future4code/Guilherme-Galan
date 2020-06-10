#### Tarefa 2
1. Sem rodar esse código, dê três exemplos de entrada e saída da função `verifyExistence`
 - Podemos ter uma entrada apenas com body o que vai resultar status 200 e no body hasBody: true
  - Podemos ter uma entrada apenas com queryStringParam oque vai resultar um status 200 e no body hasQueries: true
  - Podemos ter uma entrada com body e queryStringParam resultando em uma saída de sucesso(status 200) e no body hasQueries: true, hasBody: true

2. Por que precisamos utilizar o comando `JSON.parse(event.body)`?
Devemos utilizar o JSON.parse para transformar o body que vem como string em um objeto.

3. Explique em que situação essa lambda retorna um código de `200` e qual o valor do `body` nesse caso.
 - Podemos ter uma entrada com body ou queryStringParam resultando em uma saída de sucesso(status 200) e no body 2 valores booleans dizendo se hasBody e hasQueries são true ou false (Obrigatório ter 1 true)

4. Explique em que situação essa lambda retorna um código de erro `400` com a mensagem `Missing Input`
Retora um erro 400 quando o hasBody e o hasQueries são false