const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) throw new Error("DB_URL does not exist");

const options = {
  connectionString: DB_URL,
  // ssl: {
  //     rejectUnauthorized: false
  //   }
};
const db = new pg.Pool(options);

module.exports = db;
