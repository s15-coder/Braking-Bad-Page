import { Provider } from "./provider";
export class DeathsProvider extends Provider {

    async getDeaths() {
        let res = await fetch(this.baseUrl + "/deaths", { method: "get", });
        return await res.json();

    }
}