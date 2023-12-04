<template>
  <div id="app">
    <nav>
      <router-link to="/create" class="nav-link">Create</router-link>
      <router-link to="/read" class="nav-link">Read</router-link>
      <router-link to="/update" class="nav-link">Update</router-link>
      <router-link to="/delete" class="nav-link">Delete</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

nav {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 20px;
}

.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #e0e0e0;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #d0d0d0;
}
</style>
