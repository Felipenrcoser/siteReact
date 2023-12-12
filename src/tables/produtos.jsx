import React, { useState, useEffect } from 'react';

function Produtos() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Fazer a requisição à API aqui
    fetch('http://localhost:3003/api/produtos')
      .then(response => response.json())
      .then(data => {
        setDados(data);
      })
      .catch(error => {
        // Trate possíveis erros
        console.error('Erro ao buscar dados:', error);
      });
  }, []); // Executará apenas uma vez no carregamento inicial

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="2" className='mainTH'>Produtos Cadastrados</th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.idProduto}</td>
              <td>{item.descProduto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Produtos;
