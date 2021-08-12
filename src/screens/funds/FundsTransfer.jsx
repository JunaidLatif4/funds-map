import React from 'react'

import { makeStyles, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './FundsTransfer.scss';



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

const FundsTransfer = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="fundstransfer_container">
                <div className="fundstransfer_box">
                    <div className="fundstransfer_title">
                        <p className="title">Funds</p>
                        <p className="dec"> <span> Click here </span> to understand how fund balances are represented. </p>
                    </div>
                    <div className="fundstransfer_data">
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
                </div>
            </div>
        </>
    )
}

export default FundsTransfer
