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
        name: user.Nombres,
        lastname: user.Apellidos,
        email: user.CorreoElectronico,
        phone: user.Telefono 
      };
      const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
      /*res.json({
                user, 
                token
            });*/
      res.cookie("access_token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        })

      const redirectUrl = user.rol === "admin"
      ? "http://localhost:3000/api/v1/usuarios/dashboardAdmin"
      : "http://localhost:3000/api/v1/usuarios/dashboardUser";

      res.redirect(redirectUrl);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/logout", 
  (req, res) => {
  res
    .clearCookie("access_token")
    .redirect("http://localhost:3000/login");
});

export default router;
