var mainExec;
var block = 0;

function mainInjection(){

  if (block.id == undefined){
    block = document.createElement("div");
    block.id = "mainBox";
    block.style.backgroundColor = "red";
    block.style.position = "absolute";
    block.style.top = "10px";
    block.style.left = "10px";
    document.body.appendChild(block);
  }
  else{
    window.clearInterval(mainExec);
  }


}

mainExec = window.setInterval(mainInjection, 1000);
