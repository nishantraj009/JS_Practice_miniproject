 let btn = document.querySelector("#btn");
 let button = document.querySelector("button");
 

 var clicknumber = 0;

btn.addEventListener("click", function () {
  if (clicknumber === 0) {
    bulb.style.background = "yellow";
    btn.innerHTML = "ON"
    clicknumber = 1;
  } else {
    bulb.style.background = "black";
    btn.innerHTML = "OF"
    clicknumber = 0;
  }
});

// OR

/* btn.addEventListener("click", function () {
  if (bulb.style.background === "yellow") {
    bulb.style.background = "black";
  } else {
    bulb.style.background = "yellow";
  }
});

*/

