class CounterStore{
    constructor()
    {
        this.state = {
            count: 0
        }
    }

    increment ()
    {
        this.state.count++;
    }

    decrement ()
    {
        this.state.count--;
    }
}

let counter_store = new CounterStore()

let counter = {
    template: `<div class="ui button" @click="increment"> {{ count }} </div>`,
    data () {
        return {state: counter_store.state}
    },
    computed: { 
        count: function () {
            return this.state.count;
        }
    },
    methods: {
        increment () { counter_store.increment() }
    }
}

let notification = {
    components: { counter },
    template: `
        <div>
            <counter></counter>
            <button @click="addNotification"> Increment it. </button>
        </div>
    `,
    methods: {
        addNotification () { counter_store.increment() }
    }
}

new Vue({
    el:'#app',
    components:{notification, counter},
    data:{
        count: counter_store.state.count
    },
    // methods: {
    //     increment: function () { counter_store.increment() }
    // }
})