<template>
  <header id="header">
    <HeaderComponent />

    <div class="global-nav-inner">
      <ul class="contents">
        <li class="home">
          <RouterLink class="a" to="/">HOME</RouterLink>
        </li>
        <li class="articulos">
          <RouterLink class="a" to="/shop">SHOP</RouterLink>
        </li>
        <li class="blog">
          <RouterLink class="a" to="/blog">BLOG</RouterLink>
        </li>
        <li class="usuarios">
          <RouterLink class="a" to="/register">USERS</RouterLink>
        </li>
        <li class="contacto">
          <RouterLink class="a" to="/contacto">CONTACT</RouterLink>
        </li>
        <li class="about">
          <RouterLink class="a" to="/about">ABOUT</RouterLink>
        </li>
      </ul>
    </div>
  </header>
  <RouterView />
  <br>
  <div class="carrusel">
    <CarruselComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import CarruselComponent from "./components/CarruselComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    CarruselComponent,
},
};
</script>

<style>
@media screen and (min-width: 768px) {


  #header .contents {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: auto;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin: 0 auto;
  }
}

#app {

  font-family: Oswald, sans-serif;
  ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

#header .contents {
  position: relative;
  width: 100vw;
  background-color: #000;
  font-size: 0;
  text-align: center;
}

#header .contents>li {
  display: inline-block;
  padding: 0;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  font-size: 38.4px;
  font-size: 38.4px;
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: .02em;
  position: relative;
}

ul li {
  list-style-type: none;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.contents li:hover .a {
  color: #ffb200;
  /* Cambia esto al color que desees */
}

/* Estilos por defecto para los enlaces */
.contents li .a {
  display: block;
  position: relative;
  padding: 10px 26px 9px 43px;
  color: #fff;
  line-height: 30px;
  transition: color .2s;
  color: #fff;
  /* Cambia esto al color del texto por defecto */
  text-decoration: none;
  /* Ajusta según sea necesario */
}</style>
