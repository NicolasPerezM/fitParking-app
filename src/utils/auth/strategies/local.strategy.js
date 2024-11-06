import { Strategy } from "passport-local";
import boom from "@hapi/boom";
import bcrypt from "bcrypt";
import { methods as usuariosController } from "../../../controller/usuarios.controller.js";

const localStrategy = new Strategy(
  {
    usernameField: "CorreoElectronico",
    passwordField: "Contrasena",
  },
  async (CorreoElectronico, Contrasena, done) => {
    try {
      const user = await usuariosController.findByEmail(CorreoElectronico);
      if (!user) {
       return done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(Contrasena, user.Contrasena);
      if (!isMatch) {
        return done(boom.unauthorized(), false);
      }
      delete user.Contrasena;
      return done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
);

export default localStrategy;
