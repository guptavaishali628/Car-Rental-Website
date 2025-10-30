// functions to redirect on signup and login page through buttons
let signUp=()=>{
    location.href="sign-up.html";
    return false;
}

let login=()=>{
    location.href="sign-in.html";
    return false;
}

let logout=()=>{
let Confirm_logout=confirm("Do you really want to logout?")
if(Confirm_logout){
    location.href = "sign-up.html";
    return false;
}
else{
    location.href = "home.html";
    return false;
}
}

let rentNow=()=>{
    location.href = "booking.html";
    return false;
}