var timer;

function injectCode(){
 if (document.body.style.backgroundColor != "blue"){
  document.getElementById("hplogo").src = "https://lh3.googleusercontent.com/proxy/KJKiKv_TIyggQQKcEiIDnLbsdRwJG7SHBZSz59NphafKLH8VLe9QmRpis0EZxqoKpB1jCCSv6Jo74IbF9QxhNfEkziEKJCQd";
  document.body.style.backgroundColor = "blue";
 }
 else{
  clearInterval(timer);
 }
}


timer = window.setInterval(injectCode, 1000);
