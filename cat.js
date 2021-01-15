const fs = require("fs");

module.exports = function cat(fileName) {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
};

// fs.readFile('/',(err,data)=>{
//     if(err){
//         throw err;
//     }
// })
