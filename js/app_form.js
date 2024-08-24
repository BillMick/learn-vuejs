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
        user:{
            firstname:'Default firstname',
            lastname:'Default lastname'
        }
    },
    components:{ form_user },
})