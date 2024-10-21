import Router from 'express';
import passport from "passport";


const router = Router();

router.post('/login',
    passport.authenticate('local', { session: false }),
    async (req, res, next) => {
        try{
            res.json(req.user);
        }
        catch(err){
            next(err);
        }
    }
);


export default router;
