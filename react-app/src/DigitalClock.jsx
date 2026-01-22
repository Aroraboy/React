import { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    function formatTime() {
        let hours = time.getHours();
        hours = hours % 12 || 12; // Convert to 12-hour format
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);    

       
     
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
            
        </div>
    );
}
export default DigitalClock;