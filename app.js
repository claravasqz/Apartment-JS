const CheckA = document.getElementById("check");

CheckA.style.backgroundColor = "#b1a38f";
CheckA.style.border = "none";
CheckA.style.color = "white";
CheckA.style.borderRadius = "5px"

const Contact = document.querySelectorAll("#menu")

Contact[3].style.backgroundColor = "#D3D3D3";

const myMenu = document.querySelectorAll("#menu");


myMenu[0].addEventListener("mouseover", event =>{
    event.target.style.color = "#7695b1 ";
})
myMenu[0].addEventListener("mouseout", event =>{
    event.target.style.color = "#073762";
})
myMenu[1].addEventListener("mouseover", event =>{
    event.target.style.color = "#7695b1 ";
})
myMenu[1].addEventListener("mouseout", event =>{
    event.target.style.color = "#073762";
})
myMenu[2].addEventListener("mouseover", event =>{
    event.target.style.color = "#7695b1 ";
})
myMenu[2].addEventListener("mouseout", event =>{
    event.target.style.color = "#073762";
})
myMenu[3].addEventListener("mouseover", event =>{
    event.target.style.color = "#7695b1 ";
})
myMenu[3].addEventListener("mouseout", event =>{
    event.target.style.color = "#073762";
})

const text = document.createElement("h3");

text.textContent = "700 sq. Ft";
text.id = "newText";
text.style.color = "#073762";
text.style.fontFamily = "Gill Sans"

document.getElementById("leftA").append(text);

const text2 = document.createElement("h3");

text2.textContent = "800 sq. Ft";
text2.id = "newText";
text2.style.color = "#073762";
text2.style.fontFamily = "Gill Sans"

document.getElementById("mediumA").append(text2);

const text3 = document.createElement("h3");

text3.textContent = "1000 sq. Ft";
text3.id = "newText";
text3.style.color = "#073762";
text3.style.fontFamily = "Gill Sans"

document.getElementById("rightA").append(text3);