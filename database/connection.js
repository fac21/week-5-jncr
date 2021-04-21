const pg = require('pg');
// const DB_URL = process.env.DATABASE_URL;
const options = {connectionString: DB_URL};
const db = new pg.Pool(options);
const dotenv = require('dotenv');

dotenv.config()

if (!DB_URL) throw new Error('DB_URL does not exist');