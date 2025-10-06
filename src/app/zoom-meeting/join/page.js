// components/ZoomMeeting.js
'use client';

import { useEffect, useState } from 'react';

export default function ZoomMeeting() {

  // Your Zoom meeting configuration
  const authEndpoint = "/api/zoom-signature"; // or your backend URL
  const meetingNumber = "85179379221";
  const passWord = "zX8dhio5";
  const role = 0;
  const userName = "Student";
  const userEmail = "student@app.com";
  const registrantToken = "";
  const leaveUrl = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    // Load Zoom SDK script dynamically
    const loadZoomSDK = async () => {
      if (typeof window === 'undefined') return;

      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://source.zoom.us/4.0.0/css/bootstrap.css';
      document.head.appendChild(link);

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
          
        }
      };
      document.head.appendChild(mainScript);
    };

    loadZoomSDK();
    setTimeout(()=>{
        startMeeting();
    },1000)
  }, []);


  const startMeeting = async () => {


    try {
      // Get signature from your backend
      // const signature = await getSignature();
      const signature = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJBNWtGSlRzVFNQVEZRWUtjSFZBZyIsImFwcEtleSI6IkE1a0ZKVHNUU1BURlFZS2NIVkFnIiwibW4iOiI4NTE3OTM3OTIyMSIsInJvbGUiOjAsImlhdCI6MTc1OTc0MzAwNCwiZXhwIjoxNzU5NzUwMjA0LCJ0b2tlbkV4cCI6MTc1OTc1MDIwNH0.vuEGeRqlKJgb2gtUath5opACt9HKGBYcSsEwn2NZ12o";

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
            meetingNumber: "85179379221",
            passWord: "zX8dhio5",
            userName: "Student Last",
            userEmail: "student@app.com",
            tk: '',
            zak: "eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMiIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlRtNnNKVTUyUWotR0lYZTJzME5HUGciLCJ6aWQiOiI1NTUyMGE0MWM1ZWM0MTZlODIzYzI5YzhhNGUxZGY5NiIsImlzcyI6IndlYiIsInNrIjoiMCIsInN0eSI6MSwid2NkIjoidXMwNSIsImNsdCI6MCwiZXhwIjoxNzU5NzUwMjMzLCJpYXQiOjE3NTk3NDMwMzMsImFpZCI6IkFQVDMwblI5UVlDdkdHYnZVS0hYZHciLCJjaWQiOiIifQ.rvh1sygPJx_IEmmqVfZmFv2U8YwOjwpL3xo6JVrYaL8",
            success: (success) => {
              console.log('Join success:', success);
              setIsJoining(false);
            },
            error: (error) => {
              console.error('Join error:', error);
              setIsJoining(false);
            },
          });
        },
        error: (error) => {
          console.error('Init error:', error);
          setIsJoining(false);
        },
      });
    } catch (error) {
      console.error('Error starting meeting:', error);
      setIsJoining(false);
    }
  };

  return (
    <div id="zmmtg-root"></div>
  );
}