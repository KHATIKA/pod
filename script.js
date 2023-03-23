let emailId = document.getElementById("mail");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]*@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
   
    if(emailId.value.match(mailRegex)){
        emailId.style.border = '2px solid #2ecc71'
    }
    else if(emailId.value == ""){
        emailId.style.border = '2px solid #d1d3d4'
    }
    else{
        emailId.style.border = '2px solid #ff2851'
    }
}