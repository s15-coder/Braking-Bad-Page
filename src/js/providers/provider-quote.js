import { Provider } from "./provider";
export class QuoteProvider extends Provider {

    async getQuotes() {
        let res = await fetch(this.baseUrl + "/quotes", { method: "get", });
        return await res.json();

    }
}