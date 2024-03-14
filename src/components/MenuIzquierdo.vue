<script setup>
import { ref } from "vue";


const collapsed = ref(true);
</script>

<template>
  <!-- este es el boton el cual es en el que clikeamos y se expandera el menu  -->
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">Dragon Balls</button>
    </div>
    <br>
<!-- al dar click en el boton anterior se expandera el menu y mostrara el siguiente contenido  -->
    <div class="menu-items">
        <a class="imgsmenu" href="">
          <img src="../imgs/one-star.png" >
        </a>
        <a class="imgsmenu" href="">
          <img src="../imgs/two-stars.png" >
        </a>
        <a class="imgsmenu" href="">
          <img src="../imgs/three-stars.png" >
        </a>
        <a class="imgsmenu" href="">
          <img src="../imgs/four-stars.png" >
        </a>
        <a class="imgsmenu" href="">
          <img src="../imgs/five-stars.png" >
        </a>
        <a class="imgsmenu" href="">
          <img src="../imgs/six-stars.png" >
        </a>
        <a class="imgsmenu" href="">
          <img src="../imgs/seven-stars.png" >
        </a>
    </div>
  </div>
</template>

<style scoped>
.menu {
  background-color: rgb(201, 201, 201);
  height: auto;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  left: 1;
  top: 1;
}
.header {
text-align: center;
}

.menu-button {
  border: none;
  background-color: transparent;
  color: rgb(255, 178, 0);
  padding: 0;
  border-radius: 3%;
  border-color: white;
  font-size: medium;
  width: 100%; /* Ajusta el ancho del botón para ocupar todo el ancho disponible */
  text-align: center;
  box-sizing: border-box; /* Asegura que el padding y el borde no afecten el ancho total */
}


/* we will explain what these classes do next! */
.collapsed {
  width: 75px;
}

.expanded {
  width: 350px;
}

.profile {
  padding: 10px;
  text-align: center;
}
.imgsmenu img {
  width: 50%; /* Ajusta el ancho de la imagen según tus necesidades */
  height: auto;
}
.profile img {
  border-radius: 10%;
  min-width: 10px;
  max-width: 100px;
  width: 100%;
}

.profile-name {
  padding: 10px 0;
  font-size: 22px;
}

.menu-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
  display: block;
}
a:hover {
  background-color: rgb(255, 178, 0)
}
.item {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.item .icon {
  width: 10px;
  display: flex;
  justify-content: center;
}
</style>
