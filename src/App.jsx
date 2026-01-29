import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Calculator from "./apps/Calculator";
import Counter from "./apps/Counter";
import ThemeToggle from "./apps/ThemeToggle";

function Home() {
  return (
    <div className="home">
      <h2>My React Apps</h2>
      <Link to="/counter">Counter</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/t-t">Theme Toggle</Link>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<div className="page"><Counter /></div>} />
          <Route path="/calculator" element={<div className="page"><Calculator /></div>} />
          <Route path="/t-t" element={<div className="page"><ThemeToggle /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
