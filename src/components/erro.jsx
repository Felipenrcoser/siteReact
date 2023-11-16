import React from 'react'
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className="home">
        <h1>Oops!</h1>
        <p>Página indisponivel ...</p>
        <Link to='/'>Voltar</Link>

      </div>
    );
}