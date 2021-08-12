import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { whoami } from "../../../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const EvarRedirect = () => {
  const [msg, setMsg] = useState("");
  const location = useLocation();
  const history = useHistory();
  const status = new URLSearchParams(location.search).get("status");
  const userName = new URLSearchParams(location.search).get("userName");
  const userType = new URLSearchParams(location.search).get("userType");
  const token = new URLSearchParams(location.search).get("token");
  const stateToken = useSelector((state) => state.user.token);

  const get_details = async () => {
    const my_details = await whoami(stateToken);
    if (my_details.error) {
      toast.error("Error getting details", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log(my_details.data);
    }
  };

  useEffect(() => {
    get_details();
    // console.log(status);
    // if (status == "SUCCESS") {
    //   localStorage.setItem("token", token);
    //   history.push({ pathname: "/motp", state: { userName, userType, token } });
    // }
    // if (status == "FAILURE") {
    //   setMsg("verification failed......");
    // }
    // if (status == "EXPIRED") {
    //   setMsg("verification email expired");
    // }
  }, []);
  return (
    <div>
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
      {msg}
    </div>
  );
};

export default EvarRedirect;
