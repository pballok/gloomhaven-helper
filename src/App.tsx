import ShowAbilityCard from "./components/ShowAbilityCard";
import {AllAbilityCards} from "./data/AbilityCards";

function App() {
    return (
        <ShowAbilityCard card={AllAbilityCards[0]}/>
    );
}

export default App;
