import React, {useEffect, useState} from 'react';
import styles from "./examInterface.module.css";
const Timer = ({ duration, onSubmit , onCompletedDurationHandler }) =>{
      const [timer, setTimer] = useState(60 * 30); // 30 minutes for example
    

    // ✅ Timer countdown
    useEffect(() => {
    let interval;
    // if (recording && timer > 0) {
    if ( timer > 0) {
        interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    if (timer <= 0 ) {
        // stop and auto submit
        onSubmit();
    }
    return () => clearInterval(interval);
    }, [timer]);

     // 🕒 whenever timer changes, send formatted duration to parent
    useEffect(() => {
        if (onCompletedDurationHandler) {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        onCompletedDurationHandler(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
        }
    }, [timer, onCompletedDurationHandler]);

    useEffect(()=>{
        setTimer(duration);
    },[duration])

    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
     
    return (
        <>
        <div className={styles.timer}>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</div>
        </>
    )
}

export default Timer;