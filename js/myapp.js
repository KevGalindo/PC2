// Credenciales para alumno y profesor
const credenciales = {
    alumno: { id: "123", email: "alumno@email.com", password: "contraseña1" },
    profesores: [
        { id: "453", email: "profesor@email.com", password: "contraseña2" },
        { id: "454", email: "maria2@email.com", password: "Maria2" }
    ]
};

// Función para manejar el inicio de sesión del estudiante
document.getElementById('student-login').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const studentError = document.getElementById('student-error');

    if (email === credenciales.alumno.email && password === credenciales.alumno.password) {
        localStorage.setItem("usuarioTipo", "alumno"); // Guardar tipo de usuario
        localStorage.setItem("usuarioID", credenciales.alumno.id); // Guardar ID del alumno
        location.href = "dashboard_alumno.html";
    } else {
        studentError.textContent = "Credenciales de estudiante incorrectas";
    }
});

// Función para manejar el inicio de sesión del profesor
document.getElementById('teacher-login').addEventListener('click', function() {
    const email = document.getElementById('prof-email').value;
    const password = document.getElementById('prof-password').value;
    const teacherError = document.getElementById('teacher-error');

    // Verificar si las credenciales coinciden con alguno de los profesores
    const profesor = credenciales.profesores.find(profesor => profesor.email === email && profesor.password === password);
    if (profesor) {
        localStorage.setItem("usuarioTipo", "profesor"); // Guardar tipo de usuario
        localStorage.setItem("usuarioID", profesor.id); // Guardar ID del profesor
        location.href = "dashboard_profe.html";
    } else if (email === credenciales.alumno.email) {
        teacherError.textContent = "No puedes iniciar sesión como estudiante en la sección de profesor";
    } else {
        teacherError.textContent = "Credenciales de profesor incorrectas";
    }
});
