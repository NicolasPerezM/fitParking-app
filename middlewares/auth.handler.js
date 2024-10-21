import boom from '@hapi/boom';
import config from '../src/config.js';

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api'];
    if(apiKey === config.apiKey) {
        next();
    } else {
        next(boom.unauthorized());
    }
};

export default checkApiKey;