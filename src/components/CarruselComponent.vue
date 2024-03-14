<template>
  <!-- Una plantilla que contiene un carrusel de logotipos -->
  <div class="logo-carousel">
    <div class="logo-container" ref="logoContainer">
      <!-- Contenedor de logotipos -->
      <div class="logos" v-for="(logo, index) in logos" :key="index">
        <!-- Iteración sobre la lista de logotipos para mostrar cada imagen -->
        <img :src="logo.src" :alt="logo.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

// Lista de logotipos con sus respectivas fuentes y descripciones alternativas
const logos = [
{ src: 'https://i.pinimg.com/564x/f6/21/55/f62155e93d7619d4ff79012728eaa1c4.jpg', alt: 'Gandhi' },
{ src: 'https://i.pinimg.com/564x/92/3f/d6/923fd69392131f074794f1585377531d.jpg', alt: 'Libreria el Planeta' },
{ src: 'https://i.pinimg.com/564x/c7/5d/ea/c75deadadca4a3e6be784f859ddf93f4.jpg', alt: 'Casa del Libro' },
{ src: 'https://i.pinimg.com/564x/9b/c9/d3/9bc9d3e092a19bb01e3d2de3bed67b81.jpg', alt: 'Amazon' },
{ src: 'https://i.pinimg.com/564x/a2/bf/20/a2bf203d9f0eee8b8020cb432f36d11f.jpg', alt: 'Buscalibre' },
{ src: 'https://i.pinimg.com/564x/6f/0e/6b/6f0e6b4effe0d632740d1dcf61aeb602.jpg', alt: 'Gonvill' },
];

// Función para iniciar la animación del carrusel de logotipos
const startAnimation = (container) => {
  const speed = 50; // Velocidad de desplazamiento
  const containerWidth = container.offsetWidth;
  let pos = 0;

  const scroll = () => {
    pos -= 1;
    if (pos < -containerWidth) {
      pos = 0;
    }
    container.style.left = pos + 'px';
  };

  // Configurar el intervalo para la animación
  const interval = setInterval(scroll, speed);

  // Limpiar el intervalo cuando se desmonta el componente
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
};

// Referencia al contenedor de logotipos
const logoContainer = ref(null);

// Acción ejecutada al montar el componente
onMounted(() => {
  const container = logoContainer.value;
  const cloneLogos = container.innerHTML;
  container.innerHTML += cloneLogos; // Duplicar los logotipos para crear un efecto de bucle
  startAnimation(container); // Iniciar la animación
});
</script>

<style>
/* Estilos CSS para el carrusel de logotipos */
.logo-carousel {
  width: 100%;
  overflow: hidden;
}

.logo-container {
  display: flex;
  position: relative;
}

.logos {
  flex: 0 0 auto;
}

.logos img {
  max-width: 100px; 
  margin: 0 10px; /* Espacio entre logos */
}
</style>