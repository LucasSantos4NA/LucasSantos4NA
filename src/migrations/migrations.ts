import pool from "../config/database";

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela users:", err);
  } finally {
    client.release();
  }
};

const createProductsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "products" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela products:", err);
  } finally {
    client.release();
  }
};

const createTransactionsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
        quantity INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await client.query(queryText);
    console.log('Tabela "transactions" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela transactions:", err);
  } finally {
    client.release();
  }
};

const runMigrations = async () => {
  await createUsersTable();
  await createProductsTable();
  await createTransactionsTable(); // Chame a função para criar a tabela transactions
};

runMigrations().then(() => process.exit(0));
