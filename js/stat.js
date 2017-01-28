'use strict';

function drawRectangle(ctx, cords, color) {
  ctx.fillStyle = color;
  // ctx.fillRect(...cords);
  ctx.fillRect.apply(ctx, cords);
  // ctx.fillRect(cords[0], cords[1], cords[2], cords[3]);
}

function getRandomBlueColor() {
  return 'rgba(0, 0, 255,' + Math.random() * 0.7 + ')';
}

window.renderStatistics = (ctx, names, times) => {
  var columnHeight = 150;
  var columnWidth = 40;
  var stepX = 50;
  var stepY = 0;
  var resultLinePadding = 20;

  var initialX = 120;

  var initialY = 40;
  var newX = initialX + 35;
  var redColor = 'rgba(255, 0, 0, 1)';
  var barColor;

  drawRectangle(ctx, [110, 20, 420, 270], 'rgba(0, 0, 0, 0.7)');
  drawRectangle(ctx, [100, 10, 420, 270], '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', initialX, initialY);
  ctx.fillText('Список результатов:', initialX, initialY + resultLinePadding);

  var maxTime = Math.max.apply(null, times);
  stepY = columnHeight / maxTime;

  for (var i = 0; i < times.length; i++) {

    (names[i] === 'Вы') ? barColor = redColor : barColor = getRandomBlueColor();
    drawRectangle(ctx, [newX, initialY + 210, columnWidth, -stepY * times[i]], barColor);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], newX, initialY + 230);

    ctx.fillText(Math.floor(times[i]), newX, 240 - stepY * times[i]);
    newX += stepX + columnWidth;
  }
};



