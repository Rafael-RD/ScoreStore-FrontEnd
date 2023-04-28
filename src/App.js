import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdContext from "./Components/Context";
import SignIn from "./Pages/Register/SignIn/SignIn";
import Signup from "./Pages/Register/SignUp/SignUp";
import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage.js";
import { cartListContext } from "./Components/Context.js";



export default function App() {


  const [internalAnalysis, setInternalAnalysis] = useState([]);
  const [cartList, setCartList] = useState([]);

  return (

    <IdContext.Provider value={{ internalAnalysis, setInternalAnalysis }}>

    <BrowserRouter>
      <cartListContext.Provider value={{ cartList, setCartList }} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </cartListContext.Provider>
    </BrowserRouter>

    </IdContext.Provider>
  );
}

// font-family: 'Bungee', cursive;
// font-family: 'Rubik Wet Paint', cursive;