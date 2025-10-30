import Sketch from "react-p5";
import p5Types from "p5";

export function Rain() {
  class Raindrop {
    x: number = 0;
    y: number = 0;
    velocity: number = 0;
    width: number;
    height: number;
    p5: p5Types;

    constructor(p5: p5Types, width: number, height: number) {
      this.width = width;
      this.height = height;
      this.x = Math.random() * width;
      this.y = 0 - Math.random() * 300;
      this.velocity = Math.random() * 7 + 3;
      this.p5 = p5;
    }

    canvas(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    fall() {
      this.y += this.velocity;
      if (this.y >= this.height) {
        this.reset();
      }
      this.p5.circle(this.x, this.y, 5);
    }

    reset() {
      this.x = Math.random() * this.width;
      this.y = 0;
      this.velocity = Math.random() * 7 + 3;
    }
  }

  const rain: Raindrop[] = [];

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const canvas_width = p5.windowWidth;
    const num_drops = Math.floor(p5.windowWidth / 400) * 20;
    const canvas_height = p5.windowHeight;
    p5.createCanvas(canvas_width, canvas_height).parent(canvasParentRef);
    for (let i = 0; i < num_drops; i++) {
      const d = new Raindrop(p5, canvas_width, canvas_height);
      rain.push(d);
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(59, 59, 59);

    for (let drop = 0; drop < rain.length; drop++) {
      rain[drop].fall();
    }

    p5.textSize(120);
    p5.textFont("Courier");
    p5.fill("white");
    p5.text("YES", 20, p5.windowHeight - 20);
  };

  return <Sketch setup={setup} draw={draw} />;
}
