'use strict';

var columnHeight = 150;
var columnWidth = 40;
var stepX = 50;
var stepY = 0;
var maxTime = -1;
var resultLinePadding = 20;

function drawRectangle(ctx, coords, color) {
  ctx.fillStyle = color;
  for (var i = 0; i < coords.length; i++) {
    ctx.fillRect(coords[i], coords[i+1], coords[i+2], coords[i+3]);
  }
};

function getRandomBlueColor() {
  return 'rgba(0, 0, 255,' + Math.random() * 0.7 + ')';
}

window.renderStatistics = function (ctx, names, times) {
  var initialX = 120;
  var initialY = 40;
  var newX = initialX + 35;
  var redColor = 'rgba(255, 0, 0, 1)';

  drawRectangle(ctx, [110, 20, 420, 270], 'rgba(0, 0, 0, 0.7)');
  drawRectangle(ctx, [100, 10, 420, 270], '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', initialX, initialY);
  ctx.fillText('Список результатов:', initialX, initialY + resultLinePadding);

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
      stepY = columnHeight / maxTime;
    }

    if (names[i] === 'Вы') {
      ctx.fillStyle = redColor;
    } else {
      ctx.fillStyle = getRandomBlueColor();
    }

    ctx.fillRect(newX, initialY + 210, columnWidth, -stepY * times[i]);

    for (var j = 0; j < names.length; j++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], newX, initialY + 230);
    }

    ctx.fillText(Math.floor(times[i]), newX, 240 - stepY * times[i]);

    newX += stepX + columnWidth;
  }
};


