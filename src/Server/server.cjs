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

// Rota para lidar com a inserção de produtos
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

const PORT = process.env.PORT || 3001; // Defina a porta para 3001

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
