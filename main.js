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
    this.name = name;
    this.age = age;
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

// Prototipos con la sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprobados = []){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

//const miguelito = new Student2(
//    "miguel",
//    28,
//    [
//        "Curso de analisis de negocios",
//        "Curso de fundamentos de POO"
//    ]
//)

// Creando un objeto mandando un objeto literal
const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    cursosAprobados: 
    [
        "Curso de analisis de negocios",
        "Curso de fundamentos de POO"
    ]
})