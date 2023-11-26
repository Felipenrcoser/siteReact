///////////////////////////////////////
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    database: 'tccgme'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL!');

    connection.query('select * from usuario', (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        //console.log('Resultados da consulta:', results);
        const objetoResultado = [];
        if (results.length > 0) {
            for(let ii = 0; ii <= results.length; ii++){
                objetoResultado.push(results[ii]);
            }
            }else{
                null;
            };
        console.log('Resultado como objeto:', objetoResultado);
    });
    
    connection.end();
});

