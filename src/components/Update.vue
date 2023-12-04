<!-- Update.vue -->
<template>
    <div>
      <h2>Update Todo</h2>
      <select v-model="selectedTodo" @change="loadTodoDetails">
        <option value="">Select a todo</option>
        <option v-for="todo in todos" :key="todo.id" :value="todo.id">
          {{ todo.text }}
        </option>
      </select>
      <input v-if="selectedTodo" v-model="newTodo" @keyup.enter="updateTodo" placeholder="Enter new todo">
      <!-- Links to navigate to Read and Delete pages -->
      <router-link to="/read">Go to Read Page</router-link>
      <router-link to="/delete">Go to Delete Page</router-link>
    </div>
  </template>
  
  <script lang="">
  export default {
    name: 'Update',
    data() {
      return {
        selectedTodo: '',
        newTodo: '',
        todos: [] // Initialize an empty array to store todos
      };
    },
    mounted() {
      // Fetch todos when the component is mounted
      this.fetchTodos();
    },
    methods: {
      fetchTodos() {
        // Implement logic to fetch todos from your API or database
        // For now, let's mock some data
        this.todos = [
          { id: 1, text: 'Learn Vue.js' },
          { id: 2, text: 'Build a CRUD app' },
          // Add more todos as needed
        ];
      },
      loadTodoDetails() {
        // Implement logic to load details of the selected todo
        // For now, let's log the selected todo id
        console.log('Selected Todo ID:', this.selectedTodo);
      },
      updateTodo() {
        // Implement update logic here
        console.log(`Updating todo with ID ${this.selectedTodo} to: ${this.newTodo}`);
      }
    }
  };
  </script>
  
  

<style scoped>

div {
  margin: 20px;
}

h2 {
  color: #333;
}

select {
  margin-bottom: 10px;
  padding: 8px;
}

input {
  margin-top: 10px;
  padding: 8px;
  width: 200px;
}

router-link {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
}

router-link:hover {
  text-decoration: underline;
}
</style>

  