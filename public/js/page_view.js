(function (d, w){
    w.addEventListener('load', function (e) {
        init();
    });

    var routes = {
    
    }

    function init() {
        var app = new Vue({
            el: "#itemsContainer",
            data: {
                items: [
                    {"id": "1", "type": "movie", "category": "трейлер", "pageUrl": "/movie/1", "name": "Железный Человек 1 / Iron Man 1"},
                    {"id": "2", "type": "movie", "category": "трейлер", "pageUrl": "/movie/2", "name": "Железный Человек 2 / Iron Man 2"},
                    {"id": "3", "type": "movie", "category": "трейлер", "pageUrl": "/movie/3", "name": "Железный Человек 3 / Iron Man 3"},
                    {"id": "4", "type": "movie", "category": "трейлер", "pageUrl": "/movie/4", "name": "Железный Человек 4 / Iron Man 4"},
                    {"id": "5", "type": "movie", "category": "трейлер", "pageUrl": "/movie/5", "name": "Железный Человек 5 / Iron Man 5"},
                    {"id": "6", "type": "movie", "category": "трейлер", "pageUrl": "/movie/6", "name": "Железный Человек 6 / Iron Man 6"},
                    {"id": "7", "type": "movie", "category": "трейлер", "pageUrl": "/movie/7", "name": "Железный Человек 7 / Iron Man 7"},
                    {"id": "8", "type": "movie", "category": "трейлер", "pageUrl": "/movie/8", "name": "Железный Человек 8 / Iron Man 8"},
                    {"id": "9", "type": "music", "genre": "rock", "pageUrl": "/music/13", "name": "Limp Bizkit ­ Behind Blue Eyes"}
                ],
                currentRoute: w.location.pathname
            }
        });
    }
})(document, window);