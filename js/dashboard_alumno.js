// Función para obtener los datos del alumno logueado
function obtenerDatosAlumno() {
    // Obtener el ID del usuario almacenado en el almacenamiento local
    const userID = localStorage.getItem("usuarioID");
    // Suponiendo que aquí debería obtener los datos del usuario desde una fuente de datos (API, base de datos, etc.)
    const alumnos = {
        "123": { id: "123", nombre: "Juan", tipo: "alumno" },
        "456": { id: "456", nombre: "María", tipo: "alumno" }
    };
    // Verificar si el ID del usuario coincide con el ID de algún alumno
    if (alumnos[userID] && alumnos[userID].tipo === "alumno") {
        return alumnos[userID]; // Retornar los datos del alumno
    } else {
        return null; // Retornar nulo si el usuario no es un alumno
    }
}

// Función para mostrar el horario de clases del alumno
function mostrarHorario() {
    const datosAlumno = obtenerDatosAlumno();
    if (datosAlumno) {
        const horarioDiv = document.getElementById('horario');
        horarioDiv.innerHTML = ""; // Limpiar contenido anterior
        // Suponiendo un horario de clases predefinido para cada alumno
        const horario = [
            { dia: "Lunes", clase: "Matemáticas", hora: "9:00 - 10:30" },
            { dia: "Martes", clase: "Historia", hora: "10:00 - 11:30" },
            { dia: "Miércoles", clase: "Literatura", hora: "8:30 - 10:00" },
            { dia: "Jueves", clase: "Inglés", hora: "11:00 - 12:30" },
            { dia: "Viernes", clase: "Ciencias", hora: "9:30 - 11:00" }
        ];
        horario.forEach(curso => {
            const cursoHTML = `
                <p><strong>${curso.dia}:</strong> ${curso.clase} - ${curso.hora}</p>
            `;
            horarioDiv.innerHTML += cursoHTML;
        });
    } else {
        console.log("No se encontraron datos del alumno.");
    }
}

// Obtener datos del alumno logueado al cargar la página
window.onload = function() {
    const usuarioLogueadoID = localStorage.getItem("usuarioID");
    if (usuarioLogueadoID) {
        // Obtener los datos del alumno logueado
        const datosAlumno = obtenerDatosAlumno();
        if (datosAlumno) {
            const datosUsuarioDiv = document.getElementById('datosUsuario');
            const contenidoHTML = `
                <p>ID: ${datosAlumno.id}</p>
                <p>Nombre: ${datosAlumno.nombre}</p>
                <p>Tipo de usuario: ${datosAlumno.tipo}</p>
            `;
            datosUsuarioDiv.innerHTML = contenidoHTML;
        } else {
            console.log("El usuario no se encuentra en la lista o no es un alumno.");
        }
    } else {
        console.log("No hay sesión iniciada.");
    }
};
