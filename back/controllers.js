const fs = require('fs');
const data = fs.readFileSync("./Data/product.json","utf-8")

// con este construtor puedo elejir la carpeta en donde busco los productos de forma dinamica 
class JsonData{
    // aca es donde pongo el nombre de la carpeta 
    constructor(archivo){
        this.archivo = archivo
    }
    // uso funciones asincronas por si hay un error 
    async getProducts(){
        try{
            // como es asincrona tengo que darle una promesa , en caso de no cumplirse me devuelve el error
            const data = await fs.promises.readFile(`${this.archivo}/product.json`,"utf-8")
            // aca del json busco dentro de data el producto y la parsea para que sea legible
            const dataParse = JSON.parse(data).data.product
            return dataParse
        }catch(e){
            return "error: " + e.message
        }
    }
    async getCategories(){
        try{
            const data = await fs.promises.readFile(`${this.archivo}/product.json`,"utf-8")
            // aca del json busco dentro de data dentro de product las categorias 
            const dataParse = JSON.parse(data).data.product.categories
            return dataParse
        }catch(e){
            return "error :" + e.message
        }
    }
}
//exporto estas funciones
module.exports = JsonData
