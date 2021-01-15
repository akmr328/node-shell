const pwd = require("./pwd");
const ls = require("./ls");
const cat=require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed:" + cmd);
  process.stdout.write("\nprompt > ");
  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
  if(cmd.includes('cat')){
    let fileName=cmd[1];
    cat(fileName);
  }
});
