// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import PaintingApp from "./Components/PaintingApp";
import QuizApp from "./Components/QuizApp";
import StoryTeller from "./Components/StoryTeller";
import PianoInstrument from "./Components/PianoInstrument";
import { GiGrandPiano } from "react-icons/gi";

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: 10 }}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/painting">
          <button>Painting</button>
        </Link>
        <Link to="/quiz">
          <button>Quiz</button>
        </Link>
        <Link to="/story">
          <button>Story</button>
        </Link>
        <Link to="/piano">
          <button>
            <GiGrandPiano /> Piano
          </button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/painting" element={<PaintingApp />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/story" element={<StoryTeller />} />
        <Route path="/piano" element={<PianoInstrument />} />
      </Routes>
    </div>
  );
}
