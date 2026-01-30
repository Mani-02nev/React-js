import { useState } from "react";
import "../styles/clock.css";

function Clock() {
     const [time, setTime] = useState(new Date());

     setInterval(() => {
          setTime(new Date());
     }, 1000);
     return (
          <div className="clock-container">
               <h1 className="clock-title">Clock App</h1>
               <div className="clock-time">
                    {time.toLocaleTimeString()}
               </div>
               <div className="clock-date">
                    {time.toDateString()}
               </div>

          </div>
     );
}

export default Clock; 