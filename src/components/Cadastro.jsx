import React from 'react';
import Produtos from '../tables/produtos';
import CadastroProduto from './cadProduto';

export const Cadastro = () => {
  return (
    <div className="cadastro">
      <h1>Cadastro</h1>
      <p>Tela de cadastro de novos materiais comprados!</p>
      <CadastroProduto />
      <div className="tables-container">
        <Produtos />
      </div>
    </div>
  );
};

export default Cadastro;
