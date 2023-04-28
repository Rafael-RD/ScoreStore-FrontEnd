import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.js";
import { useState } from "react";
import { cartListContext } from "./Components/Context.js";

export default function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <BrowserRouter>
      <cartListContext.Provider value={{ cartList, setCartList }} >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </cartListContext.Provider>
    </BrowserRouter>
  );
}

// font-family: 'Bungee', cursive;
// font-family: 'Rubik Wet Paint', cursive;