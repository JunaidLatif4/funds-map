import React, { useState } from 'react'

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

import BottomSlide from '../../components/bottom-slide/BottomSlide'
import "./Funds.scss"

import Menu from '../../components/client-partner-menu/ClientPartnerMenu'

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
    const [presentStep, setPresentStep] = useState("addfund")
    const [value, setValue] = React.useState('female');
    const [openSlide, setOpenSlide] = useState({
        open: false,
        div: null
    })

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const opentheSlide = () => {
        setOpenSlide({
            open: true
        })
    }

    const nextStep = (props) => {
        setPresentStep(props)
    }

    const AddAmountStep = () => {
        return (
            <>
                <div className="add_funds_slider">
                    <div className="heading">
                        Add Funds
                    </div>
                    <div className="title"> Amount (Rs.) </div>
                    <div className="amount">
                        <input type="text" placeholder="Enter Amount" />
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={Changeradio}>
                                <FormControlLabel value="female" control={<Radio />} label="Net Banking  /  Debit Cards / UPI" />
                                <FormControlLabel value="male" control={<Radio />} label="Offline NEFT /  RTGS" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Button className={classes.btn1} onClick={() => nextStep("selectbank")}> ADD FUNDS </Button>
                </div>
            </>
        )
    }
    const SelectBankStep = () => {
        return (
            <>
                <div className="add_bank_slide">
                    <div className="heading">
                        <p> Add Funds </p>
                        <div className="detail">
                            Select the bank account from where you wish to Remit funds via NEFT / RTGS
                        </div>
                    </div>
                    <div className="select_bank">
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={Changeradio}>
                                <FormControlLabel value="female" control={<Radio />} label={<> <div className="bank_container"> <div className="name"> American Express </div> <div className="accnumber"> xxxx - xxxx - xxxx - 1234 </div> <div className="address"> Fort, Geroge Ave.63 </div> </div> </>} />
                                {/* <FormControlLabel value="male" control={<Radio />} label="Offline NEFT /  RTGS" /> */}
                            </RadioGroup>
                        </FormControl>
                        <div className="add_bank">
                            <span> + </span> Add Bank
                        </div>
                    </div>
                    <Button className={classes.btn1} onClick={() => nextStep("fundadded")} > CONTINUE </Button>

                </div>
            </>
        )
    }
    const FundsAddedStep = () => {
        return (
            <>
                <div className="funds_added_slide">
                    <div className="heading">
                        <p> Add Funds </p>
                        <div className="detail">
                            Please remit funds to the below mentioned account
                        </div>
                    </div>
                    <div className="transection_detail">
                        <div className="one_div">
                            <div className="beneficary">
                                <p className="title"> Beneficiary </p>
                                <div> FM's legal Name </div>
                            </div>
                            <div className="ifsc">
                                <p className="title"> IFSC </p>
                                <div> ICICI912832 </div>
                            </div>
                            <div className="account">
                                <p className="title"> Account </p>
                                <div> 123 456 789 12345 </div>
                            </div>
                        </div>
                        <div className="two_div">
                            <div className="bank">
                                <p className="title"> Bank </p>
                                <div> American Express </div>
                            </div>
                            <div className="branch">
                                <p className="title"> Branch </p>
                                <div> Horniman Circle </div>
                            </div>
                            <div className="important">
                                <p className="important_title"> <p> IMPORTANT </p> </p>
                                <div className="important_data">
                                    <p className="detail"> This account number is specifically for you, it will be different for other users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="note_box">
                        Once you’ve remitted the funds, please wait until the funds reach our bank account. We will intimate youvia sms / email as soon as we receive the funds & the same shall be added to available funds in the Funds Tab
                    </div>
                    <div className="notis">
                        <p className="important_title"> <p> IMPORTANT </p> </p>
                        <div className="important_data">
                            <p className="detail"> Please note that the remittance to the above account should only be made from the below mentionedaccount that you’ve selected:</p>
                        <div className="bank_container"> <div className="name"> American Express </div> <div className="accnumber"> xxxx - xxxx - xxxx - 1234 </div> <div className="address"> Fort, Geroge Ave.63 </div> </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const AddFundsStepper = (active) => {
        switch (active) {
            case "addfund":
                return <AddAmountStep />;
            case "selectbank":
                return <SelectBankStep />;
            case "fundadded":
                return <FundsAddedStep />;
            default:
                return <AddAmountStep />;
        }
    }

    const Changeradio = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Menu />
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
                            <Button className={classes.btn1} onClick={opentheSlide}> ADD FUNDS </Button>
                        </div>
                        <div className="withdraw_funds">
                            <Button className={classes.btn2}> WITHDRAW FUNDS </Button>
                        </div>
                        <div className="view_funds">
                            <Button className={classes.btn2}> VIEW TRANSFERS </Button>
                        </div>
                    </div>
                </div>
                {openSlide.open &&
                    <BottomSlide bottomSlide={() => setOpenSlide(false)}>
                        {AddFundsStepper(presentStep)}
                    </BottomSlide>
                }
            </div>
        </>
    )
}

export default Funds