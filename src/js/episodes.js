//Dependency to enable async functions and promises.
import 'regenerator-runtime/runtime';

import "./components/drawer-listener";
import "./components/screen-selected";
import { EpisodesProvider } from "./providers/provider-episodes";
import { createEpisodeCard, episodesDiv, displayAlertCharacters } from "./components/episode-card";

const episodesProvider = new EpisodesProvider();
//Get episodes from API
episodesProvider.getEpisodes()
    .then(function (episodes) {
        //Restore normal height
        episodesDiv.style.height = "max-content";
        //Build episodes
        for (let i = 0; i < episodes.length; i++) {
            createEpisodeCard(episodes[i]);
        }
        //Create listener of characters
        const iconsCharacters = document.querySelectorAll(".icon-characters");
        for (let i = 0; i < iconsCharacters.length; i++) {
            iconsCharacters[i].addEventListener('click',function(){
                displayAlertCharacters(episodes[i])
            });
        }
    })
    .catch(function (res) { console.log(res); });