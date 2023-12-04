<!-- Create.vue -->
<template>
    <div>
      <h2>Create Todo</h2>
      <form @submit.prevent="createTodo">
        <label for="todo">Todo:</label>
        <input type="text" id="todo" v-model="newTodo" required>
        <button type="submit">Add Todo</button>
      </form>
       <!-- Button to navigate to Read page -->
      <button @click="goToReadPage">Go to Read Page</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Create',
    data() {
      return {
        newTodo: ''
      };
    },
    methods: {
      createTodo() {
        // Logic to create a new todo
        // You can send an API request or perform any other necessary actions here
        // For simplicity, let's just log the new todo to the console
        console.log('New Todo:', this.newTodo);
  
        // Reset the input field after creating a todo
        this.newTodo = '';
      },
      goToReadPage() {
      // Logic to navigate to the Read page
      // You can use Vue Router to navigate to the Read page
      // For example:
       this.$router.push('/read');
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

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 5px;
  width: 200px;
}

button {
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

</style>