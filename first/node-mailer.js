const nodemailer = require("nodemailer");

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "3de58f4fb6600f",
    pass: "880389eb18dc33"
  }
};

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info){
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from:'cndwn213@naver.com',
    to:'cndwn213@naver.com',
    subject:'this is test',
    // text:'Hello this is test, thanks for your help.'
    html : "<h2>Hello this is test, thanks for your help.</h2><hr><h1>Hi</h1>"
}

send(content);

