const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Cargar los datos desde users.json
const users = JSON.parse(fs.readFileSync("24-taller-04-datos.json", "utf-8"));

// Iniciar el servidor
app.listen(PORT, () => {    console.log(`Servidor corriendo en http://localhost:${PORT}`);});

//PUNTO 1
app.get("/users/hobby", (req, res) => {
    const hobby = req.query.search; // Obtener el hobby de la query
  
    if (!hobby) {
      return res.status(400).json({ error: "Debes proporcionar un hobby en la query (Ej: ?search=lectura)" });
    }
  
    // Filtrar usuarios con el hobby solicitado
    const usuariosFiltrados = users.filter(user => user.hobbies.includes(hobby.toLowerCase()));
  
    if (usuariosFiltrados.length === 0) {
      return res.json({ message: "No se encontraron usuarios con ese hobby" });
    }
  
    res.json(usuariosFiltrados);
  });
  