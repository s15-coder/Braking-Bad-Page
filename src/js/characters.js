import "./components/drawer-listener";
import { paintBottomBorder } from "./components/screen-selected";
import { CharacterProvider } from "./providers/provider-character";
paintBottomBorder(1);
const characters = new CharacterProvider();
characters.getCharacters()
    .then(res => console.log(res))
    .catch(res => console.log(res));