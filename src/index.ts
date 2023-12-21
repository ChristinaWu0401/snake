const backgroundColor = "#285425";
const snakeColor = "red";
const pixelsPerTile = 20;

function drawSnake(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = snakeColor;
  ctx.fillRect(0, 0, pixelsPerTile, pixelsPerTile);
}

window.onload = function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  canvas.style.backgroundColor = backgroundColor;

  drawSnake(ctx);
};
