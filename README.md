# Do It Now :alien:

## Escopo da aplicação
#### Home:
  - [x]  Aplicar pattern no fundo da página
  - [x]  Ter links para as telas de cadastro e login
#### Cadastro:
  - [x]  Aplicar validações no formulário
  - [x]  Formulário em caso de sucesso redirecionar para a tela de listas
#### Login:
  - [x]  Aplicar validações no formulário
  - [x]  Formulário em caso de sucesso redirecionar para a tela de listas
#### Listas:
  - [x]  Colocar pelo menos três listas (~~dados estáticos no HTML~~ dados no estado da aplicação)
  - [x]  Apenas uma delas detalhada com tarefas e subtarefas
  - [x] Colocar pelo menos três tarefas, sendo que uma delas tenha ao menos duas subtarefas (~~dados estáticos no HTML~~ dados no estado da aplicação)
  - [x] Permitir criação e remoção de tarefas subtarefas
  - [x] Permitir edição de nome da lista
  - [x] Permitir marcar tarefa e subtarefa como completa
  - [x] Ao completar uma tarefa, todas as suas subtarefas devem ser marcadas como feita
  - [x] Ao marcar todas subtarefas, a tarefa mãe deve ser marcada como completa
  - [x] Ter link para tela de criação de lista
#### Criação de lista:
  - [x] Aplicar validações no formulário
  - [x] Nome da lista é obrigatório
  - [ ] Permitir a criação de várias tarefas

## Como rodar a aplicação

``` bash
# Instala as dependências
npm install

# Roda o servidor de desenvolvimento na porta localhost:8080
npm run dev

# Gera o build de produção minificado
npm run build
```

## Tecnologias utilizadas

* [Vue.js](https://vuejs.org/) - O Framework utilizado
* [Vuex](https://vuex.vuejs.org/en) - Biblioteca de gerenciamento de estado para aplicativos Vue.js
* [vue-router](https://router.vuejs.org/en/) - Biblioteca de gerenciamento de rotas para aplicativos Vue.js
* [Node.js](https://nodejs.org/) - Para as ferramentas de servidor e compilação
* [NPM](https://www.npmjs.com/) - Gerenciador de dependências de projeto
* [webpack](https://webpack.js.org) - Module bundler para aplicações javascript
* [PostCSS](http://postcss.org/) - Ecossistema de plugins personalizados e ferramentas
  * [postcss-ant](https://github.com/corysimmons/postcss-ant) - Sistema de grid basedo em flexbox