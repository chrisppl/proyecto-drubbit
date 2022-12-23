const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

// console.log(menu);
// console.log(hamburguer);

hamburguer.addEventListener("click", () => {
     menu.classList.toggle("spread")
})

addEventListener("click", e=>{
    if(menu.classList.contains("spread")  && e.target != menu && e.target != hamburguer){
    
         menu.classList.toggle("spread")
    }
   
})

// const http = require("http")
// const fs = require("fs")

// const server = http.createServer((req, res) =>{
//    const read = fs.createReadStream("./index.html")
//    read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

