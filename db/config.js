import { config } from '../src/config.js';

const USER = config.user;
const PASSWORD = config.password;
const URI = `mysql://${USER}:${PASSWORD}@${config.host}/${config.database}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'mysql'
    },
    production: {
        url: URI,
        dialect: 'mysql'
    }
}