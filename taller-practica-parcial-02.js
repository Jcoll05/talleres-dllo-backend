//Ejercicios de Practica 02
//Para estos ejercicios, utilicen los datos del parcial-01.
const data = require("./15-datos-parcial-01.json");

//1. Desarrolle una función que reciba un estudiante y retorne los nombres de los cursos del estudiante.

function cursoDeEstudiante(id){
  const estudiante = data.find(est => est._id === id);

  if (!estudiante) {
    return "Estudiante no encontrado";
}
 
 return estudiante.cursos.map(curso => curso.nombre);

}
console.log(cursoDeEstudiante("par01estid001"));

//2. Desarrolle una función que reciba un estudiante y retorne la nota maxima lograda por el estudiante.

function notaMaximaEstudiante(id){
  const estudiante = data.find(est => est._id === id);

  if (!estudiante) {
    return "Estudiante no encontrado";
  }

  let listaNota = estudiante.cursos.map(curso => curso.nota);
  let maxima = 0;
  for(let i = 0; i < listaNota.length; i++){
     
    if(listaNota[i] > maxima){
       maxima = listaNota[i];
    }
  
  }
  
  return maxima;

}
console.log(notaMaximaEstudiante("par01estid001"));

//3. Desarrolle una función que reciba un estudiante y retorne si el estudiante mide mas de 1,65m.

function estudianteMideMas165(id){
  const estudiante = data.find(est => est._id === id);

  if (!estudiante) {
    return "Estudiante no encontrado";
  }

  let altura = estudiante.altura;

  if( altura > 1.65){
    return "El estudiante mide mas de 1.65m."
  }else{
    return "El estudiante no mide mas de 1.65m."
  }

}
console.log(estudianteMideMas165("par01estid001"));

//4. Desarrolle una función que reciba un estudiante el nombre completo del estudiante.

function estudianteNombre(id){
  const estudiante = data.find(est => est._id === id);

  if(!estudiante){
    return "Estudiante no encontrado"
  }

  return estudiante.nombre + " "+ estudiante.apellido;
}
console.log(estudianteNombre("par01estid001"));

// 5. Desarrolle una función que reciba dos estudiantes y retorne la diferencia de altura entre los estudiantes.

function diferenciaEstudianteAltura(id1, id2){
  const estudiante = data.find(est => est._id === id1);
  const estudiante2 = data.find(est => est._id === id2);

  if(!estudiante){
    return "Estudiante 1 no encontrado"
  }

  if(!estudiante2){
    return "Estudiante 2 no encontrado"
  }

  let altura = estudiante.altura;
  let altura2 = estudiante2.altura;
  
  return parseFloat(Math.abs(altura-altura2).toFixed(2));
}
console.log(diferenciaEstudianteAltura("par01estid001", "par01estid002"));

// 6. Desarrolle una función que reciba un estudiante y retorne el estudiante con el campo'nombreCompleto'agregado.

function agregarNombreCompletoEstudiante(id){
  const estudiante = data.find(est => est._id === id);

  if(!estudiante){
    return "Estudiante no encontrado"
  }

  //estudiante.nombreCompleto = `${estudiante.nombre} ${estudiante.apellido}`; //Modifica el objeto en data.
  //return estudiante;
  return { //No modifica el objeto en data.
    ...estudiante, // Copia el objeto original
    nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}` // Agrega el campo sin modificar `data`
  };
}
console.log(agregarNombreCompletoEstudiante("par01estid001"));