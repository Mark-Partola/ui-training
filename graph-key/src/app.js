import {
  createSvgCanvas,
  createSvgPath,
  createSvgCircle
} from "./create-elements-utils";

import {
  translateHtmlToSvgPoint,
  getCoordinatesOfSvgCircle,
  generateSvgPathAttribute
} from "./utils";

import "../style.css";
import "../graph-key.css";

const config = {
  el: document.querySelector(".graph-key"),
  pointsCount: 4,
  radius: 10,
  size: 300,
  padding: 30
};

const [svgCanvas, root] = createSvgCanvas(config);
config.el.appendChild(svgCanvas);

function startMove(e) {
  if (!(e.target instanceof SVGCircleElement)) {
    return;
  }

  const path = createSvgPath(config);
  root.insertBefore(path, root.firstChild);

  const targetPoints = [e.target];
  const linePoints = [getCoordinatesOfSvgCircle(e.target)];

  function moveEdge(e) {
    const touch = e.touches ? e.touches[0] : e;

    // target in touchmove is a touchstart one
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const isNextPoint = target.classList.contains("vertex");

    if (isNextPoint && !targetPoints.includes(target)) {
      targetPoints.push(target);
      linePoints.push(getCoordinatesOfSvgCircle(target));
    }

    const d = generateSvgPathAttribute([
      ...linePoints,
      translateHtmlToSvgPoint(svgCanvas, {
        x: touch.clientX,
        y: touch.clientY
      })
    ]);

    path.setAttribute("d", d);
  }

  function cancelMove() {
    svgCanvas.removeEventListener("mousemove", moveEdge);
    svgCanvas.removeEventListener("mouseup", cancelMove);
    svgCanvas.removeEventListener("touchmove", moveEdge);
    svgCanvas.removeEventListener("touchend", cancelMove);

    path.setAttribute("d", generateSvgPathAttribute(linePoints));

    root.classList.add("graph-key-invalid");
    targetPoints.forEach(point => point.classList.add("invalid"));

    if (window.navigator.vibrate) {
      window.navigator.vibrate(500);
    }

    setTimeout(() => {
      root.removeChild(path);
      root.classList.remove("graph-key-invalid");
      targetPoints.forEach(point => point.classList.remove("invalid"));
    }, 1000);
  }

  svgCanvas.addEventListener("mousemove", moveEdge);
  svgCanvas.addEventListener("mouseup", cancelMove);
  svgCanvas.addEventListener("touchmove", moveEdge);
  svgCanvas.addEventListener("touchend", cancelMove);
}

svgCanvas.addEventListener("touchstart", startMove);
svgCanvas.addEventListener("mousedown", startMove);

const delta = (config.size - config.padding * 2) / (config.pointsCount - 1);

for (let i = 0; i < config.pointsCount; i++) {
  for (let j = 0; j < config.pointsCount; j++) {
    const outerCircle = createSvgCircle({
      cx: config.padding + delta * i,
      cy: config.padding + delta * j,
      radius: config.radius * 2,
      className: "vertex"
    });

    const circle = createSvgCircle({
      cx: config.padding + delta * i,
      cy: config.padding + delta * j,
      radius: config.radius,
      className: "inner-vertex"
    });

    root.appendChild(outerCircle);
    root.appendChild(circle);
  }
}
