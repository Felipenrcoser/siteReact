import React from 'react'
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className="erro home">
        <h1>Ooooops!</h1>
        <p>Página que tentou acessar está indisponivel!</p>
        <Link to='/'><button className='btn-erro'>Voltar</button></Link>

      </div>
    );
}