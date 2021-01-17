import { Provider } from "./provider";
export class CharacterProvider extends Provider{

async getCharacters(){
    let res = await fetch(this.baseUrl+"/characters", {method: "get", });
    console.log(res.status);
  return await res.json();
   
}
}