import {config} from 'dotenv';

config();

export default {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'fitparkingapp',
    apiKey: process.env.API_KEY || '1234'
}

