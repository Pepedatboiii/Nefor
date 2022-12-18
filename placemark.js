ymaps.ready(init);
bridge.send('VKWebAppGetAuthToken', { 
  app_id: 6909581, 
  scope: 'friends,status'
  })
  .then((data) => { 
    if (data.access_token) {
      // Ключ доступа пользователя получен
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
bridge.send('VKWebAppCallAPIMethod', {
  method: 'users.get',
  params: {
    user_ids: '743784474,743784479',
    v: '5.131',
    access_token: 'RFC 6749'
  }})
  .then((data) => { 
    if (data.response) {
      // Метод API выполнен
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
// Подписывается на события, отправленные нативным клиентом
bridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе
if (bridge.supports("VKWebAppResizeWindow")) {
  bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}
bridge.send('VKWebAppOpenApp', {
  app_id: 6909581,
  location: 'test'
  })
  .then((data) => { 
    if (data.result) {
      // Приложение открыто
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
  
function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.15, 61.38],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),
    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.15, 61.43]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Лучшее место!',
                hintContent: 'МИДиС'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.684758, 37.738521
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects

        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([55.217326,61.283751], {
            balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([55.547662,37.77158], {
            balloonContent: '<strong>серобуромалиновый</strong> цвет'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
            balloonContent: 'цвет <strong>влюбленной жабы</strong>'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
            balloonContent: 'цвет <strong>детской неожиданности</strong>'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
            balloonContent: 'цвет <strong>красный</strong>'
        }, {
            preset: 'islands#redSportIcon'
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
            balloonContent: 'цвет <strong>фэйсбука</strong>'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            balloonContent: 'цвет <strong>носика Гены</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent: 'цвет <strong>голубой</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}
