import { Strategy, ExtractJwt } from "passport-jwt";
import config from "../../../config.js";

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token']; 
  }
  return token;
};

const options = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: config.jwtSecret
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

export default jwtStrategy;
