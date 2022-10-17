import React, { useState } from "react";
import ReactPlayer from "react-player";
import play from "../../src/assets/images/play.png";
import PropTypes from "prop-types";
import { connect, styled } from "frontity";

const CustomVideoPlayer = ({ url, previewUrl }) => {
  const [playing, setPlaying] = useState(false);

  return !playing ? (
    <div style={{ position: "relative", width: "100%", height: "100%",maxWidth:"600px",margin:"0 auto"}}>
      <img style={{width:"100%"}} src={previewUrl} />
      <img
        onClick={() => setPlaying(true)}
        style={{
          position: "absolute",
          width: "35px",
          top: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          left: "50%",
          cursor: "pointer",
          zIndex: 1,
        }}
        src={play}
      />
    </div>
  ) : (
    <ReactPlayer
      width="100%"
      maxWidth="600px"
      height="100%"
      playing={playing}
      style={{aspectRatio:'16 / 9',maxWidth:"600px",margin:"0 auto"}}
      url={url}
      controls={true}
    />
  );
};

CustomVideoPlayer.propTypes = {
  className: PropTypes.string,
};

export default styled(CustomVideoPlayer)`

`;
