//Dependency to enable async functions and promises.
import 'regenerator-runtime/runtime';

import "./components/drawer-listener";
import "./components/screen-selected";
import { CharacterProvider } from "./providers/provider-character";
import { createCard } from "./components/character-cards";

const charactersDiv = document.querySelector(".characters");
const characterProvider = new CharacterProvider();
let cards = [];

//Create every card of character.
characterProvider.getCharacters()
    .then(function (characterObject) {
        charactersDiv.style.height = "max-content";
        for (const i in characterObject) {
            cards.push(createCard(characterObject[i]));
            charactersDiv.appendChild(cards[i]);
        }
        
    });

