import { Provider } from "./provider";

export class CharacterProvider extends Provider{

async getCharacters(){
    let res = await fetch(this.baseUrl+"/characters?limit=10&offset=70", {method: "get", });
   return await res.json();
}
}