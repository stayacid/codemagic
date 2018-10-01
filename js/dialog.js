'use strict';

(function () {
    var popupHandle = window.util.setup.querySelector('.setup-drag');

    popupHandle.addEventListener('mousedown', movePopup);

    function movePopup(evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            window.util.setup.style.top = (window.util.setup.offsetTop - shift.y) + 'px';
            window.util.setup.style.left = (window.util.setup.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    //Перетаскивание предметов
    var shopElement = document.querySelector('.setup-artifacts-shop'),
        artifactsElement = document.querySelector('.setup-artifacts'),
        draggebleItem = null;

    shopElement.addEventListener('dragstart', function (evt) {
        if (evt.target.tagName.toLowerCase() === 'img') {
            draggebleItem = evt.target;
            evt.dataTransfer.setData('text/plain', evt.target.alt);
            artifactsElement.style.outline = '2px dashed red'; // добавляем обводку при начале драга
        }
    });

    shopElement.addEventListener('dragend', function () {
        artifactsElement.style.outline = 'none'; // убираем обводку при начале драга
    });

    artifactsElement.addEventListener('dragover', function (evt) {
        evt.preventDefault();
        return false;
    });

    artifactsElement.addEventListener('drop', function (evt) {
        evt.target.style.backgroundColor = '';
        artifactsElement.style.outline = 'none';
        if (evt.target.innerHTML !== '') { //если ячейка не пустая, ничего не делаем
            return false;
        }
        evt.target.appendChild(draggebleItem.cloneNode(true));
        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragenter', function (evt) {
        evt.target.style.backgroundColor = 'yellow';
        evt.preventDefault();
    });

    artifactsElement.addEventListener('dragleave', function (evt) {
        evt.target.style.backgroundColor = '';
        evt.preventDefault();
    });
}());