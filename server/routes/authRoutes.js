const passport = require("passport");

module.exports = (app) => {
  // First time call to google oauth API to get redirected to the callback URL,  this API should return code
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Call google oauth API to get the access token which will be used subsequently to fetch user profile details
  app.get("/auth/google/callback", passport.authenticate("google"));
};
