import { log } from 'node:console';
//import { appendFile, readFile,writeFile } from 'node:fs';
import {readFile , writeFile} from 'node:fs/promises'
import {dirname, join} from 'node:path'
import { fileURLToPath } from 'node:url';



const __filename =fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// log(__filename);
// log(__dirname);



////////////////// promise /////////////////////////////////




readFile(join(__dirname,'read.txt'),{
    encoding : 'utf-8'
}).then((data)=>log(data)).catch(err => log(err))













/////////////////call back api ////////////////////////////

// read file ..............................................


// readFile(join(__dirname,'read.txt'),{encoding:'utf-8'},(err,data)=>{
//         if(!err){
//             log(data);
//         }
// })

// write file .............................................

// writeFile(join(__dirname,"write.txt"),"Hello I am From Srilank",(err) => {
//     if(err){
//         log(err);
//     }
// })

// appendFile(join(__dirname,"write.txt"),
// ' hello i am shiran kumarasingha'
// ,(err)=>{
//     if(err){
//         log("Document written")
//     }
// })
