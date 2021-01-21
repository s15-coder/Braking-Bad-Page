import { Provider } from "./provider";
export class EpisodesProvider extends Provider {

    async getEpisodes() {
        let res = await fetch(this.baseUrl + "/episodes", { method: "get", });
        return await res.json();

    }
}