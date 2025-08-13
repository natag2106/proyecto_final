// Elementos del DOM
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginSection = document.getElementById('login-section');
const servicesSection = document.getElementById('services-section');
const loginForm = document.getElementById('login-form');

// Función para mostrar formulario de login
loginBtn.addEventListener('click', () => {
    loginSection.classList.remove('hidden');
    servicesSection.style.display = 'none';
});

// Función para iniciar sesión (simulado)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "usuario" && pass === "1234") {
        alert(`Bienvenido ${user}`);
        localStorage.setItem("loggedIn", "true");
        loginSection.classList.add('hidden');
        servicesSection.style.display = 'grid';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Función para cerrar sesión
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("loggedIn");
    alert("Sesión cerrada");
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
});

// Mantener sesión si está guardada
if (localStorage.getItem("loggedIn") === "true") {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
}
