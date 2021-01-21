export const quotesDiv = document.querySelector(".quotes");

export const createQuoteCard = function (quoteModel) {
    const divContainer = document.createElement('div');
    divContainer.className = "quote-container";
    divContainer.innerHTML = `
     <blockquote class="quote-container__quote">‟${quoteModel.quote}”</blockquote>
    <cite>${quoteModel.author} - ${quoteModel.series}</cite>`
    quotesDiv.appendChild(divContainer);
}