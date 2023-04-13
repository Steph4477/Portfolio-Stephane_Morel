import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-player">
      <iframe
        title="Video Player"
        src={src}
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
