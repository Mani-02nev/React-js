import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* Apps */
import Counter from "./apps/Counter";
import Calculator from "./apps/Calculator";
import ThemeToggle from "./apps/ThemeToggle";
import Clock from "./apps/Clock";

/* Home Page */
function Home() {
  const projects = [
    { name: "Counter", path: "/counter" },
    { name: "Calculator", path: "/calculator" },
    { name: "Theme Toggle", path: "/theme-toggle" },
    { name: "Clock", path: "/clock" }
  ];

  return (
    <div className="home">
      <h1>🚀 60 React Projects</h1>
      <p className="tagline">Daily mini projects built with React & deployed on Vercel</p>

      <div className="projects">
        {projects.map((p, index) => (
          <Link key={index} to={p.path} className="project-card">
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* App */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/theme-toggle" element={<ThemeToggle />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
