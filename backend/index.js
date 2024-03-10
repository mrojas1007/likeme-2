const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const postRoutes = require("./routes/postsRoutes.js");

const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// <--- Habilitamos CORS
app.use(cors());

app.use(postRoutes);

app.listen(3000, () => {
    console.log("Servidor levantado en puerto 3000");
});

