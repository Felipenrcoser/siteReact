import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import CriaSidebar from './components/criaSidebar';
import React from "react";
import Entrada from './components/entrada';
import Saida from './components/Saida';
import Cadastro  from './components/Cadastro';
import Requisicao from './components/Requisicao';

import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="home">
        
      <CriaSidebar />
      <Outlet/>
      </div>
  )
}

export default App
