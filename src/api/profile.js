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
      //   headers: {
      //     authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaXZhYmk0OTU2IiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifSx7ImF1dGhvcml0eSI6IlJPTEVfT1JHQU5JU0FUSU9OQUxfUEFSVE5FUiJ9XSwiaWF0IjoxNjI4MjQ0OTA4LCJleHAiOjE2MjgyNDc5MDh9.L4GIRwrAV7QwGcFmuQjk_hCaec_Qtv2JJXZd__HykX4",
      //   },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
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
      //   headers: {
      //     authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaXZhYmk0OTU2IiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifSx7ImF1dGhvcml0eSI6IlJPTEVfT1JHQU5JU0FUSU9OQUxfUEFSVE5FUiJ9XSwiaWF0IjoxNjI4MjQ0OTA4LCJleHAiOjE2MjgyNDc5MDh9.L4GIRwrAV7QwGcFmuQjk_hCaec_Qtv2JJXZd__HykX4`,
      //   },
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
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
        // authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaXZhYmk0OTU2IiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifSx7ImF1dGhvcml0eSI6IlJPTEVfT1JHQU5JU0FUSU9OQUxfUEFSVE5FUiJ9XSwiaWF0IjoxNjI4MjQ0OTA4LCJleHAiOjE2MjgyNDc5MDh9.L4GIRwrAV7QwGcFmuQjk_hCaec_Qtv2JJXZd__HykX4`,
        "Content-Type": "application/json",
      },
      data: otp,
    });
  } catch (error) {
    if (error.response) {
      resolved.error = error.response.data.message;
    }
    resolved.error = "Something went wrong";
  }
  return resolved;
};
