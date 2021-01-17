//Dependency to enable async functions and promises.
import 'regenerator-runtime/runtime';

import "./components/drawer-listener";
import "./components/screen-selected";
import { CharacterProvider } from "./providers/provider-character";
import {CharacterCard} from "./components/character-cards";
const characterProvider = new CharacterProvider();
const charactersDiv = document.querySelector(".characters");
const characterCard = new CharacterCard();
let cards = [];
characterProvider.getCharacters()
    .then(function (characterObject) {
        charactersDiv.style.height = "max-content";
        for (const i in characterObject) {
            cards.push(characterCard.createCard(characterObject[i]));
        }
        cards.forEach((item, i)=>{
            charactersDiv.appendChild(item);
        });
    });
