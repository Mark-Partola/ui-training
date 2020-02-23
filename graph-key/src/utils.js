export function translateHtmlToSvgPoint(element, { x, y }) {
  const pt = element.createSVGPoint();
  pt.x = x;
  pt.y = y;

  return pt.matrixTransform(element.getScreenCTM().inverse());
}

export function getCoordinatesOfSvgCircle(element) {
  return {
    x: element.getAttribute("cx"),
    y: element.getAttribute("cy")
  };
}

export function generateSvgPathAttribute(points) {
  return points.reduce(
    (acc, curr) => acc + `${!acc ? "M" : "L"}${curr.x} ${curr.y}`,
    ""
  );
}
