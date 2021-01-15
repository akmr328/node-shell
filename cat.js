const fs=require("fs")




 module.exports=function cat(fileName){
    fs.readFile('./', 'utf8', (err,files) =>{
         if(err){
            throw err
        }
         else{
             process.stdout.write(files.join('\n'))
             process.stdout.write('prompt >');    
         }
     })
 }

// fs.readFile('/',(err,data)=>{
//     if(err){
//         throw err;
//     }
// })
