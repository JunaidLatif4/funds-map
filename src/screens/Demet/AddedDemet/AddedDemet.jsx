import React from "react";
import { Link } from "react-router-dom";
import "./AddedDemet.css";
import info from "../../../Assets/imgs/info.svg";
import { delete_demat } from "../../../api/profile";

import { ToastContainer, toast } from "react-toastify";

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

const Demat = (val, index) => {
  const handle_delete = async (index) => {
    let delete_res = await delete_demat(val.clientId, val.depositoryId);
    if (delete_res.error) {
      console.log("error in deleting demat");
    } else {
      toast.success("Deleted Successfuly", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div className="ad__container">
        <div className="addedbank__header">
          <div className="addedbank__left">{index + 1}</div>
          <div className="addedbank__right">
            <div className="ad__para1">
              <p className="ad__p1name">Depository</p>
              <p className="ad__delbtn" onClick={() => handle_delete(index)}>
                Delete
              </p>
            </div>
            <div className="ad__para2">
              <p className="ad__p2name">{val.depository}</p>
              <div
                className="active__class"
                style={{ display: "flex", position: "relative" }}
              >
                <p className="ad__active">{val.accountStatus}</p>
                <img className="om__thirdimg" src={info} alt="" />
              </div>
            </div>
            <div className="ad__para1">
              <p className="ad__p1name">DP ID / Client ID</p>
              <Link className="ad__cmr">CMR</Link>
            </div>
            <div className="ad__para4">
              <p className="ad__p4name">
                {val.depositoryId}
                {val.clientId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddedDemet = ({ demats }) => {
  return <>{demats.map(Demat)}</>;
};

export default AddedDemet;
