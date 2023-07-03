// window.onload=function(){
    var seconds=0;
    var tens=0;
    //slector
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");

    var btnStart =document.getElementById("btn-start");
    var btnStop=document.getElementById("btn-stop");
    var btnReset=document.getElementById("btn-reset");
    btnStart.onclick=function(){
        InterVal=setInterval(startTimer,10);
    };

// }
function startTimer(){
    tens++;
    //plus 1 every 10 milliseconds
    if(tens<=9){
        appendTens.innerHTML="0"+tens;
    }else{
        appendTens.innerHTML=tens;
    }

};
// localStorage.setItem('id',123)