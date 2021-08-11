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
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aW5hcGlrMTIyIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifSx7ImF1dGhvcml0eSI6IlJPTEVfSU5ESVZJRFVBTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg1MjI5NjUsImV4cCI6MTYyODUyNTk2NX0.HIx--8P9RnHuUfZx0fhfq4YYcS4zh4pN08nHZzkxivE`,
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
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aW5hcGlrMTIyIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifSx7ImF1dGhvcml0eSI6IlJPTEVfSU5ESVZJRFVBTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg1MjI5NjUsImV4cCI6MTYyODUyNTk2NX0.HIx--8P9RnHuUfZx0fhfq4YYcS4zh4pN08nHZzkxivE`,
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
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWxheXNwZGFmc2RoamgiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9PUkdBTklTQVRJT05BTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg2MjEyMDgsImV4cCI6MTYyODYyNDIwOH0.-WggBHVStsFHgS5pVfwAkWRPU-LqVSywcCSpE0HER5o`,
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
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWxheXNwZGFmc2RoamgiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9PUkdBTklTQVRJT05BTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg2MjEyMDgsImV4cCI6MTYyODYyNDIwOH0.-WggBHVStsFHgS5pVfwAkWRPU-LqVSywcCSpE0HER5o`,
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


export const otp_generate = async (validationkey , ifsc , accountNumber) => {
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
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWxheXNwZGFmc2RoamgiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9PUkdBTklTQVRJT05BTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg2MjEyMDgsImV4cCI6MTYyODYyNDIwOH0.-WggBHVStsFHgS5pVfwAkWRPU-LqVSywcCSpE0HER5o`,
        "Content-Type": "application/json",
      },
      data: {
          ifsc:ifsc,
          bankAccountNumber:accountNumber  
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


export const bank_save = async (otp , validationkey , accountHolderName , bankName , accountNumber , ifsc) => {
  console.log(otp , validationkey , accountHolderName , bankName , accountNumber , ifsc)
  
  const resolved = {
    data: null,
    error: null,
  };
  try {
    resolved.data = await axios({
      url: "/api/v1/otp/generate?txnId=" + validationkey,
      method: "get",
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWxheXNwZGFmc2RoamgiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9PUkdBTklTQVRJT05BTF9QQVJUTkVSIn1dLCJpYXQiOjE2Mjg2MjEyMDgsImV4cCI6MTYyODYyNDIwOH0.-WggBHVStsFHgS5pVfwAkWRPU-LqVSywcCSpE0HER5o`,
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