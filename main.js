//Objeto literal
const natalia = {
    name:"natalia",
    age:20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ],
    //Creando métodos:
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};

//Objeto literal
function Student(name, age, cursosAprobados){
    this.name = "natalia";
    this.age = 20;
    this.cursosAprobados = cursosAprobados;
    //Creando métodos:
    //this.aprobarCurso = function(nuevoCurso){
    //    this.cursosAprobados.push(nuevoCurso)
    //}

};

// Creando un método desde fuera:
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}


const juanita = new Student(
    "juanita",
    23,
    ["Curso de introducción a los Videojuegos",
    "Curso de Creación de personajes"]
    )