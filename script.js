const navButtons = document.getElementsByClassName("navigation-option");

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("mouseover", event => {
        event.target.style.color = "#CDCDCD";
    });

    navButtons[i].addEventListener("mouseout", event => {
        event.target.style.color = "#8F6593";
    });
}



function sectionScroll(id, offset) {
    const element = document.getElementById(id);
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    window.scroll({
        top: offsetTop + offset,
        behavior: 'smooth'
    });
}

function navScrollHandler(event) {
    event.preventDefault();
    const id = this.querySelector('a').getAttribute('href').replace("#", "");
    const offset = -80;
    sectionScroll(id, offset);
};



Array.from(navButtons).forEach(button => {
    button.addEventListener("click", navScrollHandler)
});

const buttonHero = document.getElementById("button-hero");
buttonHero.addEventListener("click",  navScrollHandler);

const buttonLogo = document.getElementById("logo");
buttonLogo.addEventListener("click",  navScrollHandler);
