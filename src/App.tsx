import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { EaseIn, EaseIn2 } from "./animations/1.tsx";
import { ThreeBody } from "./animations/threebody.tsx";
import Sketch from "react-p5";

const animationList = [EaseIn, EaseIn2, ThreeBody];

function RandomAnimationRoute() {
  const randomAnimationIdx = Math.floor(Math.random() * animationList.length);
  const RandomAnimation = animationList[randomAnimationIdx];
  return <RandomAnimation />;
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="front-page-button" onClick={() => navigate("/answer")}>
        Will You Do The Thing That Needs to be Done?
      </button>
      <p className="footnote">a sharon production</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/answer" element={<RandomAnimationRoute />} />
        <Route path="/p5" element={<ThreeBody />} />
      </Routes>
    </Router>
  );
}
export default App;
