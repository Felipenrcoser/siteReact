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
            <Link to='/home'>Home</Link>
            <Link to='/entrada'>Entrada</Link>
            <Link to='/saida'>Saida</Link>
            <Link to='/cadastro'>Cadastro</Link>
            <Link to='/requisicao'>Requisição</Link>
            <Link to='/' onClick={handleLogout}>Logout</Link>
        </div>
    )
}
  
export default CriaSidebar
//------------------------------------------------------------------------------------------------------------------