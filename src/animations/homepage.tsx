import { useNavigate } from "react-router-dom";
import { useRouteCSS } from "./util";

export function HomePage() {
  useRouteCSS("/src/css/homepage.css");
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
