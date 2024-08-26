<template>
    <div class="main" :style="{borderColor: verified ? 'green' : 'red'}">
        <!-- <div class="id-infos">
            <div class="info">
                <b>Firstname: </b> {{ firstname }}
            </div>
            <div class="info">
                <b>Lastname: </b> {{ lastname }}
            </div>
            <div class="info">
                <b>Age: </b> {{ age }}
            </div>
            <div class="check-it">
                <label>
                    <input type="checkbox" v-model="verified"> Confirm identity
                </label>
            </div>
        </div> -->
        <table class="id-infos">
            <tbody>
                <tr>
                    <td><b>Firstname:</b></td>
                    <td>{{ firstname }}</td>
                </tr>
                <tr>
                    <td><b>Lastname:</b></td>
                    <td>{{ lastname }}</td>
                </tr>
                <tr>
                    <td><b>Age:</b></td>
                    <td>{{ age }}</td>
                </tr>
                <tr>
                    <td><b>Civility:</b></td>
                    <td>{{ civility }}</td>
                </tr>
                <tr class="ckeck-it">
                    <td>
                        <input type="checkbox" v-model="verified">
                    </td>
                    <td>Confirm identity</td>
                </tr>
            </tbody>
        </table>
        <div class="id-image">
            <img :src="civility == 'Mr' ? man_image_path : woman_image_path" alt="ID image">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const man_image_path = ref("../../images/man.png");
    const woman_image_path = ref("../../images/woman.png");
    const props = defineProps({
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        age: {type: Number, required: true},
        civility: {type: String, default: 'Mr'},
        // image: {type: String, default: "../../images/man.png"}
    });
    const verified = ref(false);
</script>

<style>
    .main{
        display:flex;
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 30px;
        border-style: dashed double;
        width: 500px;
    }
    .info{
        border-style: solid;
        margin: 50px;
    }
    .check-it{
        border-style: dashed;
        margin: 50px;
        border-color: blue;
    }
    img{
        height: 150px;
        margin-left: 80px;
    }
</style>