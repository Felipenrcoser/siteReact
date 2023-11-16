// Importações iniciais
//------------------------------------------------------------------------------------------------------------------
import React, {useContext, useDebugValue, useState} from 'react'
import Login from './components/login';
import Home from './components/home';
import Entrada from './components/entrada';
import Saida from './components/Saida';
import Cadastro  from './components/Cadastro';
import Requisicao from './components/Requisicao';
import ErrorPage from './components/erro.jsx';

//------------------------------------------------------------------------------------------------------------------

//Importação para redirecionamento de páginas.
//------------------------------------------------------------------------------------------------------------------
import { createBrowserRouter, RouterProvider, useOutlet, useParams } from 'react-router-dom';
//------------------------------------------------------------------------------------------------------------------

// Importação para autenteicação.
//------------------------------------------------------------------------------------------------------------------
import { useAuth } from './components/AuthContext.jsx';
//------------------------------------------------------------------------------------------------------------------

//Criação da rota se não estiver logado e se estiver logado.
//------------------------------------------------------------------------------------------------------------------
const router2 = createBrowserRouter([
  {
    path: '/', element: <Login/>, errorElement: <ErrorPage />
    }
]);

const router1 = createBrowserRouter([
  {
    path: '/', element: <Home/>, errorElement: <ErrorPage />, children:
    [
      {path: 'home', element: <Home/>},
      {path: 'entrada', element: <Entrada/>},
      {path: 'saida', element: <Saida/>},
      {path: 'cadastro', element: <Cadastro/>},
      {path: 'requisicao', element: <Requisicao/>}
    ]
  }
]);
//------------------------------------------------------------------------------------------------------------------

//Cria a função que verifica qual das rotas usar se o login for realizado.
//------------------------------------------------------------------------------------------------------------------

function Main() {
  const { isLogged } = useAuth();

  return (
    <div>
      <RouterProvider router={isLogged ? router1 : router2} />
    </div>
  );
}

export default Main;
//------------------------------------------------------------------------------------------------------------------


