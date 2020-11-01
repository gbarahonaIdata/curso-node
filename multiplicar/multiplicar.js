const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let crearArchivo=(base)=>{

  return new Promise((resolve,reject)=>{

    if(!Number(base)){
        reject (`${base} , No es un numero`)
        return;
    }

    let data =''
    for (let i = 1; i < 11; i++) {
        data+=i*base +"\n"
        console.log(i*base);
    }
    
    fs.writeFile(`archivos/table-${base}.txt`, data, (err) => {
        if (err) reject (err)
        else
        resolve(`tabla-${base}.txt`)
      }); 

  })  

}

module.exports={
    crearArchivo
}