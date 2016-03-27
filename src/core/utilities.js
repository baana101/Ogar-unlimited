'use strict';
module.exports = {
  getRandomColor: function () {
    var colorRGB = [0xFF, 0x07, (Math.random() * 256) >> 0];
    colorRGB.sort(function () {
      return 0.5 - Math.random();
    });

    return {
      r: colorRGB[0],
      b: colorRGB[1],
      g: colorRGB[2]
    };
  },
  getRandomPosition: function (borderRight, borderLeft, borderBottom, borderTop) {
    return {
      x: Math.floor(Math.random() * (borderRight - borderLeft)) + borderLeft,
      y: Math.floor(Math.random() * (borderBottom - borderTop)) + borderTop
    }
  },
  getDist: function (x1, y1, x2, y2) { // Use Pythagoras theorem
    var deltaX = Math.abs(x1 - x2);
    var deltaY = Math.abs(y1 - y2);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  },
  getAngleFromClientToCell: function (client, cell) {
    let deltaY = client.mouse.y - cell.position.y;
    let deltaX = client.mouse.x - cell.position.x;
    return Math.atan2(deltaX, deltaY);
  }
};