// Función para obtener los datos del profesor del usuario logueado
function obtenerDatosProfesor() {
    const userID = localStorage.getItem("usuarioID");
    const profesores = {
        "453": { id: "453", nombre: "Maria2", tipo: "profesor", cursosAlumnos: [
            { id: 1, nombre: "Matemáticas", descripcion: "Explora los conceptos fundamentales y las aplicaciones avanzadas de las matemáticas en diversos campos, incluyendo cálculo, álgebra lineal y geometría." },
            { id: 2, nombre: "Historia", descripcion: "Sumérgete en los eventos clave que han dado forma a la humanidad a lo largo del tiempo, desde las civilizaciones antiguas hasta los acontecimientos más recientes." },
            { id: 3, nombre: "Literatura", descripcion: "Descubre y analiza las obras maestras de la literatura mundial, explorando la diversidad de géneros, estilos y épocas literarias." },
            { id: 4, nombre: "Ingles", descripcion: "Perfecciona tus habilidades en el idioma inglés, desde la gramática y el vocabulario hasta la comprensión auditiva y la expresión escrita, preparándote para comunicarte de manera efectiva en un contexto global." }
        ]},
        "454": { id: "454", nombre: "María", tipo: "profesor", cursosAlumnos: [
            { id: 1, nombre: "Matemáticas", descripcion: "Explora los conceptos fundamentales y las aplicaciones avanzadas de las matemáticas en diversos campos, incluyendo cálculo, álgebra lineal y geometría." },
            { id: 2, nombre: "Historia", descripcion: "Descubre y analiza las obras maestras de la literatura mundial, explorando la diversidad de géneros, estilos y épocas literarias." },
            { id: 3, nombre: "Literatura", descripcion: "Perfecciona tus habilidades en el idioma inglés, desde la gramática y el vocabulario hasta la comprensión auditiva y la expresión escrita, preparándote para comunicarte de manera efectiva en un contexto global." }
        ]}
    };
    if (profesores[userID] && profesores[userID].tipo === "profesor") {
        return profesores[userID];
    } else {
        return null;
    }
}

// Mostrar cursos de alumnos
function mostrarCursosAlumnos() {
    const datosProfesor = obtenerDatosProfesor();
    const cursosAlumnosDiv = document.getElementById('cursosAlumnos');
    cursosAlumnosDiv.innerHTML = ""; // Limpiar contenido anterior
    datosProfesor.cursosAlumnos.forEach(curso => {
        const cursoLi = document.createElement('li');
        cursoLi.textContent = curso.nombre;
        cursoLi.dataset.descripcion = curso.descripcion; // Agregar descripción como atributo de datos
        cursosAlumnosDiv.appendChild(cursoLi);
    });
}

// Mostrar descripción del curso al hacer clic en él
document.getElementById('cursosAlumnos').addEventListener('click', function(event) {
    const descripcionCursoDiv = document.getElementById('descripcionCurso');
    const cursoSeleccionado = event.target;
    descripcionCursoDiv.textContent = cursoSeleccionado.dataset.descripcion;
    descripcionCursoDiv.style.display = 'block';
});

// Mostrar cursos al presionar el botón "Mostrar Cursos"
document.getElementById('mostrarCursosBtn').addEventListener('click', function() {
    const cursosAlumnosDiv = document.getElementById('cursosAlumnos');
    cursosAlumnosDiv.style.display = 'block';
    mostrarCursosAlumnos();
});

// Obtener datos del usuario logueado al cargar la página
window.onload = function() {
    const usuarioLogueadoID = localStorage.getItem("usuarioID");
    if (usuarioLogueadoID) {
        const datosProfesor = obtenerDatosProfesor();
        if (datosProfesor) {
            const datosUsuarioDiv = document.getElementById('datosUsuario');
            const contenidoHTML = `
                <p>ID: ${datosProfesor.id}</p>
                <p>Nombre: ${datosProfesor.nombre}</p>
                <p>Tipo de usuario: ${datosProfesor.tipo}</p>
            `;
            datosUsuarioDiv.innerHTML = contenidoHTML;
        } else {
            console.log("El usuario no se encuentra en la lista o no es un profesor.");
        }
    } else {
        console.log("No hay sesión iniciada.");
    }
};
