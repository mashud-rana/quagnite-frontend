"use client";
import Image from "next/image";
import React from "react";

const LecturePreview = ({ lecture }) => {
  if (!lecture) {
    return <div>No lecture selected</div>;
  }

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
      return (
        <video
          controls
          width="100%"
          height="auto"
          style={{ maxHeight: "500px" }}
          
        >
          <source src={lecture.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
