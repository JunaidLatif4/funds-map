import React from "react";
import "./MediaBox.css";

const VideoPlayer = ({ video, image, type }) => {
  return (
    <div className="media__box">
      {video && (
        <video autoplay controls width="100%">
          <source src={video} type={type} />
        </video>
      )}
      {image && <img src={image} className="mb__image" />}
    </div>
  );
};

export default VideoPlayer;
