import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          className="front-page-button"
          onClick={() => navigate("/answer")}
        >
          Will You Do The Thing That Needs to be Done?
        </button>
        <p className="footnote">a sharon production</p>
      </div>
    </>
  );
}

function EaseIn() {
  return (
    <motion.h1
      className="animation1"
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      Yes?
    </motion.h1>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/answer" element={<EaseIn />} />
      </Routes>
    </Router>
  );
}
export default App;
