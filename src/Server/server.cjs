const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  database: 'tccgme', // Substitua com o nome do seu banco de dados
});

app.use(cors());
app.use(express.json());

// Rota para lidar com a inserção de produtosa
app.post('/api/novo-produto', (req, res) => {
  const { descProduto, unMedidaRef } = req.body;

  const insertQuery = `INSERT INTO produto (idEmpresaREf, descProduto, unMedidaRef) VALUES (?, ?, ?)`;
  const values = [1, descProduto, unMedidaRef]; // Alteração aqui: número em vez de string

  connection.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error('Erro ao inserir produto:', error);
      res.status(500).send('Erro ao inserir produto');
      return;
    }
    console.log('Produto inserido com sucesso:', results);
    res.status(200).send('Produto inserido com sucesso');
  });
});

// Rota para lidar com a atualização do estoque
app.put('/api/atualizar-estoque', (req, res) => {
  const { idProduto, quantidade } = req.body;

  const updateQuery = `UPDATE estoque SET quantidadeProduto = quantidadeProduto - ? WHERE IDPRODUTOREF = ?`;
  const values = [quantidade, idProduto]; 

  connection.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error('Erro ao atualizar estoque:', error);
      res.status(500).send('Erro ao atualizar estoque');
      return;
    }
    console.log('Estoque atualizado com sucesso:', results);
    res.status(200).send('Estoque atualizado com sucesso');
  });
});


const PORT = process.env.PORT || 3001; // Defina a porta para 3001

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
