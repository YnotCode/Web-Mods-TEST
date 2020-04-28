var looper;
var doneInjecting = false;


function injectCode(){
  
 if (!doneInjecting){
  
   var logo = document.getElementById("hplogo").childNodes[0].childNodes[0];
   logo.src = "https://github.com/YnotCode/Web-Mods-TEST/blob/master/googleDoodle/googleDoodle.png?raw=true";
   doneInjecting = true;
   
 }
 else{
    clearInterval(looper);
 }
  
  
  
}

looper = setInterval(injectCode, 1000);
