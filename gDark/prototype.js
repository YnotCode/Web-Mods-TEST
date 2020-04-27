var timer;
var url = "https://lh3.googleusercontent.com/proxy/KJKiKv_TIyggQQKcEiIDnLbsdRwJG7SHBZSz59NphafKLH8VLe9QmRpis0EZxqoKpB1jCCSv6Jo74IbF9QxhNfEkziEKJCQd";

function injectCode(){
 if (document.body.style.backgroundColor != "blue" || document.getElementById("hplogo").src != url){
  document.getElementById("hplogo").src = url;
  document.body.style.backgroundColor = "blue";
 }
 else{
  clearInterval(timer);
 }
}


timer = window.setInterval(injectCode, 1000);
