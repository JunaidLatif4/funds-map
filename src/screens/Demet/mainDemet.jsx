import BottomSlide from "../../components/bottom-slide/BottomSlide";
import BSHeader from "../profile/components/bs-header/BSHeader";
import React, { useState, useEffect } from "react";
import UploadDemet from "./UploadDemet/UploadDemet";
import Button from "../../components/button/Button";
import AddDemet from './AddDemetAccount/AddDemet';
import { add_demat, otp_generate, confirm_demat } from '../../api/profile'

function MainDemet({ demat, setDemat, stepD, setStepD }) {


  const [pdf_file, setPdf_color] = useState(null)
  const [demat_response, setDemat_response] = useState();
  const [otp, setOtp] = useState();
  const [data_for_step2, setData_for_step2] = useState();

  const verify_upload = async (data) => {
    let demat_res = await add_demat(data)
    if (demat_res.error) {
      alert("error in bank validation2")
    }
    else {
      console.log("res", demat_res)
      setDemat_response(demat_res)
      let otp_res = await otp_generate(demat_res.data?.data?.validationKey)
      if (otp_res.error) {
        console.log("otp generate error in demat")
      }
      else {
        setData_for_step2({ clientid: demat_res.data?.data?.clientId, })
        setStepD("step2")
      }
    }
  }

  const confirm_demat = async () => {
    let confirm_res = await confirm_demat(demat_response.data?.data?.clientId, demat_response.data?.data?.depositoryId, demat_response.data?.data?.validationKey, otp)
  }


  return (
    <div>
      <BottomSlide closeBSlider={demat}>
        <BSHeader
          setCloseBSlider={() => setDemat(false)}
          text="Add Demat A/C"
        />
        {stepD == "step1" && <UploadDemet setPdf_color={setPdf_color} verify_upload={verify_upload} />}
        {stepD == "step2" && <AddDemet setOtp={setOtp} />}
        {stepD == "step2" && <Button click={() => confirm_demat()} text="CONFIRM DEMAT ACCOUNT" />}
      </BottomSlide>
    </div>
  )
}

export default MainDemet;
