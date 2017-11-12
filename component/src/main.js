
import Vue from '../node_modules/vue/dist/vue'
// import Vue from 'vue'
import App from './App.vue'

var vm = new Vue({
    el: '#app',
    // render: function (createElement) {
    //     createElement(App)
    // },
    render: createElement => createElement(App),
})





