import axios, { BASE_URL } from "../axiosInstance";
export const signup = async (data) => {
  console.log("signup......");
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: `api/v1/users/signup`,
      method: "post",
      data,
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const e_verify = async (token) => {
  console.log("signup......");
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: `api/v1/users/email-verification`,
      method: "post",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const otp_mail = async (email) => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: `api/v1/users/login/otp`,
      method: "post",
      params: { type: "EMAIL", email },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const otp_sms = async (mobile) => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: `api/v1/users/login/otp`,
      method: "post",
      params: { type: "MOBILE", mobile },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const otp_mail_login = async (info) => {
  console.log(info);
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: `api/v1/users/login`,
      method: "post",
      params: { type: "EMAIL", email: info.email, mode: "OTP", otp: info.otp },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const otp_mobile_login = async (info) => {
  console.log(info);
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: `api/v1/users/login`,
      method: "post",
      params: {
        type: "MOBILE",
        mobile: info.mobile,
        mode: "OTP",
        otp: info.otp,
      },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const whoami = async () => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "api/v1/users/me",
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const add_mobile = async (data) => {
  console.log(data);
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "api/v1/users/mobile",
      method: "patch",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data,
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "something went wrong";
    }
  }
  return resolved;
};

export const partner_signup = async (data) => {
  console.log(data);
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await axios({
      url: "api/v1/users/signup",
      method: "post",
      headers: { contentType: "application/json" },
      data,
    });
  } catch (error) {
    if (error.response) {
      console.log("partner signup error response");
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};
export const email_verification = async () => {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await axios({
      url: "api/v1/users/email-verification",
      method: "post",
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};

export const generate_motp = async (token) => {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await axios({
      url: "api/v1/users/mobile-verification",
      method: "post",
      headers: { authorization: "Bearer " + token },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};
