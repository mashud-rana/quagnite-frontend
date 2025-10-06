"use client";
import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const VideoPlayer = ({ src, captionsSrc = null }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [maxTime, setMaxTime] = useState(0); // track maximum watched time

  const player = new Plyr('#player');

  // useEffect(() => {
  //   if (videoRef.current && src) {
  //     const player = new Plyr(videoRef.current, {
  //       controls: [
  //         "play",
  //         "rewind",
  //         "fast-forward",
  //         "progress",
  //         "current-time",
  //         "duration",
  //         "mute",
  //         "volume",
  //         "captions",
  //         "settings",
  //         "fullscreen",
  //       ],
  //       seekTime: 10,
  //     });

  //     playerRef.current = player;

  //     // Update maxTime as user watches
  //     const updateMaxTime = () => {
  //       if (player.currentTime > maxTime) {
  //         setMaxTime(player.currentTime);
  //       }
  //     };

  //     // Prevent forward seeking
  //     const preventForwardSeek = () => {
  //       if (player.currentTime > maxTime) {
  //         player.currentTime = maxTime;
  //       }
  //     };

  //     player.on("timeupdate", updateMaxTime);
  //     player.on("seeking", preventForwardSeek);

  //     return () => {
  //       player.off("timeupdate", updateMaxTime);
  //       player.off("seeking", preventForwardSeek);
  //       player.destroy();
  //     };
  //   }
  // }, [src, maxTime]);

  if (!src) return null;

  return (
    <video id="player" playsinline controls  style={{ width: "100%", maxHeight: "500px" }} >
        <source src={src} type="video/mp4" />
       
        {/* <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> */}
      </video>
    // <video
    //   id="player"
    //   ref={videoRef}
    //   playsInline
    //   controls
    //   style={{ width: "100%", maxHeight: "500px" }}
    // >
    //   <source src={src} type="video/mp4" />
    //   {captionsSrc && (
    //     <track
    //       kind="captions"
    //       label="English"
    //       src={captionsSrc}
    //       srcLang="en"
    //       default
    //     />
    //   )}
    // </video>
  );
};

export default VideoPlayer;
