var url = "https://github.com/YnotCode/Web-Mods-TEST/blob/master/googleDoodle/googleDoodle.png?raw=true";
var logo = document.getElementById("hplogo");

/*function injectCode(){
  
 if (!doneInjecting){


   document.body.style.backgroundColor = "black";
   doneInjecting = true;
   
 }
 else{
    clearInterval(looper);
 }
  
  
  
}

looper = setInterval(injectCode, 1000);*/
logo.src = url;
document.body.style.backgroundColor = "black";
