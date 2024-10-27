import passport from "passport";
import localStrategy from "./strategies/local.strategy.js";
import jwtStrategy from "./strategies/jwt.strategy.js";
//aqui se pueden agregar mas estrategias de autenticacion

passport.use(localStrategy);
passport.use(jwtStrategy);

