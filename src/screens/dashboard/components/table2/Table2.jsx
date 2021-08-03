import React from "react";
import image from "../../../../Assets/imgs/tech.jpg";
import "./Table2.css";
const tableData = [
  {
    image,
    name: "Full Name",
    location: "location here",
    email: "example1234@gmail.com",
  },
  {
    image,
    name: "Full Name",
    location: "location here",
    email: "example1234@gmail.com",
  },
  {
    image,
    name: "Full Name",
    location: "location here",
    email: "example1234@gmail.com",
  },
  {
    image,
    name: "Full Name",
    location: "location here",
    email: "example1234@gmail.com",
  },
];
const Table2 = () => {
  return (
    <div className="table2__wrapper">
      <div className="table2__container">
        <div className="table2__heading">
          <span className="table2__data">
            <span className="table2__name">Name</span>
          </span>
          <span className="table2__data">Location</span>
          <span className="table2__data">Email</span>
        </div>
        {tableData.map((data, index) => (
          <div
            className={`table2__row ${index % 2 == 0 && "table2__row_gray"}`}
          >
            <span className="table2__data_img">
              <img src={data.image} className="table2__img" />
              <span className="table2__name">{data.name}</span>
            </span>
            <span className="table2__data">{data.location}</span>
            <span className="table2__data">{data.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table2;
