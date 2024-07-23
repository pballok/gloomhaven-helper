import AbilityCard from "../types/AbilityCard";
import ShowAbilityCard from "./ShowAbilityCard";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Grid from '@mui/material/Unstable_Grid2';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

interface IProps {
    id: string
    name: string
    cards: AbilityCard[]
}

function AbilityCardList({ id, name, cards }: IProps) {
    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={id}
                id={id}
            >
                <Typography>
                    {name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {cards.map((card) => (
                        <Grid xs={1} sm={2} md={3} key={card.name}>
                            <ShowAbilityCard card={card} />
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default AbilityCardList;
