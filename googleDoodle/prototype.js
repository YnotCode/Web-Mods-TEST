var url = "https://github.com/YnotCode/Web-Mods-TEST/blob/master/googleDoodle/googleDoodle.png?raw=true";
var images = document.getElementsByTagName("img");
var links = document.getElementsByTagName("a");
for (var a = 0; a < links.length; a++){
  
  links[a].href = "https://www.lexaloffle.com/bbs/?tid=2145";
  
}
images[0].src = url;
document.body.style.backgroundColor = "black";
console.log("V.1.1");

var newFlakes = [];
var movingFlakes = [];

function getY(multiplier, x){

  return Math.sin(multiplier * x);
  
}

function snowfall(){
   
  
  
   for (var i = 0; i < movingFlakes.length; i++){
 
     var x = parseInt(movingFlakes[i].style.left.replace("px", "")) + 10;
     var y = parseInt(movingFlakes[i].style.top.replace("px", ""));
     movingFlakes[i].style.top = (getY(movingFlakes[i].multiplier, x) + y).toString() + "px";
     movingFlakes[i].style.left = (x + 10).toString() + "px";
     
   }
  
    for (var i = 0; i < 10; i++){
     var newSnowflake = document.createElement("div");
     newSnowflake.className = "randoSnowflake";
     newSnowflake.multiplier = Math.random();
     newSnowflake.style.position = "absolute";
     newSnowflake.style.top = Math.floor(Math.random() * (screen.height - 100)).toString() + "px";
     newSnowflake.style.left = "10px";
     newSnowflake.style.width = "10px";
     newSnowflake.style.height = "10px";
     newSnowflake.style.backgroundColor = "white";
     document.body.appendChild(newSnowflake);
     movingFlakes.push(newSnowflake);
   }
 
   
}



setInterval(snowfall, 17)
