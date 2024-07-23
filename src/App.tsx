import AbilityCardList from "./components/AbilityCardList";

import {AllAbilityCards} from "./data/AbilityCards";

import { CssBaseline } from "@mui/material";

function App() {
    return (
        <>
            <CssBaseline />
            <AbilityCardList name="Hand" cards={AllAbilityCards} />
        </>
    );
}

export default App;
