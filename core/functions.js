function isBetweenX(x, x1, x2) {
  return x > x1 && x < x2;
}

function isBetweenY(y, y1, y2) {
  return y > y1 && y < y2;
}

function distance(x1, y1, x2, y2) {
  return ((x2 - x1) ^ 2) + ((y2 - y1) ^ 2);
}

function collision(object, target) {
  if (
    object &&
    target &&
    object.x + object.width > target.x &&
    object.x < target.x + target.width &&
    object.y + object.height > target.y &&
    object.y < target.y + target.height
  ) {
    return true;
  }
  return false;
}

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
