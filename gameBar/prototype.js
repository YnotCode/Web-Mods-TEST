var mainExec;
var block = 0;

function mainInjection(){

  if (block.id == undefined){
    block = document.createElement("div");
    block.id = "mainBox";
    block.style.width = "20px";
    block.style.height = "20px";
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
