import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./Components/HomePage";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import PaintingApp from "./Components/PaintingApp";
import QuizApp from "./Components/QuizApp";
import StoryTeller from "./Components/StoryTeller";
import PianoInstrument from "./Components/PianoInstrument";
import { GiGrandPiano } from "react-icons/gi";
import { getToken, removeToken } from "./Components/utils/jwt";
import React from "react";
import UserInfo from "./Components/UserInfo";

function NavBar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };
  return (
    <nav style={{ display: "flex", gap: 10 }}>
      <Link to="/">
        <button>Home</button>
      </Link>
      {isLoggedIn && (
        <Link to="/painting">
          <button>Painting</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/quiz">
          <button>Quiz</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/story">
          <button>Story</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/piano">
          <button>
            <GiGrandPiano /> Piano
          </button>
        </Link>
      )}
      {!isLoggedIn && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {!isLoggedIn && (
        <Link to="/register">
          <button>Register</button>
        </Link>
      )}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  // Listen for login/logout and update state
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    removeToken();
    
    localStorage.removeItem("userEmail");
    window.dispatchEvent(new Event("userEmailChange"));
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
     <UserInfo />
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="register" element={<Register onLogin={handleLogin} />} />
        
        <Route
          path="/painting"
          element={
            <ProtectedRoute>
              <PaintingApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <QuizApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/story"
          element={
            <ProtectedRoute>
              <StoryTeller />
            </ProtectedRoute>
          }
        />
        <Route
          path="/piano"
          element={
            <ProtectedRoute>
              <PianoInstrument />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
