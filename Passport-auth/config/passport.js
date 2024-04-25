const passport = require("passport");
const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
require("dotenv").config();


// passport.use(
//     'local', 
//     new LocalStrategy(async (username, password, done) => {
//         try {
//             const user = await User.findOne({ username: username });
//             if (!user) {
//                 return done(null, false, { message: "Incorrect Username" });
//             }
//             const passwordMatch = await bcrypt.compare(password, user.password);
//             if (!passwordMatch) {
//                 return done(null, false, { message: "Incorrect password" });
//             }
//             return done(null, user);
//         } catch (error) {
//             return done(error);
//         }
//     })
// );

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // If the user doesn't exist, create a new one
        user = await User.create({
          googleId: profile.id,
          username: profile.displayName,
        });
      }

      // Return the user
      return cb(null, user);
    } catch (err) {
      return cb(err, null);
    }
  }
));





// create session id
// whenever we login it creares user id inside session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// find session info using session id
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});