const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const {GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REFRESH, GOOGLE_URL, USER} = process.env


const sendMail = async (mail, code) => {

  const client = new OAuth2(
    GOOGLE_ID,
    GOOGLE_SECRET,
    GOOGLE_URL,
  );

  client.setCredentials({
    refresh_token: GOOGLE_REFRESH
  });

  const accesToken = client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER,
      type: 'OAuth2',
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken : GOOGLE_REFRESH,
      accesToken: accesToken
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOpcions = {
    from: USER,
    to: mail,
    subject: 'Verify myTinerary account',
    html: `
        <div>
          ${mail}
        </div>
    `
  }

  await transport.sendMail(mailOpcions, (err, res) => {
    if (err) {
      console.log(err)
    }else{
      console.log('ok')
    }
  })
}

module.exports = sendMail;