require('dotenv').config();

const {
  DB_HOST, DB_DATABASENAME, DB_USERNAME, DB_PASSWORD,
  DB_USERNAME_PRODUCTION, DB_PASSWORD_PRODUCTION,
  DB_DATABASENAME_PRODUCTION, DB_HOST_PRODUCTION,
  DB_TEST_USERNAME, DB_TEST_PASSWORD, DB_TEST_DATABASENAME, DB_TEST_HOST,
} = process.env;

module.exports = {
  development: {
    username: 'postgres',
    password: 'Cronos',
    database: 'testoswaldo',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: DB_TEST_USERNAME,
    password: DB_TEST_PASSWORD,
    database: DB_TEST_DATABASENAME,
    host: DB_TEST_HOST,
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME_PRODUCTION,
    password: DB_PASSWORD_PRODUCTION,
    database: DB_DATABASENAME_PRODUCTION,
    host: DB_HOST_PRODUCTION,
    port: 5432,
    dialect: 'postgres',
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
};
