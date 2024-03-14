<template>
      <div class="title-h2">
        <h2>BLOG</h2>
        <div class="charactor"></div>
    </div>
/<!--En esta seccion se tendran los  contenedores para cada una de las publicaciones que los usuarios realizen o quieran leer-->
  <section id="principal">
    <!--En la seccion de publicaciones se agregaran las etiqetas article las cuales nos serviran como guia para saber cuantas publicaciones 
    son las que se tendran-->
    <section id="publicaciones">
      <!--Mediante el uso del class post se definiran los estilos de la caja de la publicacion-->
      <article class="post">
        <!--El enlace con la clase enlace-post hace que el titulo de la publicacion sea un enlace-->
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="https://i.pinimg.com/564x/0c/d5/ed/0cd5ed1e0d28a431c61ace64e253a203.jpg" class="img-post">
        <!--Se utiliza strong para marcar en negritas el dato de por quien y en que fecha fue hecho el comentario o la publicacion-->
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          <!--Estos elementos nos sirven como una separacion en el renglon entre elementos-->
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <!--En este apartado se crean enlaces para poder leer mas acerca de la publicacion asi como tambien mostrar cuantos comentarios se han subido-->
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>

      <article class="post">
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="https://i.pinimg.com/564x/0c/d5/ed/0cd5ed1e0d28a431c61ace64e253a203.jpg" class="img-post">
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>

      <article class="post">
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="https://i.pinimg.com/564x/0c/d5/ed/0cd5ed1e0d28a431c61ace64e253a203.jpg" class="img-post">
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>

      <article class="post">
        <a href="" class="enlace-post">
          <h2 class="titulo-post">Titulo de publicacion</h2>
        </a>
        <img src="https://i.pinimg.com/564x/0c/d5/ed/0cd5ed1e0d28a431c61ace64e253a203.jpg" class="img-post">
        <p><strong>Por: </strong><span class="datos-publicaciones">Aide Soto</span>
          &nbsp; &nbsp;
          <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
        </p>
        <p class="parrafo-post">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima culpa, corrupti quas voluptatem maxime.
          Sapiente, consequatur. Reiciendis animi cumque commodi nisi. Officiis excepturi consequuntur aliquam eius
          incidunt aut molestiae?
        </p>
        <a href="" class="leer-mas">Leer Más..</a>
        &nbsp; &nbsp;
        <span class="num-comentarios">20 Comentarios</span>
      </article>
    </section>
  </section>

</template>

<script>

</script>
<!--Se comienzan con los estilos tipo sass-->
<style lang="scss" scoped>
/*Se configura la pagina con la eliminacion del posible margen en la pagina y la separacion entre elementos*/ 
* {
  margin: 0;
  padding: 0;
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
.title-h2 .charactor {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 252px;
    height: 216px;
    margin-left: 337px;
    background: url(https://en.dragon-ball-official.com/assets/img/news/h2_charactor.png) no-repeat 0 0;
    background-size: 252px auto;
    z-index: 1;
}
.title-h2 .charactor {
    bottom: -36px;
    width: 334px;
    height: 354px;
    margin-left: 210px;
    background-image: url(https://en.dragon-ball-official.com/assets/img/news/h2_charactor.png);
    background-size: 100% auto
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
//Dentro del principal se establece el ancho del contenedor, el alto que tendra el cual se ajustara de acuerdo a los cards que se inserten, el borde
//el margen y la alineacion de los elementos
#principal {
    display: flex;
    justify-content: center;
    /* Centrado horizontal */
    align-items: center;
    /* Centrado vertical */
    ;
    /* 100% del alto de la ventana */

  height: auto;
  overflow: hidden;
  border: 1px solid;
  margin: 25px solid;

}

//en post se define la configuracion que tendran los elementos que se inserten en este ya sea como los titulos, textos, etc en donde definira,
//el ancho que el contenedor tendra, la alineacion del contenido los bordes que este contendra, el sombreado del contenedor y los margenes que tendra

.post {
  width: 90%;
  align-content: center;
  height: auto;
  overflow: hidden;
  padding: 20px;
  background: #fdfdfd;
  border-left-style: solid;
  border-left-width: 15px;
  border-left-color: #ffb200;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #ccc;
  margin-bottom: 25px;
  margin: 50px;
}
//define el estilo que contendra el enlace del titulo de la publicacion
.enlace-post {
  text-decoration: none;
}
//Define los colores y el tamaño de fuente que tendra el titulo de la publicacion
#publicaciones a .titulo-post {
  color: #6e6e6e;
  font-size: 22px;
  font-family: calibri light;
}
//se declara como subrayado al titulo de la publicacion que tendra el enlace
#publicaciones a .titulo-post:hover {
  text-decoration: underline;
}
//define estilos para ajustar la imagen de la publicacion al contenedor declarando el ancho y alto de la imagen, el margen que tendra y el relleno
//los bordes de la imagen
#publicaciones .img-post {
  width: 150px;
  height: 100px;
  float: left;
  margin: 7px 7px 7px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
//se declara el estilo de la fuente de el texto de los datos de la publicacion por ejemplo la fecha y quien lo publico aparte de definir el color
#publicaciones .datos-publicaciones {
  font-family: 'calibri light';
  color: #0489B1;
}
//se define el tamaño, estilo de fuente, color y relleno que tendra la informacion de la publicacion
#publicaciones .parrafo-post {
  font-family: 'calibri light';
  font-size: 16px;
  color: #848484;
  padding: 5px;
}
//define el estilo del boton o la direccion para poder leer mas de la publicacion el color de fondo de este boton, el color del texto, los bordes que 
//este tendra, el margen que tendra entre un elemento y otro y el radio del borde
#publicaciones .leer-mas {
  background: #ffb200;
  color: #fff;
  border: 0px;
  padding: 5px;
  text-decoration: none;
  margin-top: 20px;
  border-radius: 5px;
}
//se definen los estilos para el span que contiene la informacion de cuantos comentarios son los que se han ido agregando a una determinada publicacion
#publicaciones .num-comentarios {
  background: #061e1d;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px;
}
</style>

