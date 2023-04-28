import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import IdContext from "./Components/Context";
import SignIn from "./Pages/Register/SignIn/SignIn";
import Signup from "./Pages/Register/SignUp/SignUp";
import { useState } from "react";


export default function App() {


  const [internalAnalysis, setInternalAnalysis] = useState([]);

  return (

    <IdContext.Provider value={{ internalAnalysis, setInternalAnalysis }}>

    <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    
    </BrowserRouter>

    </IdContext.Provider>
  );
}

// font-family: 'Bungee', cursive;
// font-family: 'Rubik Wet Paint', cursive;

const Page = styled.div`
  background-color: #086b74;
  height: 100vh;
`