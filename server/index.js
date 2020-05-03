const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const configKeys = require('./config/keys.js')

const app = express()
const PORT = process.env.PORT || 5000

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

// First time call to google oauth API to get redirected to the callback URL,  this API should return code
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// Call google oauth API to get the access token which will be used subsequently to fetch user profile details
app.get('/auth/google/callback', passport.authenticate('google'))

app.listen(PORT, () => {
  console.log('Node server running at port ', PORT)
})
