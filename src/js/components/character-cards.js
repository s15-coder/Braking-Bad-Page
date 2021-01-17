import { CharacterProvider } from "../providers/provider-character";
const charactersDiv = document.querySelector(".characters");

export class CharacterCard {
 
     createCard(characterModel) {
        let div = document.createElement("div");
        let htmlCard = `
        <div class="character__img-container">
        <img class="character__img"  src="${characterModel.img}"
        alt="${characterModel.name}">
        </div>
        <span>${characterModel.name}</span>
        `
        div.className += " character"
        div.innerHTML = htmlCard;
        return div;
    }

}