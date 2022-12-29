import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Forms from "./pages/Forms.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/aboutme" element={<Aboutme />} />
<Route path="/forms" element={<Forms />} />
    </Routes>
  );
}
