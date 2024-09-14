import {config} from 'dotenv';

config();

export default {
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'fitparking',
}

