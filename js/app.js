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


let message = {
    template: `<div class="ui message" :class="cls">
                    <i class="close icon" @click="close"></i>
                    <div class='header'> {{ header }} </div>
                    <p>{{ message }}</p>
                </div>`,
    props: {
            type: {type: String, default: 'success'},
            message: {type: String, default: 'Default message.'},
            header: {type: String}
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
            // this.success = this.success ? true : false;
            // this.$parent.$data.alert = false;
            this.$emit('close')
            console.log(this.$parent.$data.alert);
        },
        style: function () {
            return this.counter ? "background-color : #0F0" : "background-color : #F00"
        },
    },
}
let counter = {
    data: function () {
            return {count: 0}
        },
    props: {
        start: {type: Number, default: 0}
    },
    methods:{
        increment: function () {
            this.count++
        }
    },
    template:  `<div>
                    <button @click='increment'>{{ count }}</button>
                </div>`,
    mounted: function () {
        this.count = this.start;
    }
}

let form_user = {
    template:`
        <form class="ui form" @submit.prevent="save">
            <div class="field">
                <label for="firstname">Firstname</label>
                <input type="text" v-model="user.firstname">
            </div>
            <div class="field">
                <label for="firstname">Lastname</label>
                <input type="text" v-model="user.lastname">
            </div>
            <button class="ui button" type="submit">Submit</button>
        </form>
        `,
        props: {
            value: Object,
        },
        data () {
            return {
                user: JSON.parse(JSON.stringify(this.value))
            };
        },
    methods: {
        save () {
            this.$emit('input', this.user);
        }
    }
}

new Vue({
    el:'#app',
    data: {
        message: 'A better message',
        alert: false,
        user:{
            firstname:'Default firstname',
            lastname:'Default lastname'
        }
    },
    components:{counter, message, form_user},
    methods:{
        show_alert () {
            this.alert = true;
        },
        hide_alert () {
            this.alert = false;
        },
        close: function () {
            // this.message = 'fermé';
            this.success = true;
        },
        style: function () {
            return this.count ? "background-color : #0F0" : "background-color : #F00"
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