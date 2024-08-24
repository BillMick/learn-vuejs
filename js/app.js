// Vue.component('message',{
//     template: `<div class="ui message" :class="cls">
//                     <i class="close icon" @click="close"></i>
//                     <p>{{ message }}</p>
//                 </div>`,
//     props:{
//         type: {type:String, default: 'success'},
//         message: {type:String, default: 'Default.'}
//     },
//     computed: {
//         cls: function () {
//             console.log('cls called.');
//             return this.type;
//         },
//     },
//     methods:{
//         close: function () {
//             // this.message = 'fermé';
//             this.success = this.success ? true : false;
//         },
//         style: function () {
//             return this.counter ? "background-color : #0F0" : "background-color : #F00"
//         },
//     },
// })


Vue.component('message',{
    template: `<div class="ui message" :class="cls">
                    <i class="close icon" @click="close"></i>
                    <p>{{ message }}</p>
                </div>`,
    props:{
        type: {type:String, default: 'success'},
        message: {type:String, default: 'Default.'}
    },
    computed: {
        cls: function () {
            console.log('cls called.');
            return this.type;
        },
    },
    methods:{
        close: function () {
            // this.message = 'fermé';
            this.success = this.success ? true : false;
        },
        style: function () {
            return this.counter ? "background-color : #0F0" : "background-color : #F00"
        },
    },
})

new Vue({
    el:'#app',
    data:{
        message: 'Salut les gens.',
        link: 'http://grafikart.fr',
        success: false,
        persons: ['Bill', 'Dieumène', 'Michaël'],
        seconds: 0,
        counter: true,
        firstname: 'Bill',
        lastname: 'AHOUANDJINOU'
    },
    methods:{
        close: function () {
            // this.message = 'fermé';
            this.success = true;
        },
        style: function () {
            return this.counter ? "background-color : #0F0" : "background-color : #F00"
        },
    },
    computed:{
        fullname:{
            get: function () {
                return this.firstname + ' ' + this.lastname;
            },
            set: function (value) {
                splitted_value = value.split(' ');
                this.firstname = splitted_value[0];
                this.lastname = splitted_value[1];
            }
        },
        cls: function () {
            console.log('cls called.');
            return this.success ? 'success': 'error';
        },
    },

    mounted: function () {
        this.$interval = setInterval(() => {
            this.seconds++;
        }, 1000);
        
    },

    destroyed: function () {
        clearInterval(this.$interval);
    }
})