const pgp = require('pg-promise')();

// .env file for environment variables 
require('dotenv').config();

const connectionString = {
    host: process.env.DB_HOST,  // usually localhost for development
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

const db = pgp(connectionString);

module.exports = db;
