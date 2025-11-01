import Sketch from "react-p5";
import p5Types from "p5";

/** The conway cubes were influenced by both the Game of Life in
 * Recurse's first pairing session, and realizing that one of the very earliest
 * Advent of Code problems I did was, in fact, a tricked out version of it.
 */
export function ConwayCubes() {
  const cubes = new Map();
  let angle = 0;
  let frameCounter = 0;

  class ConwayCube {
    x = 0;
    y = 0;
    z = 0;
    size = 0;
    space: Map<string, ConwayCube>;
    isAlive = false;
    p5: p5Types;
    nextAlive = true;

    constructor(
      x: number,
      y: number,
      z: number,
      size: number,
      space: Map<string, ConwayCube>,
      isAlive: boolean,
      p5: p5Types,
    ) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.space = space;
      this.isAlive = isAlive;
      this.nextAlive = true;
      this.p5 = p5;
    }

    getNumberOfAdjacentCubes() {
      let adjacent = 0;
      for (const x of [this.x - this.size, this.x, this.x + this.size]) {
        for (const y of [this.y - this.size, this.y, this.y + this.size]) {
          for (const z of [this.z - this.size, this.z, this.z + this.size]) {
            if (!(x == this.x && y == this.y && z == this.z)) {
              const result = this.space.get(`${x},${y},${z}`);
              adjacent += result?.isAlive ? 1 : 0;
            }
          }
        }
      }
      return adjacent;
    }

    determineNextState() {
      const adjacentCubes = this.getNumberOfAdjacentCubes();
      if (this.isAlive && adjacentCubes >= 2 && adjacentCubes <= 3) {
        this.nextAlive = true;
      } else if (!this.isAlive && adjacentCubes == 3) {
        this.nextAlive = true;
      } else {
        this.nextAlive = false;
      }
    }

    execute() {
      this.isAlive = this.nextAlive;
    }

    draw() {
      if (this.isAlive) {
        this.p5.push();
        this.p5.translate(this.x, this.y, this.z);
        this.p5.noStroke();
        this.p5.fill(254, 197, 216);
        this.p5.shininess(50);
        this.p5.box(this.size);
        this.p5.pop();
      }
    }
  }

  // probabilistic seeding of cubes in space
  function populateSpace(
    w: number,
    h: number,
    l: number,
    cube_size: number,
    p: number,
    p5: p5Types,
  ) {
    for (let x = 0 - w / 2; x < w / 2; x += cube_size) {
      for (let y = 0 - h / 2; y < h / 2; y += cube_size) {
        for (let z = 0 - l / 2; z < l / 2; z += cube_size) {
          if (Math.random() <= p) {
            cubes.set(
              `${x},${y},${z}`,
              new ConwayCube(x, y, z, cube_size, cubes, true, p5),
            );
          } else {
            cubes.set(
              `${x},${y},${z}`,
              new ConwayCube(x, y, z, cube_size, cubes, false, p5),
            );
          }
        }
      }
    }
  }

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const h = 500;
    const w = 500;
    const l = 500;
    const cubeSize = 25;
    p5.createCanvas(p5.windowWidth, window.innerHeight, p5.WEBGL).parent(
      canvasParentRef,
    );
    populateSpace(w, h, l, cubeSize, 0.05, p5);
  };

  const draw = (p5: p5Types) => {
    p5.background(182, 159, 213);
    p5.ambientLight(180, 180, 180);
    p5.pointLight(254, 197, 216, p5.mouseX - 250, p5.mouseY - 250, 250);

    p5.rotateX(angle);
    p5.rotateY(angle);
    p5.rotateZ(angle);
    angle += 0.005;

    for (const value of cubes.values()) {
      value.draw();
    }

    frameCounter += 1;
    if (frameCounter % 30 == 0) {
      for (const value of cubes.values()) {
        value.determineNextState();
        value.execute();
      }
    }
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <p className="info">more info</p>
        <p className="yes">YES</p>
        <Sketch setup={setup} draw={draw} />
      </div>
    </>
  );
}
