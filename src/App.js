import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

// font-family: 'Bungee', cursive;
// font-family: 'Rubik Wet Paint', cursive;

const Page = styled.div`
  background-color: #086b74;
  height: 100vh;
`