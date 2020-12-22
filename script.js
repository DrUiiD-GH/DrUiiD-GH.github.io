
	function openCategory(evt, catName){
		var i, catalogList, selectorBtn;
		catalogList = document.getElementsByClassName("section-catalog__list");
		for(i=0; i<catalogList.length; i++){
			catalogList[i].className = catalogList[i].className.replace(" is-visible", " ");
		};
		selectorBtn = document.getElementsByClassName("section-catalog__selector-btn");
		for(i=0; i<selectorBtn.length; i++){
			selectorBtn[i].className = selectorBtn[i].className.replace(" is-active", " ");
		};
		document.getElementById(catName).className+=" is-visible";
		evt.currentTarget.className+=" is-active";		
	};
	
	ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [55.688025, 37.596543],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г. Москва, Большая Черёмушкинская ул., 11, корп. 3'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/fruit-ice-cream-cone.png',
            iconImageSize: [55, 52],
            iconImageOffset: [5, -108]
        });

    myMap.geoObjects.add(myPlacemark);
});
