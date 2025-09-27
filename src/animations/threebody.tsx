import Sketch from "react-p5";

export function ThreeBody() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(220);
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };

  return <Sketch setup={setup} draw={draw} />;
}
