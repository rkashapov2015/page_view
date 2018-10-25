
var app = null;
(function (d, w){
    w.addEventListener('load', function (e) {
        init();
    });
    
    
    function init() {
        
        $.mockjax(function (settings) {
            var page = settings.url.match(/\/\?page=(\d)$/);
            if (page) {
                return {
                    proxy: "/mocks/" + page[1] + ".json"
                };
            }
        });
        d.getElementById('itemsContainer').style="";
        var url = new URL(w.location.href);
        var page = url.searchParams.get('page');

        if (!page)
            page = 1;

        app = new Vue({
            el: "#itemsContainer",
            data: {
                items: [],
                error: false,
                pages: []
            }
        });

        $.ajax({
            url: '/data/?page=' + page,
            success: function (data) {
                data = JSON.parse(data);
                if (data.hasOwnProperty('content')) {
                    app.items = data['content'];
                    if (data.hasOwnProperty('lastPage')) {
                        app.pages = Array.from({length: parseInt(data.lastPage)}, (v, k) => k+1)
                    }
                }
            },
            error: function (e) {
                app.error = true;
            }
        });

        
    }
})(document, window);