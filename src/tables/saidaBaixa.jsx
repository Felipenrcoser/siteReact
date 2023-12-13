import React, { useState, useEffect } from 'react';

function BaixaEstoque() {
  const [estoque, setEstoque] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantidadeBaixa, setQuantidadeBaixa] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3003/api/estoque')
      .then(response => response.json())
      .then(data => {
        setEstoque(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do estoque:', error);
      });
  }, []);

  const handleProdutos = () => {
    fetch('http://localhost:3003/api/produtos')
      .then(response => response.json())
      .then(data => {
        setEstoque(prevEstoque => {
          return prevEstoque.map(item => {
            const produto = data.find(prod => prod.IDPRODUTO === item.IDPRODUTOREF);
            return { ...item, NOMEPRODUTO: produto ? produto.DESCPRODUTO : '' };
          });
        });
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos produtos:', error);
      });
  };

  useEffect(() => {
    if (estoque.length > 0) {
      handleProdutos();
    }
  }, [estoque]);

  const handleBaixa = () => {
    if (!selectedProduct) {
      alert('Selecione um produto para dar baixa.');
      return;
    }

    const produtoNoEstoque = estoque.find(item => item.IDPRODUTOREF === parseInt(selectedProduct));

    if (!produtoNoEstoque) {
      alert('Produto não encontrado no estoque.');
      return;
    }

    if (produtoNoEstoque.QUANTIDADEPRODUTO - quantidadeBaixa < 0) {
      alert('Quantidade de baixa excede o estoque disponível.');
      return;
    }

    fetch('http://localhost:3001/api/atualizar-estoque', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idProduto: selectedProduct,
        quantidade: quantidadeBaixa,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao dar baixa no estoque.');
        }
        alert(`Baixa de ${quantidadeBaixa} unidades do produto ${selectedProduct} realizada com sucesso.`);
        // Aqui você pode atualizar o estado do estoque após a baixa ser realizada
      })
      .catch(error => {
        console.error('Erro ao dar baixa no estoque:', error);
        alert('Erro ao dar baixa no estoque. Por favor, tente novamente.');
      });
  };

  return (
    <div className="baixaEstoque">
      <h1>Dar Baixa no Estoque</h1>
      <div className="formBaixa">
        <label htmlFor="produtos">Selecione o Produto:</label>
        <select id="produtos" onChange={(e) => setSelectedProduct(e.target.value)}>
          <option value="">Selecione...</option>
          {estoque.map(item => (
            <option key={item.IDPRODUTOREF} value={item.IDPRODUTOREF}>
              Produto: {item.NOMEPRODUTO}, Quantidade: {item.QUANTIDADEPRODUTO}
            </option>
          ))}
        </select>
        <label htmlFor="quantidade">Quantidade para Baixa:</label>
        <input
          type="number"
          id="quantidade"
          value={quantidadeBaixa}
          onChange={(e) => setQuantidadeBaixa(parseInt(e.target.value))}
        />
        <button onClick={handleBaixa}>Dar Baixa</button>
      </div>
    </div>
  );
}

export default BaixaEstoque;
