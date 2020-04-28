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

function snowfall(){
   
   for (var i = 0; i < 10; i++){
     var newSnowflake = document.createElement("div");
     newSnowflake.class = "snowflake";
     document.body.appendChild(newSnowflake);
   }
   
}


snowfall();
//setInterval(snowfall, 17)
