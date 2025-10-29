import "../css/nomeansyes.css";

export function NoMeansYes() {
  const body = document.body;
  const tilesNeeded =
    Math.ceil(window.innerWidth / 40) * Math.ceil(window.innerHeight / 30);
  for (let i = 0; i < tilesNeeded; i++) {
    const noTile = document.createElement("div");
    noTile.className = "tile";
    body.appendChild(noTile);
  }
}
