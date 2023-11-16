//Importação inicial
//------------------------------------------------------------------------------------------------------------------
import React, { createContext, useContext, useState } from 'react';
//------------------------------------------------------------------------------------------------------------------

//Criação do autenticador
//------------------------------------------------------------------------------------------------------------------
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(true);
  };

  const logout = () => {
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
//------------------------------------------------------------------------------------------------------------------
