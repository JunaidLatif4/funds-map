import React from 'react'

import clsx from 'clsx';
import { Button , makeStyles , Divider } from "@material-ui/core"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SpeedIcon from '@material-ui/icons/Speed';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import "./ClientPartnerMenu.css"


const useStyles = makeStyles({
    list: {
        width: "100%",
    },
    fullList: {
        width: 'auto',
    },
    menuDrawer: {
        "& .MuiPaper-root": {
            width: "100%"
        }
    }
});


const ClientpartnerMenu = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const handleClose = () => {
        setState({
            left: false
        })
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="menu_box">
                <Button onClick={handleClose} className="menu_close"> <CloseIcon /> </Button>

                <div className="avater_box">
                    <div className="avater"> <PersonOutlineIcon style={{ fontSize: "2rem", color: "#54abff" }} /> </div>
                    <div className="avater_title">
                        Sign up / Sign in
                    </div>
                </div>
                <div className="menu_data">
                    <div className="inp">
                        <PersonOutlineIcon style={{ color: "#2b65ff" }} /> <div className="inp_title"> My Profile </div>
                    </div>
                    <div className="inp">
                        <SpeedIcon style={{ color: "#2b65ff" }} /> <div className="inp_title"> Dashboard </div>
                    </div>
                    <div className="inp">
                        <LocalAtmIcon style={{ color: "#2b65ff" }} /> <div className="inp_title"> Funds </div>
                    </div>
                    <div className="inp">
                        <ListAltIcon style={{ color: "#2b65ff" }} /> <div className="inp_title"> Orders </div>
                    </div>
                    <div className="inp">
                        <SettingsIcon style={{ color: "#2b65ff" }} /> <div className="inp_title"> Settings </div>
                    </div>
                </div>
                <div className="ref_box">
                        <p className="ref_title">Refer & Earn BIG</p>
                        <p className="ref_detail">Refer your friends and be entitled to receive x% of their x for life time.</p>
                        <Button style={{backgroundColor:"#2574ff" , padding:".7rem 2rem" , margin:".5rem 0" , color:"white" , fontSize:"1.2rem"}}> REFER A FRIEND </Button>
                </div>
                <div className="becomepartner_box">
                    <p className="feedback"> Feedback </p>
                    <p className="rateus"> Rate us </p>
                    <p className="partner"> Become a Partner </p>
                </div>

            </div>

        </div>
    );
    return (
        <>
            <div className="menu_container">
                <div className="menu_nav">
                    <Button onClick={toggleDrawer("left", true)}><MenuIcon /></Button>
                <SwipeableDrawer
                    className={classes.menuDrawer}
                    anchor="left"
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    {list("left")}
                </SwipeableDrawer>
                <Button><NotificationsIcon style={{marginRight:"1.2rem"}}/></Button>
                </div>
                
            </div>
            <Divider style={{width:"100%"}}/>
        </>
    )
}

export default ClientpartnerMenu
