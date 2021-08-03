import React from "react";
import "./About.css";
import image from "../../../../Assets/imgs/tech.jpg";
import MediaBox from "../media-box/MediaBox";
import { Link } from "react-router-dom";
import Table2 from "../table2/Table2";
const About = () => {
  const estData = [
    {
      heading: "Gurgaon, Haryana India.",
      desc: "HQ Location",
    },
    {
      heading: 2014,
      desc: "Founded Date",
    },
    {
      heading: "Rivigo Services pvt ltd",
      desc: "Legal Name",
    },
    {
      heading: "Bundl Technologies",
      desc: "Also Known As",
    },
  ];
  return (
    <div className="about__box">
      <div className="business__heading">About the business</div>
      <div className="business__desc">
        This content will populate from a text editor input box in the UI of
        backend and that of the companies resistering to raise fund. This will
        be a dynamic text editor and may include anything from text / images /
        tables / links / etc.
      </div>
      <MediaBox image={image} />
      <p className="about__table_d">
        Below is the table enlisting key Drivers of business, with Horizontal
        scroll populated from text editer table input
      </p>
      <Table2 />
      <div className="about__industries_heading">Industries</div>
      <div className="about__industries">
        <span>Hotels</span>
        <span>Hospitality</span>
        <span>Internet</span>
        <span>Technology</span>
      </div>
      <div className="business__heading">Founders</div>
      <div className="founders__box">
        <div className="fb__left">
          <span className="fbl__name">Deepak Garg</span>
          <span className="fbl__about">
            Aerospace scientist from NASA, worked at Area 51, 4 exists from his
            venture, basically boosting success
          </span>
        </div>
        <div className="fb__right">
          <img
            className="fbr__linkedin"
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
          />
        </div>
      </div>
      <div className="founders__box">
        <div className="fb__left">
          <span className="fbl__name">Gazal Karla</span>
          <span className="fbl__about">
            Aerospace scientist from NASA, worked at Area 51, 4 exists from his
            venture, basically boosting success
          </span>
        </div>
        <div className="fb__right">
          <img
            className="fbr__linkedin"
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
          />
        </div>
      </div>
      <div className="business__heading">Establishment</div>
      <div className="est__body">
        {estData.map((item, index) => (
          <div className={`est__item ${index % 2 !== 0 && "bordered"}`}>
            <span className="ei__heading">{item.heading}</span>
            <span className="ei__desc">{item.desc}</span>
          </div>
        ))}
      </div>
      <div className="business__heading">Website</div>
      <Link className="ab__bottom_links">https://www.swiggymylife.com</Link>
      <div className="business__heading">Download Resources</div>
      <div className="ab__bottom_links">
        <Link>Pitch Decks /</Link>
        <Link>Annual Reports /</Link>
        <Link>Presentations etc</Link>
      </div>
    </div>
  );
};

export default About;
