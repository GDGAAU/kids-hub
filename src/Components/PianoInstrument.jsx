import { useState, useEffect, useRef } from "react";
import { Piano, KeyboardShortcuts } from "react-piano";
import Soundfont from "soundfont-player";
import "react-piano/dist/styles.css";
import { GiGrandPiano } from "react-icons/gi";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export default function PianoInstrument() {
  const [audioContext, setAudioContext] = useState(null);
  const [instrument, setInstrument] = useState(null);
  const [sustain, setSustain] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(
    "acoustic_grand_piano"
  );
  const [recordedNotes, setRecordedNotes] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [containerWidth, setContainerWidth] = useState(
    Math.min(window.innerWidth * 0.9, 600)
  );
  const pianoRef = useRef(null);

  const instrumentOptions = [
    { value: "acoustic_grand_piano", label: "Grand Piano" },
    { value: "electric_piano_1", label: "Electric Piano" },
    { value: "harpsichord", label: "Harpsichord" },
    { value: "celesta", label: "Celesta" },
  ];

  const initAudio = async () => {
    if (instrument) return; // already loaded
    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const inst = await Soundfont.instrument(context, selectedInstrument);
      setAudioContext(context);
      setInstrument(inst);
    } catch (error) {
      console.error("Error loading the instrument:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(Math.min(window.innerWidth * 0.9, 600));
    };
    window.addEventListener("resize", handleResize);
  }, [selectedInstrument]);

  const playNote = async (midiNumber) => {
    try {
      let ctx = audioContext;
      let inst = instrument;

      // If not initialized, create and load instrument
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        inst = await Soundfont.instrument(ctx, selectedInstrument);
        setAudioContext(ctx);
        setInstrument(inst);
      }

      // Resume context if suspended (for mobile)
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      if (inst && ctx) {
        inst.play(midiNumber, ctx.currentTime, {
          gain: 0.3,
          sustain: sustain,
        });
        if (isRecording) {
          setRecordedNotes((prev) => [
            ...prev,
            { midiNumber, time: Date.now(), duration: null, velocity: 0.8 },
          ]);
        }
      }
    } catch (error) {
      console.error("Error playing note:", error);
    }
  };

  const stopNote = (midiNumber) => {
    try {
      if (instrument && audioContext) {
        instrument.stop(midiNumber, audioContext.currentTime);
      }
    } catch (error) {
      console.error("Error stopping note:", error);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };

  const controlsStyle = {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  };

  const backLinkStyle = {
    position: "absolute",
    top: "50px",
    left: "10px",
    textDecoration: "none",
  };

  const backButtonStyle = {
    padding: "8px 16px",
    fontSize: "1rem",
    backgroundColor: "#00FFFF",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
  };

  return (
    <ErrorBoundary>
      <div style={containerStyle}>
        <Link to="/" style={backLinkStyle}>
          <button style={backButtonStyle}>⬅️ Back Home</button>
        </Link>
        <h2>
          <GiGrandPiano /> Interactive Piano
        </h2>
        <div style={controlsStyle}>
          <select
            value={selectedInstrument}
            onChange={(e) => setSelectedInstrument(e.target.value)}
            style={{ padding: "6px", fontSize: "1rem" }}
          >
            {instrumentOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <label>
            <input
              type="checkbox"
              checked={sustain}
              onChange={(e) => setSustain(e.target.checked)}
            />
            Sustain Pedal
          </label>

          <button
            onClick={() => setIsRecording(!isRecording)}
            style={{ marginTop: "5px", padding: "8px 16px" }}
          >
            {isRecording ? "⏹️ Stop Recording" : "⏺️ Start Recording"}
          </button>
        </div>

        <div style={{ width: containerWidth }}>
          <Piano
            noteRange={{ first: 48, last: 84 }}
            playNote={playNote}
            stopNote={stopNote}
            width={containerWidth}
            height={180}
            keyboardShortcuts={KeyboardShortcuts.create({
              firstNote: 48,
              lastNote: 84,
              keyboardConfig: KeyboardShortcuts.HOME_ROW,
            })}
            ref={pianoRef}
          />
        </div>
        <div>
          <p>try out these</p>
          <li>C C D C F C C F </li>
        </div>
      </div>
    </ErrorBoundary>
  );
}
