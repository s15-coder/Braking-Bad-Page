const body = document.querySelector("body");
const divAlert = document.querySelector(".alert-episode");
export const episodesDiv = document.querySelector(".episodes");
export const createEpisodeCard = function (episodeModel) {
    const episodeDiv = document.createElement("div");
    episodeDiv.className = "episode";
    episodeDiv.innerHTML = `
                <div class="episode__data"><b class="key">Title:</b> <span class="value">${episodeModel.title}</span></div>
                <div class="episode__data"><b class="key">season:</b> <span class="value">${episodeModel.season}</span></div>
                <div class="episode__data"><b class="key">episode:</b> <span class="value">${episodeModel.episode}</span></div>
                <div class="episode__data"><b class="key">Air Date:</b> <span class="value">${episodeModel.air_date}</span></div>
                <div class="episode__data"><b class="key">Serie:</b> <span class="value"> ${episodeModel.series}</span></div>
                <div class="episode__data"><b class="key">Characters</b><i class="fas fa-users icon-characters"></i></div>`;
    episodesDiv.appendChild(episodeDiv);

}

export function displayAlertCharacters(episode) {
    body.style.overflow = "hidden";

    let charactersHTML = "";
    for (let i = 0; i < episode.characters.length; i++) {
        charactersHTML += `<span class="alert-card__name">${episode.characters[i]}</span>`;
    }
    divAlert.innerHTML = `
    <div class="alert-card">
        <h3 class="alert-card__title">Characters</h3>
        ${charactersHTML}
    </div>`;

    //Adjust to the level of the current scroll
    divAlert.style.top = `${window.scrollY}px`;
    divAlert.style.display = "flex";
}
divAlert.addEventListener('click', function (e) {
if(e.target != this)return ;
    divAlert.style.display = "none";
    body.style.overflow = "auto";
}
);

