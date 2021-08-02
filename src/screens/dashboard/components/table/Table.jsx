import React from "react";
import "./Table.css";

const Table = ({ headings, data }) => {
  const keys = Object.keys(data[0]);
  return (
    <div className="table__wrapper">
      <div className="table__header">
        {headings.map((heading) => (
          <span className="table__heading">{heading}</span>
        ))}
      </div>
      <div className="table__body">
        {data.map((item) => (
          <div className="table__row">
            {keys.map((key) => {
              return <span className="table__data">{item[key]}</span>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
