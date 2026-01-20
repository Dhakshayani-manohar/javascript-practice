document.addEventListener("DOMContentLoaded", ()  => {
    const generatebtn = document.querySelector("#generatebtn");
    const validate = document.getElementById("validatebtn");
    const input = document.getElementById("otpInput");
    const message = document.getElementById("message");
    const modal = new bootstrap.Modal(document.getElementById("successmodal"));

    generatebtn.addEventListener("click",() => {

        const otp = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("otp", otp); 


       message.innerHTML = 
       `<span class="alert alert-success border-0" >Generated OTP : ${otp} </span>`


    });

    validate.addEventListener("click",() => {

        const Entered = input.value;
        const Stored = localStorage.getItem("otp");
        
        if(!Stored){
            message.innerHTML =
             `<span class="alert alert-danger border-0"> No OTP generated, please generate OTP first. </span>`
            return;
        }

        if(Entered === Stored){
            modal.show();
            localStorage.clear();
            message.innerHTML = "";
            input.value ="";
        }else{
            message.innerHTML = `<span class  = text-danger> Invalid OTP </span>`
        }

    });

});