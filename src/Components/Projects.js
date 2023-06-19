import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ lineColor }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "hsl(228deg 31% 94%)",
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: lineColor,
    },
}));

export function ProjectsList() {

    const pData = [{
        pName: "Server Migration",
        pValue: "20%",
        barColor: "var(--projectRed)",
        barValue: 20
    },
    {
        pName: "Sales Tracking",
        pValue: "40%",
        barColor: "var(--cardYellow)",
        barValue: 40
    },
    {
        pName: "Customer Database",
        pValue: "60%",
        barColor: "var(--cardBlue)",
        barValue: 60
    },
    {
        pName: "Payout Details",
        pValue: "80%",
        barColor: "var(--cardSkyBlue)",
        barValue: 80
    },
    {
        pName: "Account Setup",
        pValue: "Complete!",
        barColor: "var(--cardGreen)",
        barValue: 100
    }];

    return (
        <div className='projects-list'>
            <div className='project-head'>
                <h4>Projects</h4>
            </div>
            {pData.map((data, index) => (
                <Projects key={index} pData={data} />
            ))}
        </div>
    )
}

export function Projects({ pData }) {
    return (
        <div className='projects-container'>
            <div className="project-contents">
                <p>{pData.pName}</p>
                <p>{pData.pValue}</p>
            </div>
            <div style={{ padding: "0.25rem 1.25rem 0.25rem 1.25rem" }}>
                <BorderLinearProgress lineColor={pData.barColor} value={pData.barValue} variant="determinate" />
            </div>
        </div>
    );
}
