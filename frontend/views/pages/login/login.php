<!-- Contenedor del formulario flotante -->
<div class="fondo-oscuro" id="fondo-oscuro">
    <div class="contenedor-formulario">
        <!-- Formulario de inicio de sesión -->
        <section class="section section__formulario--log-in visible">
            <form action="" class="log-in">
                <h1 class="titulo__h1">Iniciar sesión</h1>
                <input placeholder="username" type="text" class="username" id="username-log-in">
                <input placeholder="password" type="password" class="password" id="password-log-in">
                <a href="#" class="link">¿Olvidó su contraseña?</a>
                <button class="boton boton__formulario" id="boton-log-in">Ingresar</button>
                <button class="boton boton__formulario--cambiar" type="button" onclick="cambiarFormulario('signup')">
                    Registrarse
                </button>
            </form>
        </section>

        <!-- Formulario de registro (oculto por defecto) -->
        <section class="section section__formulario--sign-up">
            <form action="" class="sign-up">
                <h1 class="titulo__h1">Registrarse</h1>
                <input placeholder="Ingrese su nombre" type="text" class="nombre" id="nombre-sign-up" required>
                <input placeholder="Ingrese su apellido" type="text" class="apellido" id="apellido-sign-up" required>
                <input placeholder="Ingrese su correo electrónico" type="email" class="correo" id="correo-sign-up" required>
                <input placeholder="Contraseña" type="password" name="contraseña" class="contraseña" id="contraseña-sign-up" required>
                <label for="contraseña" class="texto" id="labelContraseñaSignIn">
                    La contraseña debe contener mínimo 1 mayúscula, número, caracteres especial (@#$%^&¿?).
                </label>
                <input placeholder="Confirme su contraseña" type="password" name="confirmarContraseña" class="contraseña" id="confirmarContraseña-sign-up" required>
                <label for="confirmarContraseña" class="texto" id="labelConfirmarContraseñaSignIn">
                    Las contraseñas deben coincidir
                </label>
                <a href="#" class="link">¿Olvidó su contraseña?</a>
                <button class="boton boton__formulario" id="boton-sign-up">Registrarse</button>
                <button class="boton boton__formulario--cambiar" type="button" onclick="cambiarFormulario('login')">
                    Iniciar sesión
                </button>
            </form>
        </section>
    </div>
</div>