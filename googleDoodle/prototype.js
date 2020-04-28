var looper;
var doneInjecting = false;


function injectCode(){
  
 if (!doneInjecting){
  
   var logo = document.getElementById("hplogo").childNodes[0].childNodes[0].src;
   console.log("SOURCE:" + logo);
   doneInjecting = true;
   
 }
 else{
    clearInterval(looper);
 }
  
  
  
}

looper = setInterval(injectCode, 1000);
