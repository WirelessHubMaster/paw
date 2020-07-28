const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const oauth2Client = new OAuth2(
    "384511982663-h0b5polp43gn0ii8jac3425qd60e0cgm.apps.googleusercontent.com", // ClientID
    "pz5rJpwt9XhyEPh641YDBscd", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "1//04KzKnWBEagTqCgYIARAAGAQSNwF-L9IrH2cuz31v1Uorb_9zs9sRVSv_-hBO_82eAm90Soqk_IlinZaquMDmnyHfwc4c0M-csO8"
});
const accessToken = oauth2Client.getAccessToken();

module.exports = accessToken