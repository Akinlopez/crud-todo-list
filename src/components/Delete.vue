<!-- Delete.vue -->
<template>
    <div>
      <h2>Delete Todo</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
          <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      <!-- Links to navigate to Create and Read pages -->
      <router-link to="/create">Go to Create Page</router-link>
      <router-link to="/read">Go to Read Page</router-link>
    </div>
  </template>
  
  <script lang="">
  export default {
    name: 'Delete',
    data() {
      return {
        todos: [
          { id: 1, title: 'Todo 1' },
          { id: 2, title: 'Todo 2' },
          { id: 3, title: 'Todo 3' }
        ]
      };
    },
    methods: {
    deleteTodo(todoId) {
      // Implement logic to delete the todo with the specified ID
      // For now, let's log the todo ID to the console
      console.log(`Deleting todo with ID: ${todoId}`);
    }
  },
    setup() {
      // Define refs for navigation methods
      const goToCreatePage = () => {
        // Programmatically navigate to Create page
        this.$router.push('/create');
      };
  
      const goToReadPage = () => {
        // Programmatically navigate to Read page
        this.$router.push('/read');
      };
  
      // Return the methods to be used in the template
      return { goToCreatePage, goToReadPage };
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
  display: flex;
  justify-content: space-between;
}

li:last-child {
  border-bottom: none;
}

button {
  padding: 8px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
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

.create{
  margin: 10px;
}
.read{
  margin: 10px;
  }
</style>
