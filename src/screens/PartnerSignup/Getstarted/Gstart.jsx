import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../Components/media-box/MediaBox";
import video from "../Components/media-box/Gstart.mp4";
import "./Gstart.css";
import { useState } from "react";
import Button from "../../../components/button/Button";
import { useHistory } from "react-router-dom";

const Gstart = () => {
  const [time, settime] = useState(10);
  const history = useHistory();
  useEffect(() => {
    setInterval(
      () =>
        settime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            return 0;
          }
        }),
      1000
    );
  }, []);
  console.log(time);
  const next_page = () => {
    history.push("/customweb");
  };

  return (
    <>
      <div className="gstart__container">
        <div className="gstart__header">
          <div className="gstart__heading">
            Let's get&nbsp;<Link>Started</Link>
          </div>
          <p className="header__para">
            Watch this 5 minute video to get upto pace
          </p>
          <div className="getstart__media">
            <VideoPlayer video={video} />
          </div>
          <div className="getstart__next">
            {time <= 0 ? (
              <Button text="NEXT" click={next_page} />
            ) : (
              `Next(${time}s)`
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gstart;
