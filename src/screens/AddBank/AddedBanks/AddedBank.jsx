import React from "react";
import "./AddedBank.css";

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

const Bank = (val) => {
  return (
    <>
      <div className="addedbank__container">
        <div className="addedbank__header">
          <div className="addedbank__left">{val.user}</div>
          <div className="addedbank__right">
            <div className="user__info">
              <div className="user__w-name">
                <p className="ab__w-name">Name</p>
                <p className="ab__delbtn">Delete</p>
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
              <div className="ab__name">XXXX - XXXX - XXXX - {val.bankAccountId.bankAccountNumber.substr(10, 4)}</div>
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
