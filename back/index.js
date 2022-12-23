const express = require('express')
const JsonData= require('./controllers.js')


const DB = new JsonData("Data")
const app = express();

// para tomar los archivos json
app.use(express.json())

// de Prueba 
app.get("/", (req, res) => {
    res.send({hola:"mundo"})
})


// aca agarro los productos(si hay mas de 1 los agarro tambien)
app.get("/products",async (req, res) => {
    try{
        const data = await DB.getProducts()
        res.send(data)

    }catch(e){
        res.status(500).json({ message: e.message });
    }
})
// aca agarro las categorias
app.get('/categories', async (req, res) => {
    try{
        const data = await DB.getCategories()
        res.send(data)
    }catch(e){
        res.status(500).json({ message: e.message });
    }
})

app.listen(8080,()=>{
    console.log('app run on port: 8080')
})



