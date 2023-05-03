const $leftLinks = document.querySelectorAll('.map-menu a'),
            $mapLinks = document.querySelectorAll('.map a');

$leftLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentPolygon = currentElement.querySelectorAll('polygon');
        let currentPath = currentElement.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        self.classList.add('active');
    });

    el.addEventListener('mouseleave', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentPolygon = currentElement.querySelectorAll('polygon');
        let currentPath = currentElement.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
        if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
        self.classList.remove('active');
    });

$mapLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.map-menu a[href="${selfClass}"]`);
        let info = document.querySelector(`.map__info[href="${selfClass}"]`);
        let currentPolygon = self.querySelectorAll('polygon');
        let currentPath = self.querySelectorAll('path');
        let activeIndex = "tabIndex";
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
        currentElement.classList.add('active');
    });

    el.addEventListener('mouseleave', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.map-menu a[href="${selfClass}"]`);
        let info = document.querySelector(`.map__info[href="${selfClass}"]`);
        let currentPolygon = self.querySelectorAll('polygon');
        let currentPath = self.querySelectorAll('path');
        if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
        if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
        currentElement.classList.remove('active');
    });
});


    /* Map Info */

    $("#main-sevkav, #map_main-sevkav").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-sevkav").addClass("active");
        $("#sevkav").removeClass("hide");
        $("#map-sevkav").removeClass("hide");
    });

    $("#info-sevkav").on("click", function(event) {
        event.preventDefault();

        $("#info-sevkav").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#sevkav").addClass("hide");
        $("#map-sevkav").addClass("hide");
    });

    $("#main-ufo, #map_main-ufo").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-ufo").addClass("active");
        $("#ufo").removeClass("hide");
        $("#map-ufo").removeClass("hide");
    });

    $("#info-ufo").on("click", function(event) {
        event.preventDefault();

        $("#info-ufo").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#ufo").addClass("hide");
        $("#map-ufo").addClass("hide");
    });

    $("#main-center, #map_main-center").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-center").addClass("active");
        $("#center").removeClass("hide");
        $("#map-center").removeClass("hide");
    });

    $("#info-center").on("click", function(event) {
        event.preventDefault();

        $("#info-center").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#center").addClass("hide");
        $("#map-center").addClass("hide");
    });

    $("#main-privol, #map_main-privol").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-privol").addClass("active");
        $("#privol").removeClass("hide");
        $("#map-privol").removeClass("hide");
    });

    $("#info-privol").on("click", function(event) {
        event.preventDefault();

        $("#info-privol").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#privol").addClass("hide");
        $("#map-privol").addClass("hide");
    });

    $("#main-sevzap, #map_main-sevzap").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-sevzap").addClass("active");
        $("#sevzap").removeClass("hide");
        $("#map-sevzap").removeClass("hide");
    });

    $("#info-sevzap").on("click", function(event) {
        event.preventDefault();

        $("#info-sevzap").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#sevzap").addClass("hide");
        $("#map-sevzap").addClass("hide");
    });

    $("#main-ural, #map_main-ural").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-ural").addClass("active");
        $("#ural").removeClass("hide");
        $("#map-ural").removeClass("hide");
    });

    $("#info-ural").on("click", function(event) {
        event.preventDefault();

        $("#info-ural").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#ural").addClass("hide");
        $("#map-ural").addClass("hide");
    });

    $("#main-sibir, #map_main-sibir").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-sibir").addClass("active");
        $("#sibir").removeClass("hide");
        $("#map-sibir").removeClass("hide");
    });

    $("#info-sibir").on("click", function(event) {
        event.preventDefault();

        $("#info-sibir").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#sibir").addClass("hide");
        $("#map-sibir").addClass("hide");
    });

    $("#main-daln, #map_main-daln").on("click", function(event) {
        event.preventDefault();

        $("#map_menu_main").addClass("hide");
        $("#map_main").addClass("hide");
        $("#info-daln").addClass("active");
        $("#daln").removeClass("hide");
        $("#map-daln").removeClass("hide");
    });

    $("#info-daln").on("click", function(event) {
        event.preventDefault();

        $("#info-daln").removeClass("active");
        $("#map_menu_main").removeClass("hide");
        $("#map_main").removeClass("hide");
        $("#daln").addClass("hide");
        $("#map-daln").addClass("hide");
    });

});
