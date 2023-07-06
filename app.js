const express = require('express');
const app = express();
const path = require('path');

const PUERTO = 5000
app.use(express.static('public'))
app.listen (PUERTO,()=> console.log(`Servidor Corriendo http://localhost:${PUERTO}`));

app.get('/', (req,res) => {res.sendFile(path.join(__dirname,'views','index.html'))})
