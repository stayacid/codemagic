'use strict';

var getMaxElement = function(arr) {
  
}

window.renderStatistics = function (ctx, names, times) {
  //position in px
  var 
      initialX = 120, //horizontal text positioning
      initialY = 40,
      max = -1,
      barHeight = 20,
      indent = 40,
      lineHeight = 15,
      maxIndex = -1;

  //shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);

  //bg
  ctx.fillStyle = "#fff";
  ctx.fillRect(100, 10, 420, 270);

  //text
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', initialX, initialY);

  //move line down
  initialY += barHeight;
  
  ctx.fillText('Список результатов:', initialX, initialY);


  //draw list of results from [times]
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time; //time
      maxIndex = i; // index of max value in [times]
    }
  };

  //
  var histogramWidth = 150,
    step = histogramWidth / (max - 0); //replace zero by minimum value from [times]

  //move line down
  initialY += barHeight;

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], initialX, initialY);

  //move line down
  initialY += lineHeight;

  //draw graphic
  for(var i = 0; i < times.length; i++) {
    initialY += 5; 
    ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);
    ctx.fillText(names[i], initialX + histogramWidth + barHeight, initialY  + barHeight + indent * i);
  }

};