import React from 'react'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

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
                <Button onClick={handleClose} className="menu_close"> <CloseIcon/> </Button>
                
                <div className="avater_box">
                    <div className="avater"> <PersonOutlineIcon style={{fontSize:"2rem"}}/> </div>
                    <div className="avater_title">
                        Sign up / Sign in
                    </div>
                </div>

            </div>

        </div>
    );
    return (
        <>
            <div className="menu_container">
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
                <Button><NotificationsIcon /></Button>
            </div>
        </>
    )
}

export default ClientpartnerMenu
