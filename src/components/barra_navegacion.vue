<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
  </nav>
</template>

<script>
export default {
  name: 'barra_navegacion',
};
</script>


<style scoped>
nav {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  color: white;
}

router-link {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
</style>
