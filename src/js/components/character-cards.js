'use strict';
const charactersAlert = document.querySelector(".alert-character");
const body = document.querySelector("body");

export function createCard(characterModel) {
    const div = document.createElement("div");
    let htmlCard = `
        <div class="character__img-container">
        <img class="character__img"  src="${characterModel.img}"
        alt="${characterModel.name}">
        </div>
        <span>${characterModel.name}</span>
        `
    div.className += " character"
    div.innerHTML = htmlCard;
    //Dynamic listener to display alert
    div.addEventListener('click', function () {
        showAlertCharacter(characterModel);
    });
    return div;
}

function closeAlertCharacter() {
    const cancelIcon = document.querySelector(".cancel-icon");
    cancelIcon.addEventListener("click", cleanContentOfAlert);
    charactersAlert.addEventListener("click", cleanContentOfAlert);
}
function cleanContentOfAlert() {
    charactersAlert.innerHTML = "";
    charactersAlert.style.display = "none";
}


function showAlertCharacter(characterModel) {
    body.style.overflow = "hidden";
    charactersAlert.style.display = "flex";
    charactersAlert.innerHTML = `
    <div class="alert-character__card">
        <div class="cancel-icon">
            <i class="far fa-times-circle"></i>
        </div>
        <img src="${characterModel.img}" alt="${characterModel.name}">
        <div class="alert-character__card-divider"></div>
        <div class="alert-character__card-container-data">
            <div class="alert-character__card-data">
                <b>Nombre:</b>
                <span>${characterModel.name}</span>
            </div>
            <div class="alert-character__card-data">
                <b>Portrayed:</b>
                <span>${characterModel.name}</span>
            </div>
            <div class="alert-character__card-data">
                <b>Birthday:</b>
                <span>${characterModel.birthday}</span>
            </div>
            <div class="alert-character__card-data">
                <b>Occupation:</b>
                <span class="alert-character__card-data-occupation">High School Chemistry Teacher</span>
                <span class="alert-character__card-data-occupation">Meth King Pin</span>
            </div>
            <div class="alert-character__card-data">
                <b>Nickname:</b>
                <span>${characterModel.nickname}</span>
            </div>
            <div class="alert-character__card-data">
                <b>Status:</b>
                <span>${characterModel.status}</span>
            </div>
        </div>
    </div>`;
    closeAlertCharacter()
}