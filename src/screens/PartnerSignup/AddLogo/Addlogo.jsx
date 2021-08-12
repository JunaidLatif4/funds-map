import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Addlogo.css";
import BackupIcon from "@material-ui/icons/Backup";

import Appbar from "../../dashboard/components/appbar/Appbar";

import DbCard from "../../dashboard/components/dbcard/DbCard";
import Slide from "../../dashboard/components/slide/Slide";
import video from "../../../Assets/videos/droneview.mp4";
import image from "../../../Assets/imgs/tech.jpg";
import { upload_logo } from "../../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
// import LogoBar from "./components/logo-bar/LogoBar";
// import BtnBar from "./components/btn-bar/BtnBar";
// import CompleteProfile from "./components/complete-profile/CompleteProfile";

const Addlogo = () => {
  const [uploadBtn, setUploadBtn] = useState(true);
  const stateToken = useSelector((state) => state.user.token);
  const [logo, setLogo] = useState("");

  const handleChange = (e) => {
    setLogo(e.target.files[0]);
    const file = e.target.files[0];
    console.log(file);
    const data = new FormData();
    data.append("file", file);
    add_logo(data);
    setLogo("");
  };

  const add_logo = async (logo) => {
    const uploaded = await upload_logo(logo, stateToken);
    if (uploaded.error) {
      toast.error(uploaded.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Logo uploaded successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="Addlogo__container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="Addlogo__footer">
        <div
          className="Addlogo__btnns"
          style={!uploadBtn ? { display: "none" } : null}
        >
          <label className="addlogo__btn1" for="addlogoinput">
            <input
              type="file"
              className="logo__input"
              id="addlogoinput"
              accept="image/png, image/gif, image/jpeg"
              onChange={handleChange}
              value={logo}
            />
            <div className="footer__logo">
              <BackupIcon />
            </div>
            <div className="footer__text">UPLOAD YOUR LOGO</div>
          </label>
          <button className="addlogo__btn2" onClick={() => setUploadBtn(false)}>
            <div className="btn2__or">or</div>
            <div className="btn2__text">Upload later</div>
          </button>
        </div>
      </div>
      <div className="Addlogo__header">
        <div className="header__heading">
          Add your logo to<Link>your website</Link>
        </div>
      </div>
      <div className="Addlogo__body">
        <div className="Addlogo__title">
          <h5>Your logo goes here</h5>
        </div>
        <Appbar />
        <Slide items={["About", "About", "About", "About", "About", "About"]} />
        <div className="Adlogo__main">
          <DbCard
            logo="data:image/jpeg;base64,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"
            title="Klaxton Garmetns"
            sector="Hospitality"
            lkv="15B"
            badge1="Gauging Interest"
            badge2="Fresh Round"
            badge1Style={{
              color: "rgb(165, 131, 67)",
              background: "rgba(228, 177, 100, 0.288)",
            }}
            badge2Style={{
              color: "rgb(126, 123, 123)",
              background: "rgba(211, 211, 211, 0.541)",
            }}
          />
          <DbCard
            logo="data:image/jpeg;base64,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"
            title="Klaxton Garmetns"
            sector="Hospitality"
            lkv="15B"
            badge1="Live Now"
            badge2="Fresh Round"
            badge1Style={{
              color: "rgb(114, 229, 112)",
              background: "rgba(114, 229, 112, 0.288)",
            }}
            badge2Style={{
              color: "rgb(126, 123, 123)",
              background: "rgba(211, 211, 211, 0.541)",
            }}
            closingSoon={true}
            video={video}
            highlights={true}
          />
          <DbCard
            logo="data:image/jpeg;base64,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"
            title="Klaxton Garmetns"
            sector="Hospitality"
            lkv="15B"
            badge1="Live Now"
            badge2="Fresh Round"
            badge1Style={{
              color: "rgb(114, 229, 112)",
              background: "rgba(114, 229, 112, 0.288)",
            }}
            badge2Style={{
              color: "rgb(126, 123, 123)",
              background: "rgba(211, 211, 211, 0.541)",
            }}
            closingSoon={true}
            image={image}
            turnedInStyle={{
              color: "black",
              background: "brown",
            }}
            highlights={true}
          />
          <DbCard
            logo="data:image/jpeg;base64,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"
            title="Klaxton Garmetns"
            sector="Hospitality"
            lkv="15B"
            badge1="Express Deal"
            badge2="2-way Quotes"
            badge1Style={{
              color: "rgb(242, 216, 138)",
              background: "rgba(228, 177, 100, 0.288) ",
              position: "absolute",
              top: "0",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
              padding: "3px 13px",
            }}
            badge2Style={{
              color: "rgb(14, 162, 211)",
              background: "rgba(21, 187, 242, 0.341)",
              marginTop: "15px",
            }}
            closingSoon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Addlogo;
