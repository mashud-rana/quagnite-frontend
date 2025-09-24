"use client";
import dynamic from 'next/dynamic';
import React, {useMemo, useRef} from 'react';
const JoditEditorEditor = dynamic(() => import ("jodit-react"), {ssr: false});

const JoditEditor = ({editorValue, setEditorValue, editorRef}) => {
 
  const [content, setContent] = React.useState('aaaa');

  console.log( "editorValue", editorValue )

  const editorConfig = useMemo(() => ({
    readonly: false,
    placeholder: "What are your thoughts? (Type '/' to add images, files, or links)",
    height: 120,
    toolbar: true,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "fontsize",
      "|",
      "link",
      "image", // 👈 image button
      "file", // 👈 file attach button
    ],
    removeButtons: [
      "source",
      "fullsize",
      "about",
      "outdent",
      "indent",
      "video",
      "table"
    ],

    toolbarAdaptive: true,
    toolbarStickyOffset: 0,
    buttonsMD: 7,
    buttonsSM: 4,
    buttonsXS: 2,

    /* 👇 Image uploader config */
    uploader: {
      insertImageAsBase64URI: true, // local image will be inserted as base64
      imagesExtensions: [
        "jpg",
        "png",
        "jpeg",
        "gif",
        "svg",
        "webp"
      ],
      // alternative: server upload (example endpoint)
      url: "https://your-server.com/upload",
      method: "POST",
      process: (resp) => {
        // server theke image url peye return dite hobe
        return {
          files: [resp.url],
          path: resp.url,
          baseurl: resp.url
        };
      }
    }
  }), []);
  return (
    <div>
      <JoditEditorEditor
        ref={editorRef}
        value={editorValue}
        config={editorConfig}
        tabIndex={2}
        onChange={(newContent) => {
        setEditorValue(newContent)
      }}/>
    </div>
  );
};

export default JoditEditor;