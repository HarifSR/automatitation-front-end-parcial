<!-- Contenedor del formulario flotante -->
<div class="dark-background" id="dark-background">
    <div class="form-container">
        <!-- Formulario de inicio de sesión -->
        <section class="section section__form--log-in visible">
            <form action="" class="log-in">
                <h1 class="title__h1">Log in</h1>
                <input placeholder="username" type="text" class="username" id="username-log-in">
                <input placeholder="password" type="password" class="password" id="password-log-in">
                <a href="#" class="link">Forgot your password?</a>
                <button class="button button__form" id="button-log-in">Log in</button>
                <button class="button button__form--switch" type="button" onclick="switchForm('signup')">
                    Sign up
                </button>
            </form>
        </section>

        <!-- Formulario de registro (oculto por defecto) -->
        <section class="section section__form--sign-up">
            <form action="" class="sign-up">
                <h1 class="title__h1">Sign up</h1>
                <input placeholder="Enter your first name" type="text" class="first-name" id="first-name-sign-up" required>
                <input placeholder="Enter your last name" type="text" class="last-name" id="last-name-sign-up" required>
                <input placeholder="Enter your email" type="email" class="email" id="email-sign-up" required>
                <input placeholder="Password" type="password" name="password" class="password" id="password-sign-up" required>
                <label for="password" class="text" id="labelPasswordSignIn">
                    The password must contain at least 1 uppercase letter, number, and special characters (@#$%^&¿?).
                </label>
                <input placeholder="Confirm your password" type="password" name="confirmPassword" class="password" id="confirmPassword-sign-up" required>
                <label for="confirmPassword" class="text" id="labelConfirmPasswordSignIn">
                    Passwords must match
                </label>
                <a href="#" class="link">Forgot your password?</a>
                <button class="button button__form" id="button-sign-up">Sign up</button>
                <button class="button button__form--switch" type="button" onclick="switchForm('login')">
                    Log in
                </button>
            </form>
        </section>
    </div>
</div>
