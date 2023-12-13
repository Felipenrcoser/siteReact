import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [acessoSistema, setAcessoSistema] = useState([]);
  const { login } = useAuth();

  useEffect(() => {
    fetch('http://localhost:3003/api/usuarios')
      .then(response => response.json())
      .then(data => {
        const usuarios = data.map(usuario => ({
          userId: usuario.NOMEUSUARIO,
          passwordId: usuario.SENHAUSUARIO 
        }));
        setAcessoSistema(usuarios);
        console.log(usuarios);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user !== '' && password !== '') {
      const findUser = acessoSistema.find(objeto => objeto.userId === user && objeto.passwordId === password);
      if (findUser) {
        login();
      } else {
        alert('Usuário ou senha incorretos!');
      }
    } else {
      alert('Usuário ou senha não foram informados!');
    }
  };

  return (
    <div className="loginScreen">
      <h1>Plataforma GME</h1>
      <div className="loginData">
        <form onSubmit={handleSubmit}>
          <p>Usuário:</p>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite seu usuário..."
          />
          <p>Senha:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha..."
          />
          <br />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
