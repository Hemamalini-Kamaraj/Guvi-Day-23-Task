import React from "react";
import Card from "@mui/material/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export function StatusCardList() {
  const cardData = [
    {
      cardHead: "EARNINGS (MONTHLY)",
      cardHeadClr: "var(--cardBlue)",
      cardValue: "$70,000",
      cardIcon: faCalendar,
    },
    {
      cardHead: "EARNINGS (ANNUAL)",
      cardHeadClr: "var(--cardGreen)",
      cardValue: "$840,000",
      cardIcon: faDollarSign,
    },
    {
      cardHead: "TASKS",
      cardHeadClr: "var(--cardSkyBlue)",
      cardValue: "50%",
      cardIcon: faClipboardList,
    },
    {
      cardHead: "PENDING REQUESTS",
      cardHeadClr: "var(--cardYellow)",
      cardValue: "18",
      cardIcon: faComments,
    },
  ];

  return (
    <div className="card-list">
      {cardData.map((data, index) => (
        <StatusCards key={index} cardData={data} />
      ))}
    </div>
  );
}

const StatusCards = ({ cardData }) => {
  return (
    <div>
      <Card
        style={{
          borderLeft: "7px solid",
          borderLeftColor: cardData.cardHeadClr,
        }}
        className="status-card"
      >
        <div>
          <h6 style={{ color: cardData.cardHeadClr, margin: 0 }}>
            {cardData.cardHead}
          </h6>
          <h3 className="card-value">{cardData.cardValue}</h3>
        </div>
        <div className="card-icon">
          <FontAwesomeIcon icon={cardData.cardIcon} />
        </div>
      </Card>
    </div>
  );
};

export default StatusCards;