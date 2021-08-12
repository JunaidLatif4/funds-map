import axios, { BASE_URL } from "../axiosInstance";

export const profile_details = async () => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "api/v1/users/profile",
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "Something went wrong";
    }
  }
  return resolved;
};

export const mobile_verification = async () => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "api/v1/users/mobile-verification",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "Something went wrong";
    }
  }
  return resolved;
};

export const verify_otp = async (otp) => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "api/v1/users/verify-mobile",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: { otp },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    } else {
      resolved.error = "Something went wrong";
    }
  }
  return resolved;
};

export const kyc_request = async () => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/kyc/identity",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};
export const add_leads = async (data) => {
  console.log(data);
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/users/leads",
      method: "post",
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
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};
export const adhar_details = async () => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/kyc/identity/aadhaar",
      method: "get",
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKSEdKSEciLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9PUkdBTklTQVRJT05BTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg2ODEzMzIsImV4cCI6MTYyODY4NDMzMn0.bnUy16Co4zk56I_xLk-bjU8REndLHauPZO1YfdXm3a8`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};
export const pan_details = async () => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/kyc/identity/pan",
      method: "get",
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKSEdKSEciLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9PUkdBTklTQVRJT05BTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg2ODEzMzIsImV4cCI6MTYyODY4NDMzMn0.bnUy16Co4zk56I_xLk-bjU8REndLHauPZO1YfdXm3a8`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};



                                                //******   Bank api   *******//


export const ifsc_validator = async (ifsc) => {
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/users/banks/ifsc/" + ifsc,
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};


export const bank_validator = async (ifsc , accountnumber) => {
  
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/users/banks/validate",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: {
          ifsc:ifsc,
          bankAccountNumber:accountnumber  
      }
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};

export const otp_generate = async (validationkey) => {
  console.log(validationkey)
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/otp/generate?txnId=" + validationkey,
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};

export const bank_save = async (otp , validationkey , accountHolderName , bankName , accountNumber , ifsc) => {
  console.log(otp , validationkey , accountHolderName , bankName , accountNumber , ifsc)
  
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/users/banks/",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: {
        bankAccountId:{ifsc:ifsc},
        bankAccountNumber:accountNumber,
        bankName:bankName,
        accountHolderName:accountHolderName,
        validationKey:validationkey,
        otp:otp
      }
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};



export const get_banks = async () => {
  
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/users/banks/",
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};


                                             //******   Demat api   *******//



export const add_demat = async (data) => {
  console.log(data)
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/demat/upload",
      method: "post",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data:data
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};  




export const get_demats = async () => {

  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/demat/",
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};


export const confirm_demat = async (clientid , depositoryid , validationkey , otps) => {
  
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/demat/confirm",
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: {
        clientId:clientid,
        depositoryId:depositoryid,
        validationKey:validationkey,
        otp:otps
      }
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};


                                            ////*** test signIn ***////



export const test_signin = async () => {
  
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/users/signin?username="+"hassnaatfarooq"+"&password="+"pass",
      method: "post",
    }); 
  } catch (error) {
    console.log(error);
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};




                                          ///***  ***///