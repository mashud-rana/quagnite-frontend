// components/ZoomMeetingSDK.js
'use client';

import { useEffect, useState } from 'react';

export default function ZoomMeetingSDK({config}) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [isJoining, setIsJoining] = useState(false);

  // Your Zoom meeting configuration
  const authEndpoint = "/api/zoom-signature"; // or your backend URL
  const meetingNumber = config?.meetingNumber;
  const passWord = config?.passWord;

  const userName = config?.userName;
  const userEmail = config?.userEmail;
  const registrantToken = "";
  const leaveUrl = typeof window !== 'undefined' ? config?.leaveUrl: '';
  const zak = config?.zak;
  const signature = config?.signature;

  useEffect(() => {
    // Load Zoom SDK script dynamically
    const loadZoomSDK = async () => {
      if (typeof window === 'undefined') return;

      // Load CSS
      const customZoomLink = document.createElement('link');
      customZoomLink.rel = 'stylesheet';
      customZoomLink.href = '/assets/css/zoom.css';  // ✅ Correct
      document.head.appendChild(customZoomLink);

      const link2 = document.createElement('link');
      link2.rel = 'stylesheet';
      link2.href = 'https://source.zoom.us/4.0.0/css/react-select.css';
      document.head.appendChild(link2);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://source.zoom.us/4.0.0/lib/vendor/react.min.js';
      document.head.appendChild(script);

      const script2 = document.createElement('script');
      script2.src = 'https://source.zoom.us/4.0.0/lib/vendor/react-dom.min.js';
      document.head.appendChild(script2);

      const script3 = document.createElement('script');
      script3.src = 'https://source.zoom.us/4.0.0/lib/vendor/redux.min.js';
      document.head.appendChild(script3);

      const script4 = document.createElement('script');
      script4.src = 'https://source.zoom.us/4.0.0/lib/vendor/redux-thunk.min.js';
      document.head.appendChild(script4);

      const script5 = document.createElement('script');
      script5.src = 'https://source.zoom.us/4.0.0/lib/vendor/lodash.min.js';
      document.head.appendChild(script5);

      // Load main Zoom SDK
      const mainScript = document.createElement('script');
      mainScript.src = 'https://source.zoom.us/zoom-meeting-4.0.0.min.js';
      mainScript.onload = () => {
        if (window.ZoomMtg) {
          window.ZoomMtg.preLoadWasm();
          window.ZoomMtg.prepareWebSDK();
           // loads language files, also passes any error messages to the ui
          window.ZoomMtg.i18n.load('en-US')
          window.ZoomMtg.i18n.reload('en-US')
          setIsSDKLoaded(true);
        }
      };
      document.head.appendChild(mainScript);
    };

    loadZoomSDK();
  
  }, []);

   // 🚀 Auto start meeting once SDK is loaded
  useEffect(() => {
    if (isSDKLoaded) {
      startMeeting();
    }
  }, [isSDKLoaded]);


  const startMeeting = async () => {
    if (!isSDKLoaded ) return;

    try {
      
      // Show Zoom meeting container
      const zoomContainer = document.getElementById('zmmtg-root');
      if (zoomContainer) {
        zoomContainer.style.display = 'block';
      }

      // Initialize Zoom SDK
      window.ZoomMtg.init({
        leaveUrl: leaveUrl,
        patchJsMedia: true,
        leaveOnPageUnload: true,
        success: (success) => {
          console.log('Init success:', success);

          // Join the meeting
          window.ZoomMtg.join({
            signature: signature,
            meetingNumber: meetingNumber,
            passWord: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zak,
            success: (success) => {
              console.log('Join success:', success);
            //   setIsJoining(false);
            },
            error: (error) => {
              console.error('Join error:', error);
            //   setIsJoining(false);
            },
          });
        },
        error: (error) => {
          console.error('Init error:', error);
        //   setIsJoining(false);
        },
      });
    } catch (error) {
      console.error('Error starting meeting:', error);
    //   setIsJoining(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Zoom SDK will render here */}
      <div id="zmmtg-root"></div>
    </div>
  );
}