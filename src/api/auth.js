import axios, { BASE_URL } from "../axiosInstance";
import { assertExpressionStatement } from "@babel/types";
export const signup = async () => {
  console.log("signup......");
  try {
    const data = await axios({
      url: `api/v1/users/signup`,
      method: "post",
      data: {
        email: "hassnaatfarooq@gmail.com",
        countryCode: "+92",
        mobileNumber: "03497430201",
        password: "1122asdf",
        userType: "ORGANISATIONAL_PARTNER",
        firstName: "Hasnat",
        lastName: "Farooq",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
