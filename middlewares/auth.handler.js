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

function checkAdminRole(req, res, next) {
    const user = req.user;
    if(user.rol === 'admin') {
        next();
    } else {
        next(boom.unauthorized());
    }
}

function checkRoles(...roles) {
    return (req, res, next) => {
        const user = req.user;
        if(roles.includes(user.rol)) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }
}

export  {checkAdminRole, checkApiKey, checkRoles};