const counter=document.getElementById('count');
const decrease=document.getElementById('decrease');
const reset=document.getElementById('reset');
const increase=document.getElementById('increase');
let num=0;
decrease.addEventListener('click',function(){
    counter.style.color='red';
    num--;
    counter.innerText=num;
})
reset.addEventListener('click',function(){
    counter.style.color='black';
    num=0;
    counter.innerText=num;
})
increase.addEventListener('click',function(){
    counter.style.color='green';
    num++;
    counter.innerText=num;
})