
let signUp = () => {
    toggleMenu();  
    location.href = "sign-up.html";
    return false;
}

let login = () => {
    toggleMenu(); 
    location.href = "sign-in.html";
    return false;
}

let logout = () => {
    let Confirm_logout = confirm("Do you really want to logout?");
    if(Confirm_logout) {
        localStorage.clear(); 
        toggleMenu();
        location.href = "sign-up.html";
    }
    return false;
}

let rentNow = () => {
    location.href = "booking.html";
    return false;
}

let booking = () => {
    if(!localStorage.getItem("Name")) { 
        alert("Please Sign Up first!");
        location.href = "sign-up.html";
    } else {
        location.href = "booking.html";
    }
    return false;
}

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.mobile-menu');
    const body = document.body;
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('menu-open');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    document.querySelectorAll('.menu-auth-buttons button').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleMenu();
        });
    });
    
    AOS.init(); 
});
