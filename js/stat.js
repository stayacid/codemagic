'use strict';

window.renderStatistics = function(ctx, names, times) {
  //shadow
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);

  //bg
  ctx.fillStyle = "#fff";
  ctx.fillRect(100, 10, 420, 270);

  //text
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  //
  var h = 100, //vertical text positioning
      max = -1,
      maxIndex = -1;

  //draw list of results from [times]
  for(var i = 0; i < times.length; i++) {
    var time  = times[i];
    if (time > max) {
      max = time; //time
      maxIndex = i; // index of max value in [times]
    }

    h += 20;
    //ctx.fillText(time, 120, h);
    //dfg

  };

  //
  var histogramWidth = 150,
  step = histogramWidth / (max - 0); //replace zero by minimum value from [times]

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 80);

  


};