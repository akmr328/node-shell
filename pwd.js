// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
  
//   process.stdout.write('You typed:' + cmd);
//   process.stdout.write('\nprompt > ');
  function pwd(){
    if (cmd === 'pwd'){
      process.stdout.write(`${process.cwd()}`)
    }
  }
 
  
// })

module.exports =     function pwd(){
  if (cmd === 'pwd'){
    process.stdout.write(`${process.cwd()}`)
  }
}