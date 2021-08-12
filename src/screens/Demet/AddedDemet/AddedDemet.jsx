import React from "react";
import { Link } from "react-router-dom";
import "./AddedDemet.css";
import info from "../../../Assets/imgs/info.svg";

const arr = [
  {
    user: "1",
    name: "Despository",
    ls: "NSDL",
    status: " Active",
    id: "DP ID / Client ID",
    number: "IN123456789112",
    btn: "Dlete",
    cmr: "CMR",
  },
  {
    user: "2",
    name: "Despository",
    ls: "CSDL",
    status: "Active",
    id: "DP ID / Client ID",
    number: "12045234569112",
    btn: "Dlete",
    cmr: "CMR",
  },
  {
    user: "3",
    name: "Despository",
    ls: "CSDL",
    status: "Active",
    id: "DP ID / Client ID",
    number: "12045234569112",
    btn: "Dlete",
    cmr: "CMR",
  },
];

const Demat = (val) => {
  return (
    <>
      <div className="ad__container">
        <div className="addedbank__header">
          <div className="addedbank__left">{val.user}</div>
          <div className="addedbank__right">
            <div className="ad__para1">
              <p className="ad__p1name">{val.name}</p>
              <p className="ad__delbtn">{val.btn}</p>
            </div>
            <div className="ad__para2">
              <p className="ad__p2name">{val.ls}</p>
              <div
                className="active__class"
                style={{ display: "flex", position: "relative" }}
              >
                <p className="ad__active">{val.status}</p>
                <img className="om__thirdimg" src={info} alt="" />
              </div>
            </div>
            <div className="ad__para1">
              <p className="ad__p1name">{val.id}</p>
              <Link className="ad__cmr">{val.cmr}</Link>
            </div>
            <div className="ad__para4">
              <p className="ad__p4name">{val.number}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddedDemet = () => {
  return <>{arr.map(Demat)}</>;
};

export default AddedDemet;
