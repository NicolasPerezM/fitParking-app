import Router from 'express';
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../config.js";

const router = Router();

router.post('/login',
    passport.authenticate('local', { session: false }),
    async (req, res, next) => {
        try{
            const user = req.user;
            const payload = {
                sub: user.idUsuario,
                role: user.rol
            }
            const token = jwt.sign(payload, config.jwtSecret);
            res.json({
                user, 
                token
            });
        }
        catch(err){
            next(err);
        }
    }
);


export default router;
