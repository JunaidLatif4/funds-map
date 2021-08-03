import React from "react";
import { Link} from "react-router-dom";
import './Addlogo.css'
import BackupIcon from '@material-ui/icons/Backup';

const Addlogo = () => {
  return (
    <>
      <div className="Addlogo__container">
        <div className="Addlogo__header">
          <div className="header__heading">
            Add your logo to<Link>your website</Link>
          </div>
        </div>

        <div className="Addlogo__footer">
            <div className="Addlogo__btnns">
                <button className="addlogo__btn1">
                    <div className="footer__logo"><BackupIcon/></div>
                    <div className="footer__text">UPLOAD YOUR LOGO</div>
                </button>
                <button className="addlogo__btn2">
                    <div className="btn2__or">or</div>
                    <div className="btn2__text">Upload later</div>
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Addlogo;
