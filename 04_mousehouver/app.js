let p = document.querySelector("p");
 
p.addEventListener("click",function(){
    console.log("paragraph was clicked");
});

let divbox = document.getElementById("box");

divbox.addEventListener("mouseenter",function(){
    alert("the mouse touched to the dic box container");
});


let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    console.dir(this.innerText); // only this print whole button.
});