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


// Usuario quemado
const usuarioQuemado = {
    username: "Harif",
    password: "Harif123!"
};

// Validación de correo
const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
};

// Validación de seguridad de la contraseña
const validarContraseñaSegura = (contraseña) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&¿?])[A-Za-z\d@#$%^&¿?]{8,}$/;
    return regex.test(contraseña);
};

// Validación de coincidencia de contraseñas
const validarCoincidenciaContraseñas = (contraseña, confirmarContraseña) => {
    return contraseña === confirmarContraseña;
};

// Evento de inicio de sesión
document.getElementById('boton-log-in').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username-log-in').value;
    const password = document.getElementById('password-log-in').value;

    if (username === usuarioQuemado.username && password === usuarioQuemado.password) {
        alert("Inicio de sesión exitoso");
        // Aquí podrías redirigir al usuario a otra página
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Evento de registro
document.getElementById('boton-sign-up').addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre-sign-up').value;
    const apellido = document.getElementById('apellido-sign-up').value;
    const correo = document.getElementById('correo-sign-up').value;
    const contraseña = document.getElementById('contraseña-sign-up').value;
    const confirmarContraseña = document.getElementById('confirmarContraseña-sign-up').value;

    if (!validarCorreo(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (!validarContraseñaSegura(contraseña)) {
        alert("La contraseña debe contener mínimo 1 mayúscula, número y caracteres especiales (@#$%^&¿?).");
        return;
    }

    if (!validarCoincidenciaContraseñas(contraseña, confirmarContraseña)) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Registro exitoso");
    // Aquí podrías enviar los datos del formulario a un servidor o realizar otras acciones
});

// Mostrar/ocultar el formulario flotante
const mostrarLogin = () => {
    const fondoOscuro = document.getElementById('fondo-oscuro');
    fondoOscuro.classList.toggle('visible');
    document.querySelector('.section__formulario--log-in').classList.add('visible');
    document.querySelector('.section__formulario--sign-up').classList.remove('visible');
};

// Cambiar entre formularios
const cambiarFormulario = (action) => {
    if (action === 'login') {
        document.querySelector('.section__formulario--log-in').classList.add('visible');
        document.querySelector('.section__formulario--sign-up').classList.remove('visible');
    } else if (action === 'signup') {
        document.querySelector('.section__formulario--sign-up').classList.add('visible');
        document.querySelector('.section__formulario--log-in').classList.remove('visible');
    }
};

// Cerrar el formulario al hacer clic fuera
const fondoOscuro = document.getElementById('fondo-oscuro');
fondoOscuro.addEventListener('click', (e) => {
    if (e.target === fondoOscuro) {
        fondoOscuro.classList.remove('visible');
    }
});