'use strict';

window.renderStatistics = function(ctx, names, times) {
  // position in px
  let initialX = 120; // start horizontal text positioning
  let initialY = 40;
  const barWidth = 40;
  const indent = 50;
  const lineHeight = 15;

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
  initialY += lineHeight;

  // text
  ctx.fillText('Список результатов:', initialX, initialY);

  // return max element from array
  const GetMaxElement = function(arr) {
    const arrMax = {
      max: -1,
      maxIndex: -1,
    };

    for (let i = 0; i < arr.length; i++) {
      const time = arr[i];

      if (time > arrMax.max) {
        arrMax.max = time; // time
        arrMax.maxIndex = i; // index of max value in [arr]
      }
    };
    return arrMax;
  };

  // get max time from [times] and it's index
  // если надо вернуть объект из функции, то это делается через new
  const timesMax = new GetMaxElement(times);

  // move line down
  initialY += lineHeight;

  ctx.fillText('Худшее время: ' + timesMax.max.toFixed(0) + 'мс у игрока ' + names[timesMax.maxIndex], initialX, initialY);

  // move line down
  initialY += lineHeight;

  // draw graphic
  for (let i = 0; i < times.length; i++) {
    const endY = 260;
    const barHeight = 150 * times[i] / timesMax.max;

    // draw a bar
    // get random opacity
    let randomOpacity = Math.floor(Math.random() * 10) / 10;
    if (randomOpacity == 0) {
      randomOpacity = 0.1;
    }

    ctx.fillStyle = 'rgba(0, 116, 217, ' + randomOpacity + ')';

    // find index of 'Вы' in array
    const you = names.indexOf('Вы');
    // draw this bar red
    if (i == you) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(initialX, endY - 20, barWidth, -barHeight);

    // write a text
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX, endY);
    initialX += barWidth + indent;
  }
};
