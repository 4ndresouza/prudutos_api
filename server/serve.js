import pg from 'pg';
import express from 'express';

const app = express();
const { Pool, Client } =pg;

const pool = new Pool ({
host: 'localhost',
port: '5432',
    user: 'postgres',
password: '123',
database: 'produtosbd'


});

try{
await pool.connect();
console.log('Conectado ao BD com sucesso!');
}catch (error) {
console.log(`Erro ao conectar ao banco: ${error}`);



}

/* fazer um select para testar a conexâo */
const result = await pool.query('SELECT * FROM  produtos');
console.log(`Resultado ${result}`);


/* criando api com express */

app.get('/',(req,res) => {
res.send ('API de Produtos funcionando!' ) 
});

app.get('/produtos', (req, res) => {
const result = pool.query('SELECT * FROM produtos')
res.send(result.rows)

});

app.post('/produtos', (req, res) => {
    const result = pool.query('SELECT * FROM produtos')
    res.send(result.rows)
});

app.put('/produtos', (req, res) => {
const result = pool.query('SELECT * FROM produtos')
res.send(result.rows)
});

app.delete('/produtos', (req, res) => {
const result = pool.query('SELECT * FROM produtos')
res.send(result.rows)
});

app.listen(5000) 