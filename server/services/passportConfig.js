const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const configKeys = require('../config/keys.js')

passport.use(new GoogleStrategy(
    {
      clientID: configKeys.googleClientID,
      clientSecret: configKeys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log('Access Token is ', accessToken)
      console.log('Refresh token is ', refreshToken)
      console.log('Profile details is ', profile)
    }
  ))