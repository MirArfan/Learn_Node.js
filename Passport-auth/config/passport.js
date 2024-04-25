const passport = require("passport");
const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


passport.use(
    'local', 
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });
            if (!user) {
                return done(null, false, { message: "Incorrect Username" });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);




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