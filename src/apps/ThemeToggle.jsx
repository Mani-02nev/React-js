import { useState, useEffect } from "react";
import "../styles/theme.css";

function ThemeToggle() {
     const [dark, setDark] = useState(false);

     useEffect(() => {
          document.body.className = dark ? "dark" : "light";
     }, [dark]);

     return (
          <div className="theme-page">
               <button className="toggle-btn" onClick={() => setDark(!dark)}>
                    {dark ? " Light Mode" : " Dark Mode"}
               </button>

               <h2>Global Theme Toggle</h2>
               <p>Theme applies to all pages</p>
          </div>
     );
}

export default ThemeToggle;
