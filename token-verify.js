import jwt from 'jsonwebtoken';

const secret = 'mysecret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyOTk4NjU2MX0.KBRX_VKs1XseY6MpALl1jvaNXDDGIXDEJc0mKOQxqC0';
function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);

console.log(payload);