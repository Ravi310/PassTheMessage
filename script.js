let input=document.getElementById("input");
let btn=document.getElementById("btn");
let msg=document.getElementById("msg");

btn.addEventListener("click",function(e){
    e.preventDefault();
    msg.innerHTML=input.value;
    input.value="";
})