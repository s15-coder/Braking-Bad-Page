import { Provider } from "./provider";

export class CharacterProvider extends Provider{
    constructor(){
        this.localUrl = "/characters";
    }
async getCharacters(){
    let res = await fetch(super.baseUrl+this.localUrl);
   return await res.json();
}
}