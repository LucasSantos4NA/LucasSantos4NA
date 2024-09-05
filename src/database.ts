import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://lucassantos4na_user:nI0BqlYMQaPJu0Iy0AvfFIQjhGhwc71H@dpg-cr7qskd6l47c73bq6oog-a.oregon-postgres.render.com/lucassantos4na";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
