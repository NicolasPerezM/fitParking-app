import passport from "passport";
import localStrategy from "./strategies/local.strategy.js";
//aqui se pueden agregar mas estrategias de autenticacion

passport.use(localStrategy);

