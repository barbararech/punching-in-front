import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/index";
// import SignUpPage from "./SignUpPage.jsx";
// import HomePage from "./HomePage.jsx";
// import ArchivePage from "./ArchivePage.jsx";
// import TipsPage from "./TipsPage.jsx";
// import refreshAxiosContext from "../contexts/refreshAxiosContext.jsx";
// import { UserDataProvider } from "../contexts/userContext.jsx";


function App() {
  // const [refreshAxios, setRefreshAxios] = useState(false);

  return (
    <BrowserRouter>
      {/* <UserDataProvider>
        <refreshAxiosContext.Provider value={{ refreshAxios, setRefreshAxios }}> */}
          <Routes>
            <Route path="/" element={<SignInPage />} />
            {/* <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/tips" element={<TipsPage />} /> */}
          </Routes>
        {/* </refreshAxiosContext.Provider>
      </UserDataProvider> */}
    </BrowserRouter>
  );
}

export default App;
