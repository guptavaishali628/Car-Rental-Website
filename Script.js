//form validation:
let signUp=()=>{

let Name = document.querySelector("#signupName").value.trim();
let Email = document.querySelector("#signupEmail").value.trim();
let Pass = document.querySelector("#signupPass").value.trim();
let Cpass = document.querySelector("#signupCpass").value.trim();

let NameInput = document.querySelector("#signupName");
let EmailInput = document.querySelector("#signupEmail");
let PassInput = document.querySelector("#signupPass");
let CpassInput = document.querySelector("#signupCpass");

let Errname = document.querySelector("#errName");
let Erremail = document.querySelector("#errEmail");
let Errpass = document.querySelector("#errPass");
let Errcpass = document.querySelector("#errCpass");

if(Name==""){
    Errname.innerHTML="please enter Name!";
    Errname.style.color = "red";
    NameInput.style.border= "1px solid red";
    NameInput.value = "";
    return false; // to stop the refresh of page:
}
else if(Name.match(/[1234567890]/)){
    Errname.innerHTML="please enter valid Name!";
    Errname.style.color = "red";
    NameInput.style.border= "1px solid red";
    NameInput.value= "";
    return false; 
}
else if( !(Email=="" || Email.includes("@") && Email.includes(".com")) ){
    Erremail.innerHTML="please enter valid Email";
    Erremail.style.color="red";
    EmailInput.style.border="1px solid red";
    EmailInput.value = "";
    return false;
}
else if (Pass==""){
    Errpass.innerHTML="Please enter your Password"
    Errpass.style.color="red"
    PassInput.style.border="1px solid red"
    PassInput.value=""
    return false;
}
else if(!(Pass.match(/[1234567890]/ && Pass.match(/[@!#$%^&*]/) && Pass.match(/[A-Z]/) && Pass.match(/[a-z]/)))){
    Errpass.innerHTML="Please enter strong Password"
    Errpass.style.color="red"
    PassInput.style.border="1px solid red"
    PassInput.value=""
    return false;
}
else if(Cpass!=Pass){
    Errcpass.innerHTML="Password do not match";
    Errcpass.style.color="red"
    CpassInput.style.border="1px solid red"
    CpassInput.value=""
    return false;
}

// LocalStorage:  (set items in local storage)
   localStorage.setItem("Name",Name);
   localStorage.setItem("Email",Email);
   localStorage.setItem("Password",Pass);
   localStorage.setItem("Cpassword",Cpass);

//when we click on the sign-up button the page should re-direct on the sign-n section:
   location.href ="sign-in.html";  //location.href --> method used to redirect on new page:
   return false;
};

//login page (match credential with the signup page then login)
let login=()=>{
    let loginEmail = document.querySelector("#signinEmail");
    let loginPass = document.querySelector("#signinPass");

    // localStorage for get items from local storage
    let localEmail = localStorage.getItem("Email");
    let localPass = localStorage.getItem("Password")

    //check condition:
    if(loginEmail.value==localEmail && loginPass.value==localPass){
        location.href = "home.html";
        return false;
    }
    else{
        alert("Invalid Credentials.")
        loginEmail.value="";
        loginPass.value=""
        return false;
    }
}

