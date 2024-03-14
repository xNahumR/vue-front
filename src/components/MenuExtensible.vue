<template>
  <div>
    <div class="menu-container" :class="{ 'menu-open': isMenuOpen }">
      <!-- Botón para activar/desactivar el menú -->
      <div class="toggle-button" @click="toggleMenu">
        ☰
      </div>
      <!-- Contenido del menú -->
      <div class="menu-content">
        <!-- Coloca aquí los elementos del menú -->
        <ul :class="{ 'menu-expanded': isMenuOpen }">
          <li v-show="isMenuOpen"><a href="#">Inicio</a></li>
          <li v-show="isMenuOpen"><a href="#">Departamentos</a></li>
          <li v-show="isMenuOpen"><a href="#">Carrito</a></li>
        </ul>
      </div>
    </div>
    <!-- Contenido principal de la aplicación -->
    <div class="main-content">
      <!-- Coloca aquí el contenido principal de tu aplicación -->
      <p>Contenido principal aquí</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 12%;
  right: 0;
  height: 100%;
  width: 60px; /* Ancho del menú */
  background-color: #333; /* Color de fondo del menú */
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-open {
  width: 200px; /* Ancho expandido del menú */
}

.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.toggle-button {
  cursor: pointer;
  font-size: 24px;
  color: #fff; /* Color del icono del botón */
  margin-top: 20px;
}

.main-content {
  margin-right: 60px; /* Ajusta el margen para dejar espacio para el menú */
  padding: 20px;
}

.menu-content ul {
  list-style: none; /* Elimina los puntos de la lista */
  padding: 0;
  margin: 0;
}

.menu-content a {
  text-decoration: none; /* Elimina la decoración de enlace */
  color: #fff; /* Color del texto de los enlaces */
}

.menu-content a:hover {
  text-decoration: underline; /* Subraya el enlace al pasar el ratón sobre él */
}

.menu-expanded .menu-content ul {
  display: block; /* Muestra el menú al expandir */
}
</style>
