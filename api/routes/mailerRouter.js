const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.PASS_WORD
  }
});

router.post("/", (req, res) => {
  const postInfo = req.body;
  console.log("postInfo",postInfo);

  var mailOptions = {
    to: "tomclaydon102@gmail.com",
    subject: "Contact Form Message",
    from: "Portfolio Contact Form Request: <tomclaydonportfolio@gmail.com>",
    html:
      "From: " +
      postInfo.name +
      "<br>" +
      "User's email: " +
      postInfo.email +
      "<br>" +
      "Subject: " +
      postInfo.subject +
      "<br>" +
      "Message: " +
      postInfo.description
  };

  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(err, response) {
    if (err) {
      console.log(err);
      res.end("error");
    } else {
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
});

module.exports = router;
