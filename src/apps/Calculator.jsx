import { useState } from "react";
import "../styles/calculator.css";
function Calculator() {
     const [input, setInput] = useState("");
     return (


          <div className="calculator-container">
               <h2 className="name">Calculator</h2>
               <div className="calculator">
                    <div className="buttons">
                         <input type="text" value={input} readOnly />
                         <button onClick={() => setInput(input + "1")}>1</button>
                         <button onClick={() => setInput(input + "2")}>2</button>
                         <button onClick={() => setInput(input + "3")}>3</button>
                         <button onClick={() => setInput(input + "4")}>4</button>
                         <button onClick={() => setInput(input + "5")}>5</button>
                         <button onClick={() => setInput(input + "6")}>6</button>
                         <button onClick={() => setInput(input + "7")}>7</button>
                         <button onClick={() => setInput(input + "8")}>8</button>
                         <button onClick={() => setInput(input + "9")}>9</button>
                         <button onClick={() => setInput(input + "0")}>0</button>
                         <button onClick={() => setInput(input + "+")}>+</button>
                         <button onClick={() => setInput(input + "-")}>-</button>
                         <button onClick={() => setInput(input + "*")}>*</button>
                         <button onClick={() => setInput(input + "/")}>/</button>
                         <button onClick={() => { eval("setInput(String(" + input + "))") }}>=</button>
                         <button onClick={() => setInput("")}>clear</button>
                    </div>
               </div>

               <div className="footer">
                    <h2>About Calculator</h2>
                    <p>This is a simple calculator application built with React.</p>
               </div>
          </div>
     );
}
export default Calculator;