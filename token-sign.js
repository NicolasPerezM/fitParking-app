import jwt from 'jsonwebtoken';

const secret = 'mysecret';
const payload = {
   sub: 1,
   role: 'admin'
}

function signToken(payload, secret) {
    return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);

console.log(token);