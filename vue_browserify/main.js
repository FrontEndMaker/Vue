var Vue = require("vue");
var hello = require("./components/hello.vue")

new Vue ({
	el:"#app",
	render: function(createElement) {
        return createElement(hello)
    }
})