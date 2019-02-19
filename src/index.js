import Vue from './vue/platforms/web/entry-runtime-with-compiler'
// console.log(Vue)
debugger
Vue.component('deep-2', {
    template: '<div>deep2</div>',
    created() {
        console.log('child-component-1-1 created')
    },

    mounted() {
        console.log('child-component-1-1 mounted')
    }
})
Vue.component('my-component', { 
    template: '<div><deep-2></deep-2>deep1</div>',
    created() {
        console.log('child-component-1 created')
    },

    mounted() {
        console.log('child-component-1 mounted')
    }
})

new Vue({
    el: '#app',
    data: {
        test: 123
    },
    created() {
        console.log('father created')
    },
    mounted() {
        console.log('father mounted')
    }
})
// alert(1)