console.log("Hello world!");
const backgroundColor = "#285425";
window.onload = function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  canvas.style.backgroundColor = backgroundColor;
};
