import { useRouteCSS } from "./homepage";

export function NoMeansYes() {
  useRouteCSS("/src/css/nomeansyes.css");
  const body = document.body;
  const viewportHeight = document.documentElement.clientHeight;

  const tilesNeeded =
    Math.ceil(window.innerWidth / 40) * Math.ceil(viewportHeight / 30);
  for (let i = 0; i < tilesNeeded; i++) {
    const noTile = document.createElement("div");
    noTile.className = "tile";
    body.appendChild(noTile);
  }
}
