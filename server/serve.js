import pg from 'pg';
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