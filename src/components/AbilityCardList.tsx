import AbilityCard from "../types/AbilityCard";

import { ImageList, ImageListItem } from "@mui/material";
import ShowAbilityCard from "./ShowAbilityCard";

interface IProps {
    name: string
    cards: AbilityCard[]
}

function AbilityCardList({ cards }: IProps) {
    return (
        <ImageList cols={5}>
            {cards.map((card) => (
                <ImageListItem key={card.name}>
                    <ShowAbilityCard card={card} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default AbilityCardList;
