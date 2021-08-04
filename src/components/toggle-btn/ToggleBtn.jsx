import React, { useState } from 'react';
import "./ToggleBtn.css"

const ToggleBtn = ({checked,setChecked}) => {
    // const [checked,setChecked] = useState(checked);
    return (
        <label className="toggle_switch" style={checked?null:{backgroundColor:"#E6E6E6",borderColor:"#E6E6E6"}}>
            <input
             type="checkbox"
             onChange={(e)=>{setChecked(e.target.checked)}}
             className="toggle_checkbox"            
            />
            <div className="toggle_circle"></div>
        </label>
    )
}

export default ToggleBtn
