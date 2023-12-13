import React, { useState, useEffect } from 'react';

function UsuariosSistema({ setAcessoSistema }) {
  useEffect(() => {
    fetch('http://localhost:3003/api/usuarios')
      .then(response => response.json())
      .then(data => {
        // Mapeando os dados da API para o formato desejado (userId e passwordId)
        const usuarios = data.map(usuario => ({
          userId: usuario.nomeUsuario,
          passwordId: usuario.senhaUsuario
        }));
        setAcessoSistema(usuarios); // Define os dados recebidos como acessoSistema
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, [setAcessoSistema]);

  return null;
}

export default UsuariosSistema;
