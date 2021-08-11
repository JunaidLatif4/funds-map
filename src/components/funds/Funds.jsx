import React from 'react'

import { makeStyles, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import BottomSlide from '../bottom-slide/BottomSlide'
import "./Funds.scss"



const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    btn1: {
        width: "100%",
        backgroundColor: "#2778ff",
        color: "white",
        padding: ".5rem 0",
        fontSize: "1.1rem",
        borderRadius: "8px"
    },
    btn2: {
        width: "100%",
        backgroundColor: "#ecf6ff",
        color: "#2a6eff",
        padding: ".5rem 0",
        fontSize: "1.1rem",
        borderRadius: "8px"
    },
}));

const FundsData = [
    {
        balance: "1,00,00,000",
        detail: "Total funds available",
    },
    {
        balance: "65,00,000",
        detail: "Blocked Funds",
        data: [
            {
                balance: "65,00,000",
                detail: "Blocked as deemed margins for in-process orders"
            },
            {
                balance: "65,00,000",
                detail: "Blocked as margins on open orders"
            },
            {
                balance: "65,00,000",
                detail: "Blocked ammount for ongoing closures"
            },
        ]
    },
    {
        balance: "35,00,000",
        detail: "Withdrawable balance",
    },
    {
        img: <CardGiftcardIcon />,
        balance: "35,00,000",
        detail: "Rewards",
    },
]

const Funds = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="funds_container">
                <div className="funds_box">
                    <div className="funds_title">
                        <p className="title">Funds</p>
                        <p className="dec"> <span> Click here </span> to understand how fund balances are represented. </p>
                    </div>
                    <div className="important">
                        <p className="important_title"> <p> IMPORTANT </p> </p>
                        <div className="important_data">
                            <p className="detail"> You've a shortfall of Rs. 99000 for an ongoing deal closure. Please add funds to ensure deal closure. </p>
                            <a href="#"> View Closure Details </a>
                        </div>
                    </div>
                    <div className="funds_data">
                        {
                            FundsData.map((data, index) => {
                                return (
                                    <>
                                        <Accordion expanded={expanded === `panel${index}`} onChange={data.data ? handleChange(`panel${index}`) : null}>
                                            <AccordionSummary
                                                expandIcon={data.data ? <ExpandMoreIcon /> : null}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >
                                                <div className="balance_box">
                                                    {
                                                        data.img ?
                                                            <>
                                                                <div className="img"> {data.img} </div>
                                                            </> :
                                                            null
                                                    }
                                                    <div className="balance_data">
                                                        <div className="balance">
                                                            <p> <MonetizationOnIcon /> </p>
                                                            <p>{data.balance}</p>
                                                        </div>
                                                        <div className="detail">
                                                            {data.detail}
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {
                                                    data.data ?
                                                        data.data.map((subData, sunIndex) => {
                                                            return (
                                                                <>
                                                                    <div className="balance_data">
                                                                        <div className="balance">
                                                                            <p> <MonetizationOnIcon style={{ fontSize: "1.2rem" }} /> </p>
                                                                            <p>{subData.balance}</p>
                                                                        </div>
                                                                        <div className="detail">
                                                                            {subData.detail}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                        :
                                                        null
                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="funds_transfer">
                        <div className="add_funds">
                            <Button className={classes.btn1}> ADD FUNDS </Button>
                        </div>
                        <div className="withdraw_funds">
                            <Button className={classes.btn2}> WITHDRAW FUNDS </Button>
                        </div>
                        <div className="view_funds">
                            <Button className={classes.btn2}> VIEW TRANSFERS </Button>
                        </div>
                    </div>
                </div>

                <BottomSlide> This is Data </BottomSlide>

            </div>
        </>
    )
}

export default Funds