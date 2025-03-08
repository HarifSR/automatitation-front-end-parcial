/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




const hardcodedUser = {
    username: "Harif",
    password: "Harif123!"
};

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


const validateStrongPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&¿?])[A-Za-z\d@#$%^&¿?]{8,}$/;
    return regex.test(password);
};

const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
};

document.getElementById('button-log-in').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username-log-in').value;
    const password = document.getElementById('password-log-in').value;

    if (username === hardcodedUser.username && password === hardcodedUser.password) {
        alert("Login successful");
       
        document.getElementById('dark-background').classList.remove('visible');
        
    } else {
        alert("Incorrect username or password");
    }
});

document.getElementById('button-sign-up').addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name-sign-up').value;
    const lastName = document.getElementById('last-name-sign-up').value;
    const email = document.getElementById('email-sign-up').value;
    const password = document.getElementById('password-sign-up').value;
    const confirmPassword = document.getElementById('confirmPassword-sign-up').value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validateStrongPassword(password)) {
        alert("The password must contain at least 1 uppercase letter, number, and special characters (@#$%^&¿?).");
        return;
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful");
    
    switchForm('login');
});

const showLogin = () => {
    const darkBackground = document.getElementById('dark-background');
    darkBackground.classList.toggle('visible');
    document.querySelector('.section__form--log-in').classList.add('visible');
    document.querySelector('.section__form--sign-up').classList.remove('visible');
};

const switchForm = (action) => {
    if (action === 'login') {
        document.querySelector('.section__form--log-in').classList.add('visible');
        document.querySelector('.section__form--sign-up').classList.remove('visible');
    } else if (action === 'signup') {
        document.querySelector('.section__form--sign-up').classList.add('visible');
        document.querySelector('.section__form--log-in').classList.remove('visible');
    }
};