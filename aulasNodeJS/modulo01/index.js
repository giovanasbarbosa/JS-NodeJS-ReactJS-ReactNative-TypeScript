const express = require('express'); 
const server = express(); 

const cursos = ['Node JS', 'JavaScript', 'React Nat'];

//Middleware global, vai executar pra qqr uma
server.use((req, res, next) => {
    console.log(`URL CHAMADA: ${req.url}`)
    return next() //Pular para a função em questão
})

function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error: "Nome é obrigatório"})
    }
    return next()
}

function checkIndexCurso(req, res, next){
    const curso = cursos[req.params.index]
    if(!curso){
        return res.status(400).json({error: `Não existe curso com esse index`})
    }
    req.curso = curso
    return next()
}

// GET

server.get('/cursos', (req,res) => {
    console.log(req.curso)
    return res.json(cursos)
})

server.get('/cursos/:index', checkIndexCurso, (req,res)=>{ 
    const {index} = req.params
    return res.json(cursos[index])
})

// POST 

server.use(express.json())//Esse comando é necessário para que ele possa receber transformado em json

server.post('/cursos', checkCurso, (req,res) => {
    const {name} = req.body
    cursos.push(name)
    return res.json(cursos)
})

// PUT

server.put('/cursos/:index', checkCurso, checkIndexCurso, (req,res) => {
    const {index} = req.params //identificar 
    const {name} = req.body //modificar

    cursos[index] = name //Mudar o nome do curso baseado no id

    return res.json(cursos)
})

// DELETE
server.delete('/cursos/:index', checkIndexCurso, (req,res) => {
    const {index} = req.params
    cursos.splice(index,1)
    return res.json({message:`Curso ${index} deletado com sucesso`})
})

server.listen(3000);