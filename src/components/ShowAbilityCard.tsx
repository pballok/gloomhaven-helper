import AbilityCard from "../types/AbilityCard";

interface Props {
    card: AbilityCard,
}

function ShowAbilityCard({ card }: Props) {
    return <div>{card.name}</div>
}

export default ShowAbilityCard;
