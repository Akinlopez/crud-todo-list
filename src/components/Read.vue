<!-- Read.vue -->
<template>
    <div>
      <h2>Read Todos</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
      <!-- Links to navigate to Update and Delete pages -->
      <router-link to="/update">Go to Update Page</router-link>
      <router-link to="/delete">Go to Delete Page</router-link>
    </div>
  </template>
  
  <script lang="">
  export default {
    name: 'Read',
    data() {
      return {
        todos: []
        
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

li:last-child {
  border-bottom: none;
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