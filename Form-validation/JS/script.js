const completePay=document.getElementById('complete-pay');
completePay.addEventListener("click",(event)=>{
    event.preventDefault();
    let fname = document.f1.fname.value;
    let lname = document.f1.lname.value;
    let email = document.f1.email.value;
    let num = document.f1.mobile.value;
    let pincode = document.f1.pincode.value;
    let cardnumber = document.f1.cardnumber.value;
    let expiry = document.f1.expiry.value;
    let cvv = document.f1.cvv.value;
    let status = true;

    if ((fname.length > 1) && (/^[A-Za-z]+$/.test(fname))) {
       status=true;
    }
    else if (fname.length < 1) {
        document.getElementById("fname-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-fname").innerHTML =
            "First Name is required";
        status = false;
    }
    else {
        document.getElementById("fname-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-fname").innerHTML =
            "First Name is not valid";
        status = false;
    }
    if ((lname.length > 1) && (/^[A-Za-z]+$/.test(lname))) {
        status=true;
    }
    else if (lname.length < 1) {
        document.getElementById("lname-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-lname").innerHTML =
            "Last Name is required";
        status = false;
    }
    else {
        document.getElementById("lname-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-fname").innerHTML =
            "First Name is not valid";
        status = false;
    }
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        status=true;
    }
    else if(email.length<1) {
        document.getElementById("email-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-email").innerHTML =
            "Email Address is required";
        status = false;
    }
    else{
        document.getElementById("email-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-email").innerHTML =
            "Email Address is not valid";
        status = false;
    }
    if ((num.length == 10)&&(/^[6-9]\d{9}$/.test(num))) {
        status=true;
    }
    else if (num.length<1){
        document.getElementById("mobile-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-mobile").innerHTML = "Contact Number is required";
        status = false;
    }
    else{
        document.getElementById("mobile-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-mobile").innerHTML = "Contact Number is not valid";
        status = false;
    }
    if ((pincode.length == 6)&&(/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/.test(pincode))) {
        status=true;
    }
    else if(pincode.length<1) {
        document.getElementById("pincode-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-pincode").innerHTML = "PIN Code is required";
        status = false;
    }
    else{
        document.getElementById("pincode-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-pincode").innerHTML = "PIN Code is not valid";
        status = false;
    }
    if (cardnumber.length == 16 && (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardnumber))) {
        status=true;
    }
    else if(cardnumber.length<1){
        document.getElementById("card-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-card").innerHTML = "Card Number is required";
        status = false;
    }
    else{
        document.getElementById("card-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-card").innerHTML = "Card Number is not valid";
        status = false;
    }
    if (/^20[2-3]\d|20[0-4]\d|2050$/.test(expiry)) {
        status=true;
    }
    else if(expiry.length<1){
        document.getElementById("expiry-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-expiry").innerHTML = "Card Expiry is required";
        status = false;
    }
    else{
        document.getElementById("error-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-expiry").innerHTML = "Card Expiry is not valid";
        status = false;
    }
    if (cvv.length == 3 || cvv.length == 4) {
         status=true;
    }
    else if(cvv.length<1) {
        document.getElementById("error-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-cvv").innerHTML = "CVV is required";
        status = false;
    }
    else{
        document.getElementById("error-highlight").setAttribute("style","border:1px solid #95261f;");
        document.getElementById("error-cvv").innerHTML = "CVV is not valid";
        status = false;
    }
    

    return status;
}
)