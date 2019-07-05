import Vue from './vue/platforms/web/entry-runtime-with-compiler'
// console.log(Vue)
debugger
// Vue.component('deep-2', {
//     template: '<div>deep2</div>',
//     created() {
//         console.log('child-component-1-1 created')
//     },

//     mounted() {
//         console.log('child-component-1-1 mounted')
//     }
// })
// Vue.component('my-component', { 
//     template: '<div><deep-2></deep-2>deep1</div>',
//     created() {
//         console.log('child-component-1 created')
//     },

//     mounted() {
//         console.log('child-component-1 mounted')
//     }
// })
let count = 0
window.vueInstance = new Vue({
    el: '#app',
    data: {
        test: 123,
        a: 1,
        b: 2
    },
    directives: {
        align: {
            bind: function (el, binding, vNode, oldVNode) {
                console.log(1)
                // debugger
                // vNode.key = ++count
                const span = document.createElement('span')
                span.innerText = el.innerText
                el.innerHTML = ''
                el.appendChild(span)
            },

            update: function(el, binding, newNode, oldVNode) {
                console.log(2, el, newNode, oldVNode)
                const span = document.createElement('span')
                span.innerText = el.innerText
                el.innerHTML = ''
                el.appendChild(span)
            }
        }
    },
    created() {
        console.log('father created')
    },
    mounted() {
        console.log('father mounted')
    }
})
// alert(1)