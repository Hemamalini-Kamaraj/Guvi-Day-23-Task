import { Card } from '@mui/material';

export function ColoredCardsList() {

    const cardData = [{
        text: "Primary",
        bgClr: "var(--cardBlue)",
        txtClr: "white",
        clrValue: "#hsl(225deg 69% 59%)"
    },
    {
        text: "Success",
        bgClr: "var(--cardGreen)",
        txtClr: "white",
        clrValue: "#hsl(158deg 75% 45%)"
    },
    {
        text: "Info",
        bgClr: "var(--cardSkyBlue)",
        txtClr: "white",
        clrValue: "#hsl(188deg 60% 51%)"
    },
    {
        text: "Warning",
        bgClr: "var(--cardYellow)",
        txtClr: "white",
        clrValue: "#hsl(43deg 91% 60%)"
    },
    {
        text: "Danger",
        bgClr: "var(--projectRed)",
        txtClr: "white",
        clrValue: "#hsl(5deg 78% 57%)"
    },
    {
        text: "Secondary",
        bgClr: "hsl(233deg 7% 55%)",
        txtClr: "white",
        clrValue: "#hsl(233deg 7% 55%)"
    },
    {
        text: "Light",
        bgClr: "hsl(225deg 40% 98%)",
        txtClr: "hsl(233deg 7% 55%)",
        clrValue: "#hsl(225deg 40% 98%)"
    },
    {
        text: "Dark",
        bgClr: "hsl(232deg 8% 38%)",
        txtClr: "white",
        clrValue: "#hsl(232deg 8% 38%)"
    },
    ]

    return (
        <div className='colorCardList'>
            {cardData.map((data, index) => (
                <ColoredCards key={index} cardData={data} />
            ))}
        </div>
    )
}

export function ColoredCards({ cardData }) {
    return (
        <div className='color-cards'>
            <Card className='colorCard' style={{ backgroundColor: cardData.bgClr, color: cardData.txtClr }}>
                <h4>{cardData.text}</h4>
                <p className='clrCardsValue'>{cardData.clrValue}</p>
            </Card>
        </div>
    );
}