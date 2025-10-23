"use client";

import React, { useState, useEffect } from "react";
import { Modal, Spin } from "antd";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { SlMicrophone } from "react-icons/sl";
import { useRouter } from "next/navigation";
import styles from "./examCard.module.css";
import { toastError, toastSuccess } from "@/utils/helper";
import { useRecordWebcam } from 'react-record-webcam';

const ExamStartModal = ({ open, onCancel, enrollExam }) => {
  const router = useRouter();

  // State
  const [ready, setReady] = useState(false);
  const [testing, setTesting] = useState(false);
  const [networkOk, setNetworkOk] = useState(true);

  const [cameraDevices, setCameraDevices] = useState([]);
  const [micDevices, setMicDevices] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedMic, setSelectedMic] = useState("");

    const {
    devicesByType,
  } = useRecordWebcam();

  // ✅ Detect online/offline automatically
  useEffect(() => {
    const handleOnline = () => setNetworkOk(true);
    const handleOffline = () => setNetworkOk(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // ✅ Get device list (camera + mic)
  // useEffect(() => {
  //   const getDevices = async () => {
  //     try {
  //       // must request permission once to list devices
  //       await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

  //       const devices = await navigator.mediaDevices.enumerateDevices();
  //       const cameras = devices.filter((d) => d.kind === "videoinput");
  //       const mics = devices.filter((d) => d.kind === "audioinput");

  //       setCameraDevices(cameras);
  //       setMicDevices(mics);

  //       if (cameras[0]) setSelectedCamera(cameras[0].deviceId);
  //       if (mics[0]) setSelectedMic(mics[0].deviceId);
  //     } catch (error) {
  //       toastError("Cannot access camera/microphone. Please allow permission.");
  //     }
  //   };

  //   if (open) getDevices();
  // }, [open]);

  // ✅ Test camera & mic with selected devices
  const checkCameraMic = async () => {
    setTesting(true);
    try {
      const constraints = {
        video: selectedCamera ? { deviceId: { exact: selectedCamera } } : true,
        audio: selectedMic ? { deviceId: { exact: selectedMic } } : true,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      // Test for 2 seconds then stop
      setTimeout(() => {
        stream.getTracks().forEach((t) => t.stop());
      }, 2000);

      setReady(true);
      toastSuccess("Camera & Microphone working fine!");
    } catch (err) {
      toastError("Failed to access selected devices. Please check permissions.");
      setReady(false);
    } finally {
      setTesting(false);
    }
  };

  const handleStartExam = () => {
    if (!ready) {
      toastError("Please test your camera and microphone first.");
      return;
    }
    if(!networkOk){
      toastError('You are currently offline. Please check your internet connection before starting the exam')
      return;
    }
    onCancel?.();
    router.push(`/student/exams/start-exam/${enrollExam?.exam?.uuid}/${enrollExam?.uuid}?camera=${selectedCamera}&mic=${selectedMic}`);
    // router.push("/student/exams/start-exam");
  };

  console.log('device cameraDevices & micDevices',devicesByType)

  console.log('selected cam, mic', selectedCamera, selectedMic)
  return (
    <Modal
      title={
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>
            To ensure a fair and secure exam experience, please follow these
            steps before starting:
          </span>
          <a href="#" className={styles.helpLink}>
            Need Help?
          </a>
        </div>
      }
      open={open}
      onCancel={onCancel}
      onOk={handleStartExam}
      style={{ maxWidth: "90vw" }}
      width={928}
      okText="Start Exam"
      cancelText="Cancel"
    >
      <hr className={styles.ic_hr} />

      {/* Instruction List */}
      <ul className={styles.ic_list_container}>
        <li>Close all other apps & browser tabs.</li>
        <li>Enable Camera & Microphone Access for monitoring.</li>
        <li>Ensure Stable Internet Connection.</li>
        <li>Find a Quiet & Well-Lit Environment.</li>
      </ul>

      <hr className={styles.ic_hr} />
      <h6 className={styles.sectionTitle}>Select Camera & Microphone</h6>

      <div className={styles.flexRow}>
        {/* Camera Select */}
        <div className={styles.inputWrapper}>
          <HiOutlineVideoCamera className={styles.inputIcon} />
          <select
            className={styles.customSelect}
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
          >
            {devicesByType?.video.map((cam) => (
              <option key={cam.deviceId} value={cam.deviceId}>
                {cam.label || "Unnamed Camera"}
              </option>
            ))}
          </select>
        </div>

        {/* Microphone Select */}
        <div className={styles.inputWrapper}>
          <SlMicrophone className={styles.inputIcon} />
          <select
            className={styles.customSelect}
            value={selectedMic}
            onChange={(e) => setSelectedMic(e.target.value)}
          >
            {devicesByType?.audio.map((mic) => (
              <option key={mic.deviceId} value={mic.deviceId}>
                {mic.label || "Unnamed Microphone"}
              </option>
            ))}
          </select>
        </div>

        {/* Test Button */}
        <button
          className="ic_common_primary_btn"
          onClick={checkCameraMic}
          disabled={testing}
        >
         Test Camera & Mic  {testing ? <Spin size="small" /> : ""}
        </button>
      </div>

      <hr className={styles.ic_hr} />
      <p className={styles.warningNote}>
        ⚠️ Please ensure your devices are working properly before starting the
        exam.
      </p>
    </Modal>
  );
};

export default ExamStartModal;
