const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

//Cargar los datos desde users.json
const users = JSON.parse(fs.readFileSync("taller-04/24-taller-04-datos.json", "utf-8"));

//Iniciar el servidor
app.listen(PORT, () => {    console.log(`Servidor corriendo en http://localhost:${PORT}`);});

//PUNTO 1
app.get("/users/hobby", (req, res) => {
    const hobby = req.query.search; 
  
    if (!hobby) {
      return res.status(400).json({ error: "Debes proporcionar un hobby en la query (Ej: ?search=lectura)" });
    }
  
    //Filtrar usuarios con el hobby solicitado
    const usuariosFiltradosHobby = users.filter(user => user.hobbies.includes(hobby.toLowerCase()));
  
    if (usuariosFiltradosHobby.length === 0) {
      return res.json({ message: "No se encontraron usuarios con ese hobby" });
    }
  
    res.json(usuariosFiltradosHobby);
  });

//PUNTO 2
app.get("/users/exists", (req, res) => {
  const exists = req.query.search; 

  if(!exists){
    return res.status(400).json({error: "Debes proporcionar el codigo en la query (Ej: ?search=201004039)"});
  }
 
 //Verifica si el usuario exist y devuelve true o false
 const usuarioExiste = users.some(user => user.codigo.toString() === exists);
 

 res.json({Existe: usuarioExiste});
});

//PUNTO 3
app.get("/users/hobby/count", (req, res) => {
  const hobby = req.query.search;

  if (!hobby) {
    return res.status(400).json({ error: "Debes proporcionar un hobby en la query (Ej: ?search=lectura)" });
  }

  //Filtrar usuarios con el hobby solicitado
  const usuariosFiltradosHobby = users.filter(user => user.hobbies.includes(hobby.toLowerCase()));

  if (usuariosFiltradosHobby.length === 0) {
    return res.json({ message: "No se encontraron usuarios con ese hobby" });
  }
  //Retorna la cantidad de usuarios con el hobby seleccionado
  res.json(usuariosFiltradosHobby.length);
});

//PUNTO 4
app.get("/users/is-free", (req, res) => {

  //Se obtiene los usuarios con hobbies menor a 3.
  const usuariosTiempoLibre= users.filter(user => user.hobbies.length < 3);

  if (usuariosTiempoLibre.length === 0) {
    return res.json({ message: "No se encontraron usuarios con tiempo libre" });
  }
  //Retorna la cantidad de usuarios con tiempo libre
  res.json(usuariosTiempoLibre);
});

//PUNTO 5
app.post("/users/suggest", (req, res) => {
  const { codigo, hobby } = req.body;

  if (!codigo || !hobby) {
    return res.status(400).json({ error: "Debes enviar el código del usuario y el hobby en el body" });
  }

  //Buscar al usuario por su código
  const user = users.find(user => user.codigo.toString() === codigo.toString());

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  if (user.hobbies.length >= 3) {
    return res.status(400).json({ message: "El usuario ya tiene 3 hobbies. No se puede agregar otro." });
  }

  //Agregar el hobby.
  user.hobbies.push(hobby.toLowerCase());

  res.json(user);
});

//PUNTO 6
app.post("/users", (req, res) => {
  const { codigo, nombre, apellido, hobbies } = req.body;

  if (!codigo || !nombre || !apellido || !hobbies) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  //Validar que hobbies sea un array y tenga al menos 2
  if (!Array.isArray(hobbies) || hobbies.length < 2) {
    return res.status(400).json({ error: "El usuario debe tener al menos dos hobbies." });
  }

  //Verificar si el usuario ya existe
  const usuarioExistente = users.find(user => user.codigo.toString() === codigo.toString());
  if (usuarioExistente) {
    return res.status(409).json({ error: "Ya existe un usuario con ese código." });
  }

  //Creacion d nuevo usuario
  const usuarioNuevo = {
    codigo: codigo.toString(),
    nombre,
    apellido,
    hobbies: hobbies.map(h => h.toLowerCase())
  };

  users.push(usuarioNuevo);

  res.status(201).json(usuarioNuevo);

  //fs.writeFileSync("taller-04/24-taller-04-datos.json", JSON.stringify(users, null, 2));
});
