# Aplicação de Gerenciamento de Tarefas

Esta é uma aplicação de gerenciamento de tarefas desenvolvida utilizando a biblioteca de componentes Material-UI em conjunto com o React. Ela permite que os usuários criem, editem, excluam e filtrem tarefas, além de marcar tarefas como concluídas ou incompletas.

## Funcionalidades

- Adicionar tarefas: Os usuários podem adicionar novas tarefas digitando o conteúdo da tarefa no campo de entrada e pressionando "Enter" ou clicando no botão "Add Task".

- Editar tarefas: Os usuários podem editar tarefas existentes clicando no ícone de edição (lápis). Isso abrirá um modal onde podem editar o conteúdo da tarefa.

- Excluir tarefas: Os usuários podem excluir tarefas clicando no ícone de exclusão (lixeira).

- Marcar tarefas como concluídas ou incompletas: Os usuários podem marcar uma tarefa como concluída ou incompleta clicando no ícone de marcação de check (marca de seleção).

- Filtrar tarefas: Os usuários podem filtrar as tarefas com base em três opções: "Todas", "Concluídas" e "Incompletas". Isso ajuda a visualizar tarefas específicas de acordo com o status de conclusão.

- Pesquisar tarefas: Os usuários podem pesquisar tarefas digitando palavras-chave na barra de pesquisa. As tarefas são filtradas em tempo real com base na pesquisa.

- Paginação: As tarefas são exibidas em páginas com um número fixo de tarefas por página. Os usuários podem navegar entre as páginas usando os botões "Anterior" e "Próxima".

## Interface do Usuário

A interface do usuário é responsiva, adaptando-se a diferentes tamanhos de tela. Para telas amplas, a barra de pesquisa e os filtros são exibidos na parte superior. Para telas estreitas, um menu lateral é exibido, permitindo que os usuários acessem a barra de pesquisa e os filtros.

## Armazenamento Local

As tarefas são salvas no armazenamento local do navegador, permitindo que os usuários mantenham suas tarefas mesmo após atualizar a página ou fechar o navegador.

## Como Executar a Aplicação

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório para o seu computador.

3. Navegue até o diretório do projeto no terminal.

4. Execute o seguinte comando para instalar as dependências:
   
   npm install

5. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação

   npm run dev
