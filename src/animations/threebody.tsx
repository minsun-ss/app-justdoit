import Sketch from "react-p5";
import p5Types from "p5";

export function ThreeBody() {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(220);
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };

  return <Sketch setup={setup} draw={draw} />;
}
