//Importações iniciais
//------------------------------------------------------------------------------------------------------------------
import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "./AuthContext";
//------------------------------------------------------------------------------------------------------------------

//Função que cria a barra lateral
//------------------------------------------------------------------------------------------------------------------
function CriaSidebar() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="sidebar">
            <Link to='/home'><strong>Home</strong></Link>
            <Link to='/entrada'><strong>Entrada</strong></Link>
            <Link to='/saida'><strong>Saida</strong></Link>
            <Link to='/cadastro'><strong>Cadastro</strong></Link>
            <Link to='/requisicao'><strong>Requisição</strong></Link>
            <Link to='/' onClick={handleLogout}><strong>Logout</strong></Link>
        </div>
    )
}
  
export default CriaSidebar
//------------------------------------------------------------------------------------------------------------------