const bulb =document.getElementById("bulb")
const button = document.getElementById("toggle-button")

let flag=false;


bulb.addEventListener("click",()=>{
     if(flag===false){
       bulb.src = "https://w3schools.com/js/pic_bulbon.gif";
       button.innerText = "Turn Off";
       flag=true;

     }
     else{
        bulb.src = "https://w3schools.com/js/pic_bulboff.gif";
        button.innerText = "Turn On";
   flag=false;
     }
})

button.addEventListener("click",()=>{
     if(flag===false){
       bulb.src = "https://w3schools.com/js/pic_bulbon.gif";
       button.innerText = "Turn Off";
       flag=true;

     }
     else{
        bulb.src = "https://w3schools.com/js/pic_bulboff.gif";
        button.innerText = "Turn On";
   flag=false;
     }
})