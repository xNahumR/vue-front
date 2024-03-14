<template>
  <header class="head">
      <!-- Lista de navegación -->
      <div class="logo">
        <router-link to="/">
          <!-- Imagen del logo -->
          <img src="../assets/logo_title.png" alt="img" />
        </router-link>
      </div>
      <div class="title-h2">
        <h2>DRAGON BALL UNIVERSE</h2>
      </div>

      <div class="logo2">
        <!-- Imagen del logo -->
        <img src="../assets/cropped-Logo-50-70-70-70.png" alt="img" />
      </div>
  </header>
</template>

<script>
export default {
  // Nombre del componente
  name: "AppHeader",
  // TODO: Agregar lógica y estado del componente si es necesario
};
</script>

<style scoped>
.head{
  background-image: url(https://en.dragon-ball-official.com/assets/img/shared/bg_comics_pc.jpg);
}
.title-h2 h2 {
    position: relative;
    width: auto;
    margin: 0 auto;
    z-index: 3;
    font-family: Oswald,sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: -.02em;
}
/* Estilos para el encabezado y la barra de navegación */
header,
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Estilos para el encabezado */
header {
  padding: 3%;
}
/* Estilos para la barra de navegación */
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  max-height: 15vh;
  overflow-y: hidden;
}
/* Estilos para la imagen del logo */
.logo a img {
  width: auto;
  height: 90px;
  padding: 5px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
}
/* Estilos para la imagen del logo cuando se pasa el cursor sobre ella */
.logo a img:hover {
  transform: scale(1.2);
  border-radius: 40px;
}
.logo2 img {
  width: 90;
  height: 80px;
}
/* Estilos para la lista de navegación */

/* Estilos para los enlaces de la lista de navegación cuando se pasa el cursor sobre ellos */
ul li a:hover {
  background-color: rgba(65, 65, 65, 0.557);
  border-radius: 50px;
}

/* Consulta de medios para dispositivos con un ancho máximo de 768px */
@media (max-width: 768px) {
  /* Estilos para el encabezado en dispositivos más pequeños */
  header {
    padding: 2%;
  }
  /* Estilos para la barra de navegación en dispositivos más pequeños */
  nav {
    flex-direction: column;
    max-height: 30vh;
  }
  /* Estilos para la imagen del logo en dispositivos más pequeños */
  .logo a img {
    width: 80px;
    height: 90;
  }
  /* Estilos para la lista de navegación en dispositivos más pequeños */
  ul {
    flex-direction: column;
  }
  /* Estilos para los elementos de la lista de navegación en dispositivos más pequeños */
  ul li {
    padding: 10px;
  }
}
/* Consulta de medios para dispositivos con un ancho máximo de 480px */
@media (max-width: 480px) {
  /* Estilos para el encabezado en dispositivos aún más pequeños */
  header {
    padding: 1%;
  }
  /* Estilos para la imagen del logo en dispositivos aún más pequeños */
  .logo a img {
    width: 60px;
    height: 60px;
  }
}
</style>
