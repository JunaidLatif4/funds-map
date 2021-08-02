import React from "react";
import "./Table.css";

const Table = ({ headings, data }) => {
  const keys = Object.keys(data[0]);
  return (
    <table className="table__wrapper">
      <thead className="table__header">
        {headings.map((heading) => (
          <th className="table__heading">{heading}</th>
        ))}
      </thead>
      <tbody className="table__body">
        {data.map((item) => (
          <tr className="table__row">
            {keys.map((key) => {
              return <td className="table__data">{item[key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
