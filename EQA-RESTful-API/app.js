const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api')
const app = express()

mongoose.connect('mongodb://localhost/eqa', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connect to mongoDb Success')
    }
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null,{
        profile: profile,
        token: accessToken
    })
  }
));

app.use(passport.initialize())

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'https://www.googleapis.com/auth/plus.login',
  	  'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
));

app.get( '/auth/google/callback',
	passport.authenticate( 'google', {
		successRedirect: '/auth/google/success',
		failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/success', (req, res, next) => {
    res.status(200).send('success')
})


app.use(api)

app.use((err, req, res, next) => {
    res.status(err.status || 422).send({
        error: {
            message: err.message
        }
    })
})

module.exports = app;
