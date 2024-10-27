import { Strategy, ExtractJwt } from "passport-jwt";
import config from "../../../config.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

export default jwtStrategy;