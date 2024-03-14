<script setup>

</script>

<template>
    <!-- Contenedor principal que tiene todo el contenido de template -->

    <div class="title-h2">
        <h2>HOME</h2>
        <div class="charactor"></div>
    </div>
    <section class="side-menu">
        <MenuIzquierdo />
    </section>
    <section class="content">
        <div class="contenedorPrincipal">

            <!-- Primer subcontenedor que da acomodo a la primer sección superior del contenido -->
            <div class="subcontendor">
                <h3 class="titulo">DB NEWS</h3>
                <br> <br>
                <p class="parrafo">
                    The Dragon Ball Official Site is a portal site for the entire Dragon Ball series. In addition to the
                    latest info on anime, games, and merchandise, there are a wide variety of columns and interviews on a
                    wide range of topics.
                    The site supports several different languages, so fans around the world can all access the same content
                    and i
                </p>
                <br><br>
                <!-- Este contenedor interno da formato a las cards en acomodo en fila -->
                <div class="contenedor1">

                    <!-- Este contenedor es específico del contenido de cada card -->
                    <div class="contenedor1Div1">
                        <img src="https://en.dragon-ball-official.com/dragonball/en/news/2023/11/20/%E7%B9%9D%E8%BC%94%CE%97%E7%B9%9D%EF%BD%BC%E7%B9%A7%EF%BD%B7%E7%B9%A7%E5%90%B6%CE%99%E7%B9%9D%EF%BD%B3_%E8%B1%AC%EF%BD%B7%E8%9E%9F%E6%9A%B4en_fusion01.jpg?_=52a8a7f527c72f7b85b0f742ee4f2dd4"
                            style="width: 100%;" />
                        <h2>Subtítulo descriptivo</h2>
                        <p>This site contains articles featuring the latest Dragon Ball info as well as various columns..
                        </p>
                        <button>DRAGON</button>
                    </div>

                    <!-- Este contenedor es específico del contenido de cada card -->
                    <div class="contenedor1Div1">
                        <img src="https://en.dragon-ball-official.com/dragonball/en/news/2023/12/04/2301204_EN.jpg?_=52a8a7f527c72f7b85b0f742ee4f2dd4"
                            style="width: 100%;" />
                        <h2>Subtítulo descriptivo</h2>
                        <p>LYou can search by title, character, or whatever you like to find related articles or use the
                            suggested articles feature to find something that piques your interest.</p>
                        <button>BALL</button>
                    </div>
                </div>
                <br><br>
                <p class="parrafo">
                    Use the favorite button to add articles you enjoyed to the Favorited Articles section of your profile.
                </p>
                <br><br>
            </div>

            <!-- Segundo subcontenedor que da acomodo a la segunda sección superior del contenido -->
            <div class="subcontenedor">

                <h3 class="titulo">Subtítulo</h3>
                <br>
                <!-- Este contenedor interno da formato a las cards en acomodo en fila -->
                <div class="contenedor2">

                    <!-- Este contenedor es específico del contenido de cada card -->
                    <div class="contenedor2Div2">
                        <img src="https://en.dragon-ball-official.com/dragonball/jp/news/2023/11/11/01_tn.jpg?_=52a8a7f527c72f7b85b0f742ee4f2dd4"
                            style="width: 100%;">
                        <h2>Subtítulo descriptivo</h2>
                        <p>The Top Page contains banners for our most interesting articles as well as a list of the latest
                            ones we recommend.
                            Try starting there to find an article that catches your eye!</p>
                        <button>Z</button>
                    </div>

                    <!-- Este contenedor es específico del contenido de cada card -->
                    <div class="contenedor2Div2">
                        <img src="https://en.dragon-ball-official.com/dragonball/jp/news/2023/10/23/chara131_tn.jpg?_=52a8a7f527c72f7b85b0f742ee4f2dd4"
                            style="width: 100%;">
                        <h2>Subtítulo descriptivo</h2>
                        <p>You can find a ranked list of popular articles on the Top Page and the Highlights Page.
                            Find out which articles people are talking about</p>
                        <button>GT</button>
                    </div>

                    <!-- Este contenedor es específico del contenido de cada card -->
                    <div class="contenedor2Div2">
                        <img src="https://en.dragon-ball-official.com/dragonball/jp/news/2021/12/23/allWork.jpg?_=52a8a7f527c72f7b85b0f742ee4f2dd4"
                            style="width: 100%;">
                        <h2>Subtítulo descriptivo</h2>
                        <p>Tap on News in the menu to bring up a list of articles.
                            The top of the page has a list of categories such as Anime, Book, etc., and selecting one of
                            these will bring up a list of articles belonging to that category.</p>
                        <button>KAI</button>
                    </div>

                </div>

                <br><br>

                <p class="parrafo">
                    Plus, if you spot a tag in the article list that interests you, just tap it to bring up a list of
                    articles with the same tag.
                    Find articles you love, then search for more just like them!
                </p>
            </div>



        </div>
    </section>
</template>
  
  <script setup>
  </script>
  
<style scoped>
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
    background: url(https://en.dragon-ball-official.com/assets/img/news/img_footer.png) no-repeat 0 0;
    background-size: 252px auto;
    z-index: 1;
}

.title-h2 .charactor {
    bottom: -36px;
    width: 334px;
    height: 354px;
    margin-left: 210px;
    background-image: url(https://en.dragon-ball-official.com/assets/img/news/img_footer.png);
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

.content {
    display: flex;
    justify-content: center;
    /* Centrado horizontal */
    align-items: center;
    /* Centrado vertical */
    ;
    /* 100% del alto de la ventana */
}

/*Estilos del contenedor principal que tiene todo el contenido de template */
.contenedorPrincipal {
    /*Disposición flex column para acomodar las cards en fila */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    padding: 20px;
    box-sizing: border-box;
    /* Color de fondo del componente */
    background-color: rgb(226, 217, 248);
}

/*Subcontenedor que contiene la primer sección de dos cards y también la segunda sección de tres cards*/
.subcontenedor {
    width: 100%;
    /*Ajuste del tamaño de ancho de las cards en fila*/
    max-width: 1000px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}

/*Estilos para el título*/
.titulo {
    font-size: 25px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    text-align: center;
}

/*Estilos para los párrafos que no son los de las cards*/
.parrafo {
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    margin-left: 10px;
    color: black;
    text-align: justify;
    margin-left: 50px;
    margin-right: 50px;
}

/*Estilos del contenedor interno que contiene como tal las cards y les da el acomodo en fila*/
.contenedor1,
.contenedor2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*Se define la anchura total que deben abarcar las cards en la pantalla*/
    width: 95%;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}

/*Estilos del contenedor que da formato a cada card*/
.contenedor1Div1 {
    width: 45%;
    margin-left: 25px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 2px 2px 7px rgb(185, 185, 185);
    border: 1px rgb(236, 236, 236);
}

.contenedor1Div1 img {
    width: 20%;
}

.contenedor1Div1 h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
    color: black;
}

/*Estilo para los párrafos de las primeras dos cards*/
.contenedor1Div1 p {
    font-size: 16px;
    margin: 0 0 10px 0;
    color: black;
}

/*Estilos de los botones de las cards del primer contenedor*/
.contenedor1Div1 button {
    font-size: 15px;
    font-weight: 700;
    background-color: white;
    border: 1px solid #000;
    border-radius: 20px;
    width: 200px;
    height: 30px;
    margin: 10px 0;
    cursor: pointer;
}

/*Estilos del contenedor que da formato a cada card*/
.contenedor2Div2 {
    width: 30%;
    background-color: white;
    box-shadow: 2px 2px 7px rgb(225, 225, 225);
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

.contenedor2Div2 img {
    width: 100%;
}

.contenedor2Div2 h2 {
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
    color: black;
}

/*Estilo de los párrafos de las últimas tres cards en fila*/
.contenedor2Div2 p {
    font-size: 16px;
    margin: 0 0 10px 0;
    color: rgb(0, 0, 0);
}

/*Estilos de los botones de las cards del segundo contenedor*/
.contenedor2Div2 button {
    font-size: 12px;
    font-weight: 700;
    background-color: white;
    border: 1px solid #000;
    border-radius: 20px;
    width: 120px;
    height: 30px;
    margin: 10px 0;
}</style>
