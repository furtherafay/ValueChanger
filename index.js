let number = 0;

document.getElementById("Inc").onclick = function(){
    number+=1;
    document.getElementById("Value").textContent = number;
}

document.getElementById("Dec").onclick = function(){
    number-=1;
    document.getElementById("Value").textContent = number;
}

document.getElementById("Reset").onclick = function(){
    number=0;
    document.getElementById("Value").textContent = number;
}