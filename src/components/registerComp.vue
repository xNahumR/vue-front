<template>
    <div id="app" class="container mt-5">
        <!-- Formulario de Registro -->
        <div>
            <div class="title-h2">
                <h2>REGISTER</h2>
                <div class="charactor"></div>
            </div>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="name" class="form-control" id="name" v-model="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" required>
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <button type="submit" class="btn btn-outline-warning ">Registrar</button>
            </form>
        </div>

        <!-- Tabla de Usuarios Registrados -->
        <div class="mt-5">
            <div class="title-h2">
                <h2>USERS</h2>
                <div class="charactor"></div>
            </div>
            <table class="table table-success table-bordered border-secondary">
                <thead class="table-light">
                    <tr class="table-dark">
                        <th style="color: #ffb200;" scope="col">Nombre</th>
                        <th style="color: #ffb200;" scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Bucle para cada usuario -->
                    <tr v-for="user in usuarios" :key="user.nombre">
                        <td class="table-warning">{{ user.nombre }}</td>
                        <td class="table-warning" v-if="user.correo">{{ user.correo }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const nombre = ref("");
const email = ref("");
const contraseña = ref("");
const usuarios = ref([]);

// Obtener información de usuarios desde Firestore
const obtenerInformacionUsuarios = async () => {
    const db = getFirestore();
    const usuariosRef = collection(db, 'usuarios');
    const usuariosSnapshot = await getDocs(usuariosRef);

    // Arreglo de usuarios, se guarda la información
    const usuariosArray = [];
    usuariosSnapshot.forEach((doc) => {
        usuariosArray.push(doc.data());
    });

    // Actualizar la variable 'usuarios' con la información recuperada
    usuarios.value = usuariosArray;
};

// En el ciclo de vida 'onMounted', llamar a 'obtenerInformacionUsuarios' para cargar la información al montar el componente
onMounted(() => {
    obtenerInformacionUsuarios();
});

// Función para registrar nuevos usuarios
const register = async () => {
    try {
        const db = getFirestore();
        const usuariosRef = collection(db, 'usuarios');

        // Añadir documento a la colección 'usuarios' en Firestore
        await addDoc(usuariosRef, {
            nombre: nombre.value,
            correo: email.value,
            contraseña: contraseña.value,
            // También puedes almacenar otros campos si es necesario
        });

        console.log("Registro exitoso!");
        obtenerInformacionUsuarios(); // Actualizar la lista de usuarios después del registro
    } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error en el registro");
    }
};
</script>


<style scoped>

table {
    margin-top: 20px;
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
    background-image: url(https://en.dragon-ball-official.com/assets/img/ranking/h2_charactor.png);
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
    background: url(https://en.dragon-ball-official.com/assets/img/ranking/h2_charactor.png) no-repeat 0 0;
    background-size: 252px auto;
    z-index: 1;
}
.title-h2 .charactor {
    bottom: -36px;
    width: 334px;
    height: 354px;
    margin-left: 210px;
    background-image: url(https://en.dragon-ball-official.com/assets/img/ranking/h2_charactor.png);
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
</style>
  