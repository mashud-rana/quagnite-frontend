import React, {useEffect, useState} from 'react';
import styles from "./examInterface.module.css";
const Timer = ({ duration, onSubmit }) =>{
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

    useEffect(()=>{
        setTimer(duration);
    },[duration])
    return (
        <>
        <div className={styles.timer}>{Math.floor(timer / 60)} : {timer % 60}</div>
        </>
    )
}

export default Timer;