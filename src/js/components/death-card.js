export const deathsDiv = document.querySelector(".deaths");

export function createDeathCard(deathModel) {
    const deathDiv = document.createElement("div");
    deathDiv.className = "death";
    deathDiv.innerHTML = `
    <div class="death__info"><b class="Key">Death: </b><div class="value">${deathModel.death}</div></div>
    <div class="death__info"><b class="Key">cause: </b><div class="value">${deathModel.cause}</div></div>
    <div class="death__info"><b class="Key">responsible: </b><div class="value">${deathModel.responsible}</div></div>
    <div class="death__info"><b class="Key">last words: </b><div class="value">${deathModel.last_words}</div></div>
    <div class="death__info"><b class="Key">season: </b><div class="value">${deathModel.season}</div></div>
    <div class="death__info"><b class="Key">episode: </b><div class="value">${deathModel.episode}</div></div>`
    deathsDiv.appendChild(deathDiv);
}