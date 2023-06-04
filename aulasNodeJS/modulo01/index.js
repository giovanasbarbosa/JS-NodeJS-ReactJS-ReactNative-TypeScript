const express = require('express'); 
const server = express(); 

const cursos = ['Node JS', 'JavaScript', 'React Native'];

server.get('/curso/:index', (req,res)=>{ 
    const {index} = req.params; //desconstrução da variável para não precisar colocar o .variavel no req
    return res.json(cursos[index]); //não é mais o objeto, e sim o ítem do objeto cursos
})

server.listen(3000);