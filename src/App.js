import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

// font-family: 'Bungee', cursive;
// font-family: 'Rubik Wet Paint', cursive;