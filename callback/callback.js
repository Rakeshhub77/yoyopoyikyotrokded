
 function register(callback)
 {
    setTimeout(() =>{

        console.log("registered")
        callback()

    },3000)
    
 }


 function login()
 {
    console.log("user logged")
 }

 function sendmail()
 {
     console.log("mail received")
 }



register(function ()
{
    login();
    sendmail();
});










