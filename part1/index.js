
// const os = require("os");
// const path = require("path");

import os from 'node:os'; // "node:os"
import {dirname , join} from 'node:path'; // "node:path"
import {readFile} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { log } from 'node:console';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*
console.log(os.platform());
console.log(os.version());
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.parse(__dirname));

*/


// read file ...................................................

// readFile(join(__dirname,'myname.txt'),(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//         console.log(data.toString());
    
// });

// write file ..............................................




