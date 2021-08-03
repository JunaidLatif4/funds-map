import React from "react";
import "./Funding.css";
import ShareIcon from "@material-ui/icons/Share";
import Table from "../table/Table";
const fundingData = [
  {
    heading: 12,
    desc: "No of Funding Rounds",
  },
  {
    heading: 12,
    desc: "No of Funding Rounds",
  },
  {
    heading: 12,
    desc: "No of Funding Rounds",
  },
  {
    heading: 12,
    desc: "No of Funding Rounds",
  },
  {
    heading: 12,
    desc: "No of Funding Rounds",
  },
  {
    heading: 12,
    desc: "No of Funding Rounds",
  },
];
const InvestorsData = [
  {
    name: "Mirae assets capital management japan LTC",
    Round: "Series 1 Kalaxton Garments",
    leadInvestor: "yes",
  },
  {
    name: "Mirae assets capital management japan LTC",
    Round: "Series 1 Kalaxton Garments",
    leadInvestor: "yes",
  },
  {
    name: "Mirae assets capital management japan LTC",
    Round: "Series 1 Kalaxton Garments",
    leadInvestor: "yes",
  },
  {
    name: "Mirae assets capital management japan LTC",
    Round: "Series 1 Kalaxton Garments",
    leadInvestor: "yes",
  },
];
const fundingRounds = [
  {
    Date: "Apr 6, 2020",
    Transaction: "Series 1 Kalaxton Garments",
    investors: "13",
    moneyraised: "$15.2Mn",
  },
  {
    Date: "Apr 6, 2020",
    Transaction: "Series 1 Kalaxton Garments",
    investors: "13",
    moneyraised: "$15.2Mn",
  },
  {
    Date: "Apr 6, 2020",
    Transaction: "Series 1 Kalaxton Garments",
    investors: "13",
    moneyraised: "$15.2Mn",
  },
  {
    Date: "Apr 6, 2020",
    Transaction: "Series 1 Kalaxton Garments",
    investors: "13",
    moneyraised: "$15.2Mn",
  },
];

const Funding = () => {
  return (
    <div className="funding__wrapper">
      <div className="funding__header">
        <span className="fh__text">Funding Summary</span>
        <span className="fh__icon">
          <ShareIcon />
        </span>
      </div>
      <div className="funding__body">
        {fundingData.map((item, index) => (
          <div className={`funding__item ${index % 2 !== 0 && "bordered"}`}>
            <span className="fi__heading">{item.heading}</span>
            <span className="fi__desc">{item.desc}</span>
          </div>
        ))}
      </div>
      <div className="funding__list">
        <div className="fl__item">
          Swiggy has recieved a total of 1.5B in funding over 12 rounds
        </div>
        <div className="fl__item">
          Swiggy has recieved a total of 1.5B in funding over 12 rounds
        </div>
        <div className="fl__item">
          Swiggy has recieved a total of 1.5B in funding over 12 rounds
        </div>
        <div className="fl__item">
          Swiggy has recieved a total of 1.5B in funding over 12 rounds
        </div>
      </div>
      <p className="funding__theading">Investors</p>
      <Table
        headings={["Name", "Round", "Lead Investor?"]}
        data={InvestorsData}
        colWidth={{ gridTemplateColumns: "2fr 1.2fr 1.2fr" }}
      />
      <p className="funding__theading">Funding Rounds</p>
      <Table
        headings={["Date", "Transaction", "No. of Investors", "Money raised"]}
        data={fundingRounds}
        colWidth={{
          gridTemplateColumns: "7fr 15fr 2fr 2fr",
        }}
      />
    </div>
  );
};

export default Funding;
