import React from "react";
import { delete_bank } from "../../../api/profile";
import "./AddedBank.css";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { delete_stateBank } from "../../../store/Bank";

const arr = [
  {
    user: "1",
    name: "Name",
    btn: "Delete",
    username: "Jonathan M Aledanders",
    bname: "Bank",
    bankname: "American Express",
    branch: "Branch",
    branchname: "Fort, Georage Avenue 23",
    account: "Account Number",
    accountnumber: "XXXX - XXXX - XXXX - 1234",
  },
  {
    user: "2",
    name: "Name",
    btn: "Delete",
    username: "Jonathan M Aledanders",
    bname: "Bank",
    bankname: "American Express",
    branch: "Branch",
    branchname: "Fort, Georage Avenue 23",
    account: "Account Number",
    accountnumber: "XXXX - XXXX - XXXX - 1234",
  },
];

const Bank = (val, index) => {
  const dispatch = useDispatch();
  const handle_delete = async () => {
    let delete_res = await delete_bank(
      val.bankAccountId.bankAccountNumber,
      val.bankAccountId.ifsc
    );
    if (delete_res.error) {
      console.log("error in deleting demat");
    } else {
      dispatch(delete_stateBank(index));
      toast.success("Deleted Successfully", {
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="addedbank__container">
        <div className="addedbank__header">
          <div className="addedbank__left">{index + 1}</div>
          <div className="addedbank__right">
            <div className="user__info">
              <div className="user__w-name">
                <p className="ab__w-name">Name</p>
                <p className="ab__delbtn" onClick={() => handle_delete()}>
                  Delete
                </p>
              </div>
              <div className="ab__name">{val.accountHolderName}</div>
              <div className="user__w-name">
                <p className="ab__w-name">Bank</p>
              </div>
              <div className="ab__name">{val.bankName}</div>
              <div className="user__w-name">
                <p className="ab__w-name">Branch</p>
              </div>
              <div className="ab__name">{val.branchName}</div>
              <div className="user__w-name">
                <p className="ab__w-name">Account Number</p>
              </div>
              <div className="ab__name">
                XXXX - XXXX - XXXX -{" "}
                {val.bankAccountId.bankAccountNumber.substr(10, 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddedBank = ({ banks }) => {
  return <>{banks?.map(Bank)}</>;
};

export default AddedBank;
