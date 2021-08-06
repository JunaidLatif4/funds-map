import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
const EvarRedirect = () => {
  const location = useLocation();
  const history = useHistory();
  const status = new URLSearchParams(location.search).get("status");
  const userName = new URLSearchParams(location.search).get("userName");
  const userType = new URLSearchParams(location.search).get("userType");
  const token = new URLSearchParams(location.search).get("token");
  useEffect(() => {
    console.log(status);
    if (status == "SUCCESS") {
      history.push({ pathname: "/motp", state: { userName, userType, token } });
    }
    if (status == "FAILURE") {
      alert("verification failed......");
    }
    if (status == "EXPIRED") {
      alert("verification email expired");
    }
  }, []);
  return <div>helllloooooo buddy</div>;
};

export default EvarRedirect;
