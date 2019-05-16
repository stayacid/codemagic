'use strict';

window.renderStatistics = function(ctx, names, times) {
  // position in px
  const initialX = 120; //horizontal text positioning
   let initialY = 40,
        barHeight = 20,
        indent = 40,
        lineHeight = 15;

  // draw statistics field shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // draw statistics field white bg
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  // text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', initialX, initialY);

  // move line down
  initialY += barHeight;

  // text
  ctx.fillText('Список результатов:', initialX, initialY);

  //return max element from array
  let getMaxElement = function(arr) {
    let arrMax = {
      max: -1,
      maxIndex: -1,
    };

    for (let i = 0; i < arr.length; i++) {
      let time = arr[i];

      if (time > arrMax.max) {
        arrMax.max = time; // time
        arrMax.maxIndex = i; // index of max value in [arr]
      }
    };
    return arrMax;
  };

  // get max time from [times] and it's index
  // если надо вернуть объект из функции, то это делается через new
  let timesMax = new getMaxElement(times);

  //
  const histogramWidth = 150;
  const step = histogramWidth / (timesMax.max - 0); // replace zero by minimum value from [times]

  // move line down
  initialY += barHeight;

  ctx.fillText('Худшее время: ' + timesMax.max.toFixed(2) + 'мс у игрока ' + names[timesMax.maxIndex], initialX, initialY);

  // move line down
  initialY += lineHeight;

  // draw graphic
  for (let i = 0; i < times.length; i++) {
    initialY += 5; 
    ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);
    ctx.fillText(names[i], initialX + histogramWidth + barHeight, initialY + barHeight + indent * i);
  }
};
