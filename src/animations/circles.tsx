import Sketch from "react-p5";
import p5Types from "p5";

export function Circles() {
  let col = 0;
  let siz = 100;
  let i = 0;
  let down = false;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0, 0, i);
    col =
      p5.map(
        p5.dist(p5.mouseX, p5.mouseY, p5.windowWidth / 2, p5.windowHeight),
        0,
        p5.windowHeight / 2,
        0,
        255,
      ) /
        2 +
      p5.map(
        p5.dist(p5.mouseX, p5.mouseY, p5.windowWidth / 2, 0),
        0,
        p5.windowHeight / 2,
        255,
        0,
      ) /
        2;
    siz =
      p5.map(
        p5.dist(p5.mouseX, p5.mouseY, p5.windowWidth, p5.windowHeight / 2),
        0,
        p5.windowHeight / 2,
        0,
        255,
      ) /
        2 +
      p5.map(
        p5.dist(p5.mouseX, p5.mouseY, 0, p5.windowHeight / 2),
        0,
        p5.windowHeight,
        255,
        0,
      ) /
        2;
    p5.fill(col);
    p5.circle(p5.mouseX, p5.mouseY, siz);
    p5.textAlign(p5.CENTER);
    p5.textSize(siz / 2);
    p5.fill(255 - col);
    p5.text("yes", p5.mouseX, p5.mouseY + siz / 10);
    if (down) {
      i = i - 0.2;
      if (i < 20) {
        down = false;
      }
    } else {
      i = i + 0.2;
      if (i > 40) {
        down = true;
      }
    }
  };
  return <Sketch setup={setup} draw={draw} />;
}
