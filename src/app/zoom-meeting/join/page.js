// components/ZoomMeeting.js
'use client';

import { useEffect, useState } from 'react';

export default function ZoomMeeting() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [isJoining, setIsJoining] = useState(false);

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
      const customZoomLink = document.createElement('link');
      customZoomLink.rel = 'stylesheet';
      customZoomLink.href = '../../../assets/css/zoom.css';
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

    // setIsJoining(true);

    try {
      // Get signature from your backend
      // const signature = await getSignature();
      const signature = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJBNWtGSlRzVFNQVEZRWUtjSFZBZyIsImFwcEtleSI6IkE1a0ZKVHNUU1BURlFZS2NIVkFnIiwibW4iOiI4NTE3OTM3OTIyMSIsInJvbGUiOjAsImlhdCI6MTc1OTc1MTQyMSwiZXhwIjoxNzU5NzU4NjIxLCJ0b2tlbkV4cCI6MTc1OTc1ODYyMX0.8_vcdck_SHuzSmer6Tz5lMD7HXzQ_FpgC9X_fjsZLJE";

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
            zak: "eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMiIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6IlRtNnNKVTUyUWotR0lYZTJzME5HUGciLCJ6aWQiOiJkZjgwMzI0MTk4Nzk0MzM1YjI1M2YyNTgxN2ExYmU3YSIsImlzcyI6IndlYiIsInNrIjoiMCIsInN0eSI6MSwid2NkIjoidXMwNSIsImNsdCI6MCwiZXhwIjoxNzU5NzU4NjUxLCJpYXQiOjE3NTk3NTE0NTEsImFpZCI6IkFQVDMwblI5UVlDdkdHYnZVS0hYZHciLCJjaWQiOiIifQ.Vb5dqhSg97H09xq56E74vB8IaSJLMSmNUvVHQZWf5Yc",
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
      {/* <h1 className="text-3xl font-bold mb-8">Zoom Meeting SDK - Next.js 15</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            Status: {isSDKLoaded ? '✓ SDK Loaded' : '⏳ Loading SDK...'}
          </p>
        </div>

        <button
          onClick={startMeeting}
          disabled={!isSDKLoaded || isJoining}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isJoining ? 'Joining Meeting...' : 'Join Meeting'}
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Make sure your backend server is running at {authEndpoint || 'your-server-url'}
        </p>
      </div> */}

      {/* Zoom SDK will render here */}
      <div id="zmmtg-root"></div>
    </div>
  );
}