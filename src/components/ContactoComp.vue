<template>
    <div class="database-area">
    <div class="title-h2">
      <h2>CONTACT</h2>
      <div class="charactor"></div>
    </div>
    <div class="container mt-5">
    <p class="lead text-center">The Dragon Ball Official Site is a portal site for the entire Dragon Ball series. In addition to the latest info on anime, games, and merchandise, there are a wide variety of columns and interviews on a wide range of topics.
The site supports several different languages, so fans around the world can all access the same content and info..</p>

    <div class="row mt-5">
      <div class="col-md-6">
        <h2>Información de Contacto</h2>

        <p><strong>Dirección:</strong> Descubre nuestras instalaciones en La Piedad Michoacán, tu destino para productos de calidad y ofertas irresistibles.</p>

        <p><strong>Teléfono:</strong> ¿Necesitas asistencia inmediata? Llámanos al 352-669-88-49 durante nuestras horas de operación.</p>

        <p><strong>Correo Electrónico:</strong> Para preguntas, sugerencias o cualquier otra consulta, escríbenos a vanniesupermarket@gmail.com.</p>
<br>

        <h2>Horario de Atención</h2>
        <p><strong>Lunes a Domingo:</strong> Desde las 09:00 a.m hasta las 10:00 p.m. Tus necesidades son nuestra prioridad, y nos esforzamos por responder a todas las consultas en un plazo de 24 horas.</p>

      </div>

      <div class="col-md-4">
        <h2>Ubicación en el Mapa</h2>
        <div>
          <img src="https://i.pinimg.com/564x/2c/4f/79/2c4f79bac2ccaaa33ce2c8f8ac27221f.jpg" alt=""
          style="height: 600px; width: 650px;">
        </div>
        

      </div>
    </div>
  </div>
</div>  

</template>

<script setup>




</script>

<style scoped>
.wrap .database-area .title-h2 .charactor {
    top: -4px;
    width: 401px;
    height: 308px;
    right: 0;
    left: auto;
    background-image: url(https://en.dragon-ball-official.com/assets/img/shared/diagonal.png);
    background-size: 100% auto;
}

.wrap .title-h2 .charactor {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 252px;
    height: 216px;
    margin-left: 337px;
    background: url(https://en.dragon-ball-official.com/assets/img/shared/diagonal.png) no-repeat 0 0;
    background-size: 252px auto;
    z-index: 1;
}
.title-h2:before {
    z-index: 1
}

.title-h2:before {
    content: "";
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: url(https://en.dragon-ball-official.com/assets/img/shared/diagonal.png);
}
.title-h2:after {
    content: "";
    position: absolute;
    top: 200px;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: #f2f2f2;
    -webkit-transform: skewY(2.5deg);
    transform: skewY(2.5deg);
    z-index: 1;
}
.title-h2 h2 strong {
    width: 227px;
    height: 77px;
    background-image: url(https://en.dragon-ball-official.com/assets/img/shared/bg_comics_pc.jpg);
    background-size: 100% auto
}

.title-h2 {
    position: relative;
    height: 250px;
    padding-top: 5px;
    overflow: hidden;
}

.title-h2 h2 {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    z-index: 3;
    font-family: Oswald, sans-serif;
    font-weight: 700;
    font-size: 100px;
    letter-spacing: -.02em;
}

.database-area .title-h2 .charactor {
    top: -4px;
    width: 401px;
    height: 308px;
    right: 0;
    left: auto;
    background-image: url(https://en.dragon-ball-official.com/assets/img/database/h2_charactor.png);
    background-size: 100% auto;
}

.title-h2 .charactor {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 252px;
    height: 216px;
    margin-left: 337px;
    background: url(https://en.dragon-ball-official.com/assets/img/database/h2_charactor.png) no-repeat 0 0;
    background-size: 252px auto;
    z-index: 1;
}

</style>
