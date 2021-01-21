import "regenerator-runtime";
import "./components/screen-selected";
import "./components/drawer-listener";
import { DeathsProvider } from "./providers/provider-death";
import {createDeathCard,deathsDiv} from "./components/death-card";

const deathsProvider = new DeathsProvider();
deathsProvider.getDeaths()
.then(deaths => {
    for (let i = 0; i < deaths.length; i++) {
        deathsDiv.style.height = "max-content";
        createDeathCard(deaths[i]);
    }
})
.catch();