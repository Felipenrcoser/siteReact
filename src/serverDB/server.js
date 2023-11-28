///////////////////////////////////////
import mysql from 'mysql';

const consultaSQLProdutosFaltantes = 'select * from estoque e, quantidadedesejada q where e.idEmpresaRef = q.idEmpresaRef and e.idProdutoRef = q.idProdutoRef and e.quantidadeProduto < q.quantidadeDesejada';

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'default',
    password: '1senhadificil',
    database: 'tccgme'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL!');

    connection.query(consultaSQLProdutosFaltantes, (err, results) => {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            return;
        }
        const objetoResultado = [];
        if (results.length > 0) {
            for(let ii = 0; ii < results.length; ii++){
                objetoResultado.push(results[ii]);
            }
            }else{
                null;
            };
        console.log(objetoResultado);
    });
    connection.end();
});

