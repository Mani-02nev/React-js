import Calculator from "./apps/Calculator";
import Counter from "./apps/Counter";
import TogleTheme from "./apps/ThemeToggle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/t-t" element={<TogleTheme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
