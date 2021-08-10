import React from 'react'

import clsx from 'clsx';
import { Button, makeStyles, Divider } from "@material-ui/core"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SpeedIcon from '@material-ui/icons/Speed';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Button1 from "../../components/button/Button";

import "./ClientPartnerMenu.css"

import "./ClientPartnerMenu.css";

const useStyles = makeStyles({
  list: {
    width: "100%",
  },
  fullList: {
    width: "auto",
  },
  menuDrawer: {
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
});

const ClientpartnerMenu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const handleClose = () => {
    setState({
      left: false,
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
          <div className="avater"> <PersonOutlineIcon className='signup_icon' /> </div>
          <div className="avater_title">
            Sign up / Sign in
          </div>
        </div>
        <div className="menu_data">
          <div className="inp">
            <PersonOutlineIcon className="icon_blue" /> <div className="inp_title fontweight_500"> My Profile </div>
          </div>
          <div className="inp">
            <SpeedIcon className="icon_blue" /> <div className="inp_title fontweight_500"> Dashboard </div>
          </div>
          <div className="inp">
            <LocalAtmIcon className="icon_blue" /> <div className="inp_title fontweight_500"> Funds </div>
          </div>
          <div className="inp">
            <ListAltIcon className="icon_blue" /> <div className="inp_title fontweight_500"> Orders </div>
          </div>
          <div className="inp">
            <SettingsIcon className="icon_blue" /> <div className="inp_title fontweight_500"> Settings </div>
          </div>
        </div>
        <div className="ref_box">
          <p className="ref_title">Refer & Earn BIG</p>
          <p className="ref_detail fontweight_500">Refer your friends and be entitled to receive x% of their x for life time.</p>
          <Button1 wid="width" text="REFER A FRIEND" ></Button1 >
        </div>
        <div className="becomepartner_box">
          <p className="feedback fontweight_500"> Feedback </p>
          <p className="rateus fontweight_500"> Rate us </p>
          <p className="partner fontweight_500"> Become a Partner </p>
        </div>

      </div>

    </div>

  );
  return (
    <>
      <div className="menu_container">
        <div className="menu_nav">
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            className={classes.menuDrawer}
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          <Button>
            <NotificationsIcon style={{ marginRight: "1.2rem" }} />
          </Button>
        </div>
      </div>
    </>
  );

}

export default ClientpartnerMenu;
