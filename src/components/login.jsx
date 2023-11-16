//Importações iniciais
//------------------------------------------------------------------------------------------------------------------
import React, { useState, createContext, useContext } from "react";
import { useAuth } from './AuthContext';
//------------------------------------------------------------------------------------------------------------------

//Função de autenticar o usuario e senha
//------------------------------------------------------------------------------------------------------------------
function Login() {
  //Pega os dados de usuario e senha
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  //Usuarios permitidos
  const acessoSistema = [
  {userId: 'Felipe', passwordId: '1234'},
  {userId: 'Robson', passwordId: '5678'},
  {userId: 'Guilherme', passwordId: '1478'}
  ];

  //Importa a função do autenticador
  const { login } = useAuth();
  


  //Ao pegar o evento do formulario de login, faz a verificação para permitir acesso ou não
  const handleSubmit = (e) => {
    e.preventDefault();  
    if(user !== '' && password !==""){
      const findUser = acessoSistema.some(objeto => objeto.userId === user);
      if(findUser){
        const findPassword = acessoSistema.some(objeto => objeto.passwordId === password);
        if(findPassword) { 
          login();
        }else{ 
          alert("Senha Incorreta!") 
        };
      }else{
        alert("Usuário não localizado!")
      }
    }else{
      alert("Usuario ou senha não foi informado!")
    }

  };

  //Tela de login
  return (
    <div className="loginScreen">
      <h1>Plataforma GME</h1>
      <div className="loginData">
        <form onSubmit={handleSubmit}>
          <p>Digite o usuário:</p>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite seu usuário..."
          />
          <p>Digite a senha:</p>
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
//------------------------------------------------------------------------------------------------------------------
