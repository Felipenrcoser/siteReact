#Trabalho de conclusão de Curso - ADS 2023

Projeto de site para controle de mateial de escritorio utilizando:
-HTML
-CSS
-React JS
-MySQL

################################################################################################
1 - Criar projeto (terminal)
npm create vite@latest
cd pasta-com-o-nome-do-projeto
npm install react-router-dom
npm run dev

2 - Importante
import { createBrowserRouter, RouterProvider, useOutlet, useParams } from 'react-router-dom' | Criar o roteamento entre as paginas.
import React, { createContext, useContext, useState } from 'react' | Criar um contexto para validação de login.
  - O retorno da função do contexto deverá criar um contexto.Provider value{{propriedade(s)}}.
  - Na tela de login, importar o validador criando uma variavel objeto que chama uma das propriedades passadas para o retorno da função do autenticador.

3 - Arquivo main.jsx
Cria as duas rotas possiveis (antes e após o login) com o createBrowserRouter com o path (nome a ser atribuido a pagina) e element (nome da pagina importada).
