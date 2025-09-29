"use client";
import Image from "next/image";
import React from "react";
import PlyrReact from "@/components/Share/VideoPlayer/PlyrReact/PlyrReact";


const LecturePreview = ({ lecture }) => {

  if (!lecture) {
    return <div>No lecture selected</div>;
  }


  switch (lecture.lecture_format) {
    case "pdf":
      return (
        <div key={`${lecture.uuid}-${lecture.lecture_format}`}>
          <iframe
         
          src={lecture.pdf_url}
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
        </div>
      );

    case "image":
      return (
        <div key={`${lecture.uuid}-${lecture.lecture_format}`}>
        <Image
         
          src={lecture.image_url}
          alt={lecture.title}
          width={800}
            height={450}
        />
        </div>
      );

    case "audio":
      return (
        <div key={`${lecture.uuid}-${lecture.lecture_format}`}>
        <audio controls style={{ width: "100%" }}>
          <source src={lecture.audio_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        </div>
      );

    case "video":
       
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
      const videoSrc = {
        type: "video",
        sources: [
          {
            src: lecture.video_url, // use your local video file from public folder
            type: "video/mp4",
          }
        ],
      
        
      };
      return (
      
        <>
        <div key={`${lecture.uuid}-${lecture.lecture_format}`}>
          <PlyrReact  options={options} source={videoSrc} />
        </div>
        </>
        
      );

    case "slide":
      return (
        <div key={`${lecture.uuid}-${lecture.lecture_format}`}>
          <iframe
            src={lecture.slide_url}
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </div>
      );

      
    default:
      return <div>Unsupported lecture format</div>;
  }
};

export default LecturePreview;