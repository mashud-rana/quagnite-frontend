"use client";
import React, { useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function PlyrReact({
    source,
    options = {
        controls: [
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
    },
}) {
    const playerRef = useRef(null);

    return (
        <Plyr ref={playerRef} source={source} options={options} />
    );
}