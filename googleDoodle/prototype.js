var url = "https://github.com/YnotCode/Web-Mods-TEST/blob/master/googleDoodle/googleDoodle.png?raw=true";
var images = document.getElementsByTagName("img");

images[0].src = url;
document.body.style.backgroundColor = "black";
console.log("V.1.1");

var newFlakes = [];
var movingFlakes = [];

function getY(multiplier, x){

  return  10 * Math.sin(multiplier *x);
  
}

var counter = 20;

function snowfall(){
   
  
  
   for (var i = 0; i < movingFlakes.length; i++){
     
        var x = parseInt(movingFlakes[i].style.left.replace("px", "")) + 10;
        if (x - 10> screen.width - 100){
          movingFlakes[i].remove();
          console.log("too far");
        }
        else{
          var y = parseInt(movingFlakes[i].style.top.replace("px", ""));
          movingFlakes[i].style.top = (getY(movingFlakes[i].multiplier, x) + y).toString() + "px";
          movingFlakes[i].style.left = (x + 10).toString() + "px";    
        }
     
   }
  
    if (counter == 0){
      for (var i = 0; i < 10; i++){
         var newSnowflake = document.createElement("div");
         newSnowflake.className = "randoSnowflake";
         newSnowflake.multiplier = Math.random() * 10;
         newSnowflake.style.position = "absolute";
         newSnowflake.style.top = Math.floor(Math.random() * (screen.height - 300)).toString() + "px";
         newSnowflake.style.left = Math.floor(Math.random() * 30).toString() + "px";
         newSnowflake.style.width = "10px";
         newSnowflake.style.height = "10px";
         newSnowflake.style.backgroundColor = "white";
         document.body.appendChild(newSnowflake);
         movingFlakes.push(newSnowflake);
      }
      
      
      counter = Math.floor(Math.random() * 20) + 2;
      
    }
    else{
      counter--;    
    }
    
}



setInterval(snowfall, 34)
