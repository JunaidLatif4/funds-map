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



const FundsTransferData = [
    {
        status: "succ",
        date: "02/04/2021",
        balance: "1,00,00,000",
        detail: "Net-Banking",
        data: {
            account: "123123123123",
            bank: "HDFC",
            ifsc: "HDFC000000123 (Horniman Circle)",
            ref: "MMASDIJ2314K234"
        }
    },
    {
        status: "fail",
        date: "02/04/2021",
        balance: "65,00,000",
        detail: "UPI",
        data: {
            account: "123123123123",
            bank: "HDFC",
            ifsc: "HDFC000000123 (Horniman Circle)",
            ref: "MMASDIJ2314K234",
            err: "Transaction failed as funds were received from a bank accountthat is not registered."
        }
    },
    {
        status: "succ",
        date: "02/04/2021",
        balance: "35,00,000",
        detail: "NEFT / RTGS",
        data: {
            account: "123123123123",
            bank: "HDFC",
            ifsc: "HDFC000000123 (Horniman Circle)",
            ref: "MMASDIJ2314K234"
        }
    },
    {
        status: "fail",
        date: "02/04/2021",
        balance: "35,00,000",
        detail: "Net-Banking",
        data: {
            account: "123123123123",
            bank: "HDFC",
            ifsc: "HDFC000000123 (Horniman Circle)",
            ref: "MMASDIJ2314K234",
            err: "Transaction failed as funds were received from a bank accountthat is not registered."
        }
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
                        <p className="title"> Funds Transfer </p>
                    </div>
                    <div className="dec"> <span> Note : </span> Transfer’s done via non-electronic NEFT / RTGSshow up here, once the funds hit our bank account. Untilthen you won’t be able to see any status here. </div>
                    <div className="fundstransfer_data">
                        {
                            FundsTransferData.map((data, index) => {
                                return (
                                    <>
                                        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} style={{ borderColor: data.status == "fail" ? "red" : null }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >
                                                <div className="balance_box">
                                                    <div className="date">
                                                        Date : {data.date}
                                                    </div>
                                                    <div className="balance_data">
                                                        <div className="balance">
                                                            <p> <MonetizationOnIcon /> </p>
                                                            <p>{data.balance}</p>
                                                        </div>
                                                        <div className="detail">
                                                            Addition Via {data.detail}
                                                        </div>
                                                    </div>
                                                    <div className="success_box" style={{ color: data.status == "fail" ? "red" : null }}>
                                                        <span style={{ backgroundColor: data.status == "fail" ? "red" : null }}>  </span> {data.status == "fail" ? " Failed " : " Successfull "}
                                                    </div>

                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className="balance_detail">
                                                    <div className="account"> Bank Account : {data.data.account} </div>
                                                    <div className="bank"> {data.data.bank} Bank </div>
                                                    <div className="ifsc"> IFSC : {data.data.ifsc} </div>
                                                    <div className="ref"> Transection reference : {data.data.ref} </div>
                                                    {
                                                        data.data.err &&
                                                        <div className="err_note">
                                                            {data.data.err} <br /> Please click here to <a href="#"> Add a bank account </a>
                                                        </div>
                                                    }
                                                </div>
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
