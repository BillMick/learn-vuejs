<template>
    <div class="ui inverted menu">
        <div class="header item">ToDo List Management</div>
    </div>
    <table class="ui table" v-if="tasks.length != 0">
        <thead>
            <th></th>
            <th>Title</th>
            <th>Date</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-for="task in tasks" :key="task.date">
                <td><input class="ui checkbox" type="checkbox" v-model="task.completed"></td>
                <td :style="{textDecoration: task.completed ? 'line-through': none}">{{ task.title }}</td>
                <td>{{ task.date }}</td>
                <!-- <td :style="{textDecoration: task.completed ? 'line-through': none}"><input class="ui input" type="text" v-model="task.title"></td> -->
                <!-- <td><button class="add-button" @click="modify_task(task)">Modify</button></td> -->
                <td><button class="add-button" @click="delete_task(task)">Delete</button></td>
            </tr>
        </tbody>
    </table>
    <div v-else>No defined task.</div><br>
    <p v-if="undone_tasks.length >= 1">{{ undone_tasks.length }} remaining task{{ undone_tasks.length > 1 ? 's': '' }} .</p>
    
    <!-- <label>
        <input type="checkbox" v-model="fliter_display">
        Hide done task(s)
    </label> -->

    <form class="ui form" @submit.prevent="add_task">
        <label class="ui" for=""><b>Task name:</b></label>
        <input class="ui input" type="text" name="new_task" v-model="new_task" placeholder="Enter new task name...">
        <button class="ui button add-button" type="submit">Add</button>
    </form>

    <!-- <form class="ui form" @submit.prevent="modify_task">
        <label class="ui" for=""><b>Task name:</b></label>
        <select name="select_task" id="select_task" v-model="selected_task">
            <option v-for="task in tasks" :key="task" value="task.title">{{ task.title }}</option>
        </select>
        <input class="ui input" type="text" name="old_task" v-model="old_task" placeholder="Enter new task name...">
        <button class="ui button" type="submit">Modify</button>
    </form> -->

</template>

<script setup>
    import {ref} from 'vue'
    const new_task = ref('');
    const old_task = ref('');
    const selected_task = ref('');
    const tasks = ref([]);
    const undone_tasks = ref([]);
    const fliter_display = ref(false);

    const add_task = function () {
        if (new_task.value != '') {
            tasks.value.push({title: new_task.value, completed: false, date: new Date().toLocaleString()});
            new_task.value = '';
        }
    }

    const delete_task = function (task) {
        tasks.value = tasks.value.filter(t => t != task);
    }

    const sortedTasks = function () {
        return tasks.value;
        // return tasks.value.toSorted((a,b) => a.completed > b.completed ? 1 : -1);
        
    }

    // const modify_task = function () {
    //     tasks.value.findIndex()
    // }

</script>

<style src="./todolist.css"></style>