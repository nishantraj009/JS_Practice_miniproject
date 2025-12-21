let btn = document.querySelector("button");

btn.addEventListener("click",function(){
 let h1 = document.querySelector("h1");
 let randomcolor = getRandomcolor();
 h1.innerText = randomcolor;

 let div = document.getElementById("container");
 div.style.backgroundColor = randomcolor;

    console.log("color updated");
});

function getRandomcolor(){
    let red = Math.floor(Math.random()*225);
    let green = Math.floor(Math.random()*225);
    let blue = Math.floor(Math.random()*225);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}