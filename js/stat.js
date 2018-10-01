'use strict';

(function () {
    window.renderStatistics = function (ctx, names, times) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(165, 15, 420, 270);

        ctx.fillStyle = '#fff';
        ctx.strokeRect(160, 10, 420, 270);
        ctx.fillRect(160, 10, 420, 270);

        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.fillText('Ура вы победили!', 175, 30);
        ctx.fillText('Список результатов:', 175, 50);

        //Сортируем копию массива times
        function compareNumeric(a, b) {
            return a - b;
        }

        var pos = 0,
            sortTimes = times.sort(compareNumeric);

        //Берем максимальное и минимальное число, округляем до секунд
        var maxNumberSortTimes = sortTimes[sortTimes.length - 1],
            maxRound = Math.round((Math.round(maxNumberSortTimes) / 1000) * 100) / 100,
            minRound = Math.round((Math.round(sortTimes[0]) / 1000) * 100) / 100;

        ctx.fillText('Лучшее время: ' + minRound + 's', 175, 70);

        for (var i = 0; i < times.length; i++) {
            //Вычисляем пропорционально высоту, исходя из того, что максимальная = 150рх
            var height = 0 - (150 * times[i] / maxNumberSortTimes),
                randomOpacity = Math.floor(Math.random() * 10);
            //Если радномный цвет == 0, делаем 99
            if (randomOpacity === 0) {
                randomOpacity = 99;
            }
            //Рандомная прозрачность у столбцов
            ctx.fillStyle = 'rgba(0, 0, 255, .' + randomOpacity + ')';

            //Красный столбец "Вы"
            if (names[i] == 'Вы') {
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            }

            //Подписываем столбики
            ctx.fillRect(210 + pos, 260, 40, height);
            ctx.fillStyle = '#000';
            ctx.fillText(names[i], 210 + pos, 275);
            pos += 90;
        }
    };
}());