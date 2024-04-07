const myImg = document.getElementById("pic");

function zoomIn(){
    let currentWidth = myImg.clientWidth;
    let currentHeight = myImg.clientHeight;
    if(currentWidth <= 250 && currentHeight <= 441){
        myImg.style.width = (currentWidth + 20) + "px";
        myImg.style.height = (currentHeight + 20) + "px";
    } 
    myImg.style.borderRadius = "25% 10%";

    
}

myImg.onclick = zoomIn;

const navButtons = document.getElementsByClassName("navigation-option");
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("mouseover", event => {
        navButtons[i].style.color = "blue";
    });

    navButtons[i].addEventListener("mouseoutr", event=> {
        navButtons[i].style.color = "#255957";
    });
}


