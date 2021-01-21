import "regenerator-runtime";
import "./components/screen-selected";
import "./components/drawer-listener";

import { QuoteProvider } from "./providers/provider-quote";
import { createQuoteCard, quotesDiv } from "./components/quote-card";
const quoteProvider = new QuoteProvider();

quoteProvider.getQuotes()
    .then((quotes) => {
        quotesDiv.style.height= "max-content";
        for (let i = 0; i < quotes.length; i++) {
            createQuoteCard(quotes[i])
        }
    })
    .catch(res => console.log(res));