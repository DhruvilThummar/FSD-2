var nm=require("nodemailer");

var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"sender@gmail.com",  // use your mail
        pass:"App Pass"   // use google app password 
    }
});

var mailoption={
    from:"sender@gmail.com",
    to:"receiver@gmail.com",
    subject:"Hello",
    text:"Hire",  // only text kato html lakvu banne kyarey na lakhvu
    html:"<h1>Test mail <b>By</b></h1>"
};

trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.error(err);
    }
    console.info(info);
});