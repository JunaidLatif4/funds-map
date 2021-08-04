import React from 'react'
import { Link } from "react-router-dom";
import "./Weblink.css"

const Weblink = () => {
    return (
        <>
        <div className="Weblink__component">
            <div className="Weblink__left"></div>
            <div className="Weblink__right"><Link className="Weblink__component__link">www.fundsmap.com/000010</Link></div>
        </div>
            
        </>
    )
}

export default Weblink
