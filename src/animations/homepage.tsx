import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useRouteCSS(cssFile: string) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [cssFile]);
}

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
