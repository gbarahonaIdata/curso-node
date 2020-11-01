const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo} = require('./multiplicar/multiplicar')
const argv =require('yargs')
                   .command('Listar','Imprime en consola la tabla de multiplicar',{
                       base:{
                           demand:true
                       },
                       limite:{
                           alias:'l',
                           default: 10
                       },
                       crear:{
                        alias:'l',
                        default: 10
                    }

                   })
                   .argv
    

let comando=argv._[0];

switch (comando) {
    case 'Listar':
        console.log('comando Listar');
        break;
        case 'Crear':
            console.log('comando Crear');
            break;
    default:
        console.log('Comando no encontrado');
        break;
}


let argv2=process.argv
//let parametro=argv[2]
//let base=parametro.split('=')[1]


console.log(argv2);
console.log(argv.base);
console.log(argv.limite);
//console.log(argv2);

/*
crearArchivo(base)
.then(archivo=>console.log(`archivo creado: ${archivo}`))
.catch(e=>console.log(e))

*/