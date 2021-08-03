import React from "react";
import "./Table.css";

const Table = ({ headings, data, colWidth }) => {
  const keys = Object.keys(data[0]);
  return (
    <div className="table__wrapper">
      <div className="table__body" style={colWidth}>
        {headings.map((heading) => (
          <span className="table__heading">{heading}</span>
        ))}
        {data.map((item) => (
          <>
            {keys.map((key) => {
              return <span className="table__data">{item[key]}</span>;
            })}
          </>
        ))}
      </div>
    </div>
  );
};

export default Table;
