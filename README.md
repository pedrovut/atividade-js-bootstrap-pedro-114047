# TRACK+ - Otimize seu trabalho como entregador

## Atividade de Desenvolvimento Web. e Mobile

O projeto trata-se de uma plataforma web para entregadores que buscam um meio melhor de acompanhar as entregas, ganhos e avaliações de clientes e empresas
afim de otimizar o trabalho com base em estatísticas.

### COMPONENTES BOOTSTRAP

* **NAVBAR**
  * *navbar, navbar-expand-lg, navbar-brand, navbar-toggler, navbar-toggler-icon, collapse, navbar-collapse, navbar-nav, nav-item, nav-link, active*
* **ALERT**
  * *alert, alert-warning, alert-dismissible*
* **BUTTON**
  * *btn, btn-success, btn-warning, btn-primary, btn-close*
* **CARD**
  * *card, card-body, card-title, card-text*
* **BADGE**
  * *badge, bg-danger*

### DIFERENÇA `LET`, `CONST` e `VAR`

Uma variável `let` pode ser alterada em outras partes do código dentro do seu escopo, enquanto uma variável `const` é iniciável somente uma vez. A `var` é a maneira antiga de declarar uma variável em JavaScript, a principal diferença é que ela poderia ser usada em qualquer lugar do código independentemente de dentro de qual bloco (`{}`) ela tenha sido criada, e isso gerava bugs e inelegibilidade no código devido a necessidade de declarar inúmeras variáveis para evitar problemas na lógica. Além disso, quando `var` ainda era o único modo de declarar uma variável, não era possível criar variáveis constantes (imutáveis) como são as `const`.

### TIPOS DE DADOS UTILIZADOS

* **STRING**
  * *nomeUsuario, idUsuario, usuario, excelencia, desempenho*
* **NUMBER**
  * *qtdPedidos, qtdEntregas, pontuacaoDiaria, notaClientes, notaEmpregador, notaGeral*
* **LÓGICO**
  * *estaOnline*
* **UNDEFINED / NULL**
  * *cadastroEmpresa*

### EXPLICAÇÃO `if` e `else`

A variável `notaGeral` armazena a média de `notaClientes` e `notaEmpregador`. Se a nota geral for **maior ou igual a** 4,5, o desempenho do entregador (definido pela variável `desempenho`) será armazenado como **"Excelente"**, se for **maior que** 4 será **"Muito Bom"**, se for **maior que** 3,5 será **"Bom"**, se for **maior que** 3 será **"Ok"** e se nenhuma das anteriores for verdadeira (ou seja, nesse caso, **menor que** 3), o desempenho armazenará **"Ruim"**.

### MAIOR DIFICULDADE

Sem dúvidas, a maior dificuldade foi aprender e entender os componentes do **Bootstrap**, pois é apenas com muita prática que se consegue pegar o jeito. Apesar de ser simples, sinto que o excesso da simplicidade para com os nomes das propriedades acaba confundindo logo de cara e é preciso voltar e pesquisar diversas vezes.

### COMO [A DIFICULDADE] FOI RESOLVIDA

Eu precisei conferir a documentação do Bootstrap para saber como estruturar bem a página e pedir ajuda para uma IA para tirar algumas dúvidas sobre propriedades e o seu funcionamento, também como forma de revisão.
