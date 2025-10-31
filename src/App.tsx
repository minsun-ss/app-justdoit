import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TextEaseIn } from "./animations/text.tsx";
import { NoMeansYes } from "./animations/nomeansyes.tsx";
import { HomePage } from "./animations/homepage.tsx";
import { Rain } from "./animations/rain.tsx";
import { Circles } from "./animations/circles.tsx";

const animationList: React.ComponentType[] = [
  TextEaseIn,
  NoMeansYes,
  Rain,
  Circles,
];

function RandomAnimationRoute() {
  const randomAnimationIdx = Math.floor(Math.random() * animationList.length);
  const RandomAnimation = animationList[randomAnimationIdx];
  return <RandomAnimation />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/answer" element={<RandomAnimationRoute />} />
        <Route path="/test" element={<Circles />} />
      </Routes>
    </Router>
  );
}
export default App;
