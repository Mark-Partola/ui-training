const svgns = "http://www.w3.org/2000/svg";

export function createSvgCanvas({ size }) {
  const root = document.createElementNS(svgns, "svg");
  const group = document.createElementNS(svgns, "g");
  root.appendChild(group);
  root.setAttribute("viewBox", `0 0 ${size} ${size}`);

  return [root, group];
}

export function createSvgGroup() {
  return document.createElementNS(svgns, "g");
}

export function createSvgPath({ radius }) {
  const path = document.createElementNS(svgns, "path");
  path.setAttribute("stroke-width", radius / 2);
  path.classList.add("edge");

  return path;
}

export function createSvgCircle({ cx, cy, radius, className }) {
  const circle = document.createElementNS(svgns, "circle");

  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", radius);
  circle.classList.add(className);

  return circle;
}
