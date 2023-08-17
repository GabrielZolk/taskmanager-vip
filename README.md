PT-BR:

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




EN:

# Full Stack Task Management Application

This is a full-stack task management application developed on the frontend using the Material-UI component library in conjunction with React, and on the backend using Express, Node.js, and Firebase. It allows users to create, edit, delete, and filter tasks, as well as mark tasks as complete or incomplete.

## Features

- The application uses a real database and has an authentication system with email and password.

- Add tasks: Users can add new tasks by entering the task content in the input field and pressing "Enter" or clicking the "Add Task" button.

- Edit tasks: Users can edit existing tasks by clicking the edit icon (pencil). This will open a modal where they can edit the task's content.

- Delete tasks: Users can delete tasks by clicking the delete icon (trash can).

- Mark tasks as complete or incomplete: Users can mark a task as complete or incomplete by clicking the checkmark icon.

- Filter tasks: Users can filter tasks based on three options: "All," "Completed," and "Incomplete." This helps visualize specific tasks based on their completion status.

- Search tasks: Users can search for tasks by entering keywords in the search bar. Tasks are filtered in real-time based on the search.

- Pagination: Tasks are displayed in pages with a fixed number of tasks per page. Users can navigate between pages using the "Previous" and "Next" buttons.

## User Interface

The user interface is responsive, adapting to different screen sizes. For wide screens, the search bar and filters are displayed at the top. For narrow screens, a sidebar menu is shown, allowing users to access the search bar and filters.

## Storage and Authentication

As mentioned, tasks are saved in the database, allowing users to retain their tasks even after refreshing the page or closing the browser. Additionally, thanks to the authentication system, each user has their own collection of tasks. Their tasks are only visible to them.

## RUNNING THE FRONTEND:

1. Make sure you have Node.js installed on your system.

2. Clone this repository to your computer.

3. Navigate to the project directory in the terminal.

4. Run the following command to install dependencies:
   
   npm install

5. After installing dependencies, execute the following command to start the application:
   
   npm run dev

## RUNNING THE BACKEND:

1. Make sure you have Node.js installed on your system.

2. Clone this repository to your computer.

3. Navigate to the project directory in the terminal.

4. Run the following command to install dependencies:
   
   npm install

5. After installing dependencies, execute the following command to start the application:
   
   npm start

## Everything Going Right:

The backend application should display 'Running XD' in the terminal after the command. It should also be on port 3000. (By default)

In the frontend project, after running the command, the application link will be provided.

Simply copy and paste it into the browser or hold 'CTRL' and click to open the application.

The displayed page will be the login screen. If you already have an account, simply log in. If not, register.
