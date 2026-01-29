import { useState } from "react";
import "../styles/counter.css";

function Counter() {
     const [cnt, setcnt] = useState(0);

     return (
          <div className="counter-container">
               <h1>Counter App</h1>
               <div className="count-box">{cnt}</div>

               <div className="btn-group">
                    <button className="btn inc" onClick={() => setcnt(cnt + 1)}>
                         + Increment
                    </button>

                    <button className="btn dec" onClick={() => setcnt(cnt - 1)}>
                         − Decrement
                    </button>

                    <button className="btn reset" onClick={() => setcnt(0)}>
                         Reset
                    </button>
               </div>
          </div>
     );
}

export default Counter;
