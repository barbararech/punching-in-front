import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HandlerProvider from './contexts/contextHandler';
import SignInPage from './pages/SignInPage/index';
import SignUpPage from './pages/SignUpPage/index';
import HomePage from './pages/HomePage/index';
import NewApplicationPage from './pages/NewApplicationPage';
import ArchivePage from './pages/ArchivePage/index';
import EditApplicationPage from './pages/EditApplicationPage/index';
import TipsPage from './pages/TipsPage/index';
import MyFilesPage from './pages/MyFilesPage';

function App() {
  return (
    <HandlerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/newapplication" element={<NewApplicationPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/applications/:id/edit" element={<EditApplicationPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/my-files" element={<MyFilesPage />} />
        </Routes>
      </BrowserRouter>
    </HandlerProvider>
  );
}

export default App;
