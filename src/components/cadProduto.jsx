import React, { useState } from 'react';

const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    descProduto: '',
    unMedidaRef: '1', // Definir padrão como Caixa (1)
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para a API ou executar outras ações
    console.log('Dados do produto:', produto);

    // Limpar o formulário após o envio, se necessário
    setProduto({
      descProduto: '',
      unMedidaRef: '1', // Definir padrão como Caixa (1)
    });
  };

  const handleSubmit2 = async event => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:3001/api/novo-produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });
  
      if (response.ok) {
        console.log('Produto inserido com sucesso!');
        // Faça qualquer outra ação desejada após a inserção bem-sucedida
      } else {
        console.error('Erro ao inserir o produto');
        // Lide com o erro adequadamente
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  
    setProduto({
      descProduto: '',
      unMedidaRef: '1',
    });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit2} className='formularioCadastro'>
        <label>
          Descrição do Produto:
          <input
            type="text"
            name="descProduto"
            value={produto.descProduto}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Unidade de Medida:
          <select
            name="unMedidaRef"
            value={produto.unMedidaRef}
            onChange={handleChange}
          >
            <option value="1">Caixa</option>
            <option value="2">Unidade</option>
            <option value="3">Resma</option>
            <option value="4">Pacote</option>
          </select>
        </label>
        <br />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
