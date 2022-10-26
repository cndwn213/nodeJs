const nodemailer = require("nodemailer")
const email = {
    Service : "Naver",
    host: "smtp.naver.com",
    port: 000,
    auth: {
    user: "",
    pass: ""
  }
}




const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });

}

let email_data = {
    from : "",
    to : "",
    subject : "테스트 메일입니다",
    text : "node.js 한시간 만에 배워보자."
}

send(email_data)
