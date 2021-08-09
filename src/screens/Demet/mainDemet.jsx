
import BottomSlide from "../../components/bottom-slide/BottomSlide";
import BSHeader from "../profile/components/bs-header/BSHeader";
import React, { useState, useEffect } from "react";
import UploadDemet from './UploadDemet/UploadDemet';
import Button from "../../components/button/Button";
import AddDemet from './AddDemetAccount/AddDemet';

function MainDemet({ demat, setDemat, stepD, setStepD }) {

    const handel2 = () => {
        console.log("handel2")
    }
    return (
        <div>
            <BottomSlide closeBSlider={demat}>
                <BSHeader
                    setCloseBSlider={() => setDemat(false)}
                    text="Add Demat A/C"
                />
                {stepD == "step1" && <UploadDemet />}
                {stepD == "step2" && <AddDemet />}


                {stepD == "step2" && <Button click={() => handel2()} text="CONFIRM DEMAT ACCOUNT" />}
            </BottomSlide>
        </div>
    )
}

export default MainDemet
