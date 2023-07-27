var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'charmireddy1783@gmail.com',
        pass:'mnpg sopw mkfd uxxt ',
    }

    });
    var mailOptions={
        from:'charmireddy1783@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending mail from 20A21A0530',
        text:'TASK3',
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('error');
        }
        else{
            console.log('email sent :'+info.response);
        }
    })