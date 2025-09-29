"use client";
import Image from "next/image";
import React,{useEffect, useRef } from "react";
import PlyrReact from "@/components/Share/VideoPlayer/PlyrReact/PlyrReact";


const LecturePreview = ({ lecture }) => {

  if (!lecture) {
    return <div>No lecture selected</div>;
  }

  
  const options = {
    controls: [
      "rewind", // ⏪ back 10s
      "play-large",
      "play",
      "progress",
      "current-time",
      "duration",
      "mute",
      "volume",
      "settings",
      "fullscreen",
    ],
    seekTime: 10, // how many seconds to skip
    invertTime: false, // show remaining time normally
   
    listeners: {
        seek: event => {
            const seekTime = event.detail.plyr.currentTime;
            if (seekTime > player.currentTime) {
                player.currentTime = seekTime; // Prevent seeking forward
            }
        }
    }
  };
 
  console.log("LecturePreview", lecture);

  switch (lecture.lecture_format) {
    case "pdf":
      return (
        <iframe
          src={lecture.pdf_url}
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      );

    case "image":
      return (
        <Image
          src={lecture.image_url}
          alt={lecture.title}
          width={800}
            height={450}
        />
      );

    case "audio":
      return (
        <audio controls style={{ width: "100%" }}>
          <source src={lecture.audio_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );

    case "video":
      const videoSrc = {
        type: "video",
        sources: [
          {
            src: lecture.video_url, // use your local video file from public folder
            type: "video/mp4",
          }
        ],
        // poster: "https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHww", // optional thumbnail
        
      };
      return (
      
        <>
        <PlyrReact options={options} source={videoSrc} />
        </>
        
      );

    case "slide":
      return (
        <iframe
          src={lecture.slide_url}
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      );

      
    default:
      return <div>Unsupported lecture format</div>;
  }
};

export default LecturePreview;