import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.connect()
  .then(() => console.log('✅ Conectado a la base de datos'))
  .catch((err) => console.error('❌ Error de conexión a DB:', err.message));

export default pool;