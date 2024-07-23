import AbilityCardList from "./components/AbilityCardList";

import {AllAbilityCards} from "./data/AbilityCards";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
    return (
        <>
            <CssBaseline />
            <AbilityCardList
                id="player-hand"
                name="Player Hand"
                cards={AllAbilityCards}
            />
        </>
    );
}

export default App;
