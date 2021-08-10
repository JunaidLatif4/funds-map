import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { whoami } from "../../../../api/auth";
const EvarRedirect = () => {
  const [msg, setMsg] = useState("");
  const location = useLocation();
  const history = useHistory();
  const status = new URLSearchParams(location.search).get("status");
  const userName = new URLSearchParams(location.search).get("userName");
  const userType = new URLSearchParams(location.search).get("userType");
  const token = new URLSearchParams(location.search).get("token");

  const get_details = async () => {
    const my_details = await whoami();
    if (my_details.error) {
      alert("error getting details");
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
  return <div>{msg}</div>;
};

export default EvarRedirect;