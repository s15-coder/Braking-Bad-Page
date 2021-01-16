let navChilds = document.querySelectorAll(".links");
const origin = window.location.origin;

if(origin == "https://s15-coder.github.io/"){
        origin = "https://s15-coder.github.io/"+"Braking-Bad-Page";
}

navChilds[0].addEventListener('click', (e) => {
    window.location.href = origin;
});

navChilds[1].addEventListener('click', (e) => {
    window.location.href = `${origin}/html/characters.html`;

});
navChilds[2].addEventListener('click', (e) => {
    window.location.href = `${origin}/html/episodes.html`;

});
navChilds[3].addEventListener('click', (e) => {
    window.location.href = `${origin}/html/quotes.html`;
});
navChilds[4].addEventListener('click', (e) => {
    window.location.href = `${origin}/html/deaths.html`;
});

export function paintBottomBorder(idDiv) {
    navChilds[idDiv].className += " selected";
}

