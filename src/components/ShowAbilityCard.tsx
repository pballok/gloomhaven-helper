import AbilityCard from "../types/AbilityCard";

interface IProps {
    card: AbilityCard,
}

function ShowAbilityCard({ card }: IProps) {
    return (
        <img
            src={card.imageSource}
            alt={card.name}
            loading="lazy"
        />
    );
}

export default ShowAbilityCard;
