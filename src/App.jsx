import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HandlerProvider from "./contexts/contextHandler";
import SignInPage from "./pages/SignInPage/index";
import SignUpPage from "./pages/SignUpPage/index";
import HomePage from "./pages/HomePage/index";
// import ArchivePage from "./ArchivePage.jsx";
// import TipsPage from "./TipsPage.jsx";
// import refreshAxiosContext from "../contexts/refreshAxiosContext.jsx";

function App() {
  return (
    <HandlerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/archive" element={<ArchivePage />} />
            <Route path="/tips" element={<TipsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </HandlerProvider>
  );
}

export default App;
