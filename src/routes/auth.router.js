import Router from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../config.js";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.idUsuario,
        rol: user.rol,
      };
      const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
      /*res.json({
                user, 
                token
            });*/
      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        })
        .redirect("http://localhost:3000/api/v1/usuarios/dashboardUser");
    } catch (err) {
      next(err);
    }
  }
);

export default router;
