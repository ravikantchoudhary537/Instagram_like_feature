let container = document.getElementById('img');
let heart = document.getElementById('heart');
let heartdown = document.getElementById('heart-down');
let flag = 0;

container.addEventListener('dblclick',function(){
    heart.style.transform = "translate(-50%,-50%) scale(1)";
    heartdown.style.color = "red";
    heart.style.opacity = 1;
    flag = 1; 

    setTimeout(function(){
        heart.style.opacity = 0;
    },2000)

    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)";
    },3000)
})
heartdown.addEventListener('click',function(){
    if(flag==1){
        heartdown.style.color = "white";
        flag = 0;
    }
  else if(flag==0){
        heartdown.style.color = "red";
        flag = 1;
    }
})