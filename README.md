# Aplicação de Gerenciamento de Tarefas FULL STACK

Esta é uma aplicação de gerenciamento de tarefas fullstack desenvolvida no frontend utilizando a biblioteca de componentes Material-UI em conjunto com o React e no backend express, node e firebase. Ela permite que os usuários criem, editem, excluam e filtrem tarefas, além de marcar tarefas como concluídas ou incompletas.

## Funcionalidades

- A aplicação utiliza um banco de dados real e possui um sistema de autenticação com email e senha.

- Adicionar tarefas: Os usuários podem adicionar novas tarefas digitando o conteúdo da tarefa no campo de entrada e pressionando "Enter" ou clicando no botão "Add Task".

- Editar tarefas: Os usuários podem editar tarefas existentes clicando no ícone de edição (lápis). Isso abrirá um modal onde podem editar o conteúdo da tarefa.

- Excluir tarefas: Os usuários podem excluir tarefas clicando no ícone de exclusão (lixeira).

- Marcar tarefas como concluídas ou incompletas: Os usuários podem marcar uma tarefa como concluída ou incompleta clicando no ícone de marcação de check (marca de seleção).

- Filtrar tarefas: Os usuários podem filtrar as tarefas com base em três opções: "Todas", "Concluídas" e "Incompletas". Isso ajuda a visualizar tarefas específicas de acordo com o status de conclusão.

- Pesquisar tarefas: Os usuários podem pesquisar tarefas digitando palavras-chave na barra de pesquisa. As tarefas são filtradas em tempo real com base na pesquisa.

- Paginação: As tarefas são exibidas em páginas com um número fixo de tarefas por página. Os usuários podem navegar entre as páginas usando os botões "Anterior" e "Próxima".

## Interface do Usuário

A interface do usuário é responsiva, adaptando-se a diferentes tamanhos de tela. Para telas amplas, a barra de pesquisa e os filtros são exibidos na parte superior. Para telas estreitas, um menu lateral é exibido, permitindo que os usuários acessem a barra de pesquisa e os filtros.

## Armazenamento e Autenticação

Como mencionado, as tarefas são salvas no banco de dados, permitindo que os usuários mantenham suas tarefas mesmo após atualizar a página ou fechar o navegador. Além disso, graças ao sistema de autenticação, cada usuário possui sua própria coleção de tarefas. Suas tarefas são exibidas somente para você.

## EXECUTANDO O FRONTEND:

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório para o seu computador.

3. Navegue até o diretório do projeto no terminal.

4. Execute o seguinte comando para instalar as dependências:
   
   npm install

5. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação

   npm run dev

## EXECUTANDO O BACKEND:

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório para o seu computador.

3. Navegue até o diretório do projeto no terminal.

4. Execute o seguinte comando para instalar as dependências:
   
   npm install

5. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação

   npm start

## Tudo dando certo:

A aplicação backend após o comando deve exibir no terminal 'Running XD'.
Ela tambem precisa estar na porta 3000. (Por padrão)

Já no projeto front, após rodar o comando será fornecido o link da aplicação.

Basta copiar e colar no navegador ou segurar 'CTRL' e clicar para que a aplicação seja aberta.

A página exibida será a tela de login, caso já possua uma conta, basta logar, caso não, registre-se.