type Direction = "up" | "right" | "left" | "down";
const backgroundColor = "#285425";
const snakeColor = "red";
const pixelsPerTile = 20;

function drawSnake(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = snakeColor;
  ctx.fillRect(0, 0, pixelsPerTile, pixelsPerTile);
}

function onDirectionPress(direction: Direction) {
}

window.onload = function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  canvas.style.backgroundColor = backgroundColor;

  drawSnake(ctx);

  window.onkeyup = function (keyboardEvent) {
    switch (keyboardEvent.key) {
      case "w":
        onDirectionPress("up");
        break;
      case "s":
        onDirectionPress("down");
        break;
      case "a":
        onDirectionPress("left");
        break;
      case "d":
        onDirectionPress("right");
        break;
    }
  };
};
