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
            width="100%"
            height="100%"
        />
    );
}

export default ShowAbilityCard;
