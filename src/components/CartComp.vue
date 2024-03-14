<template>
    <div id="app">
        <div v-for="product in productos" :key="product.id" class="card" style="width: 18rem;">
            <img v-if="product.img" :src="product.img" alt="Imagen del Producto" class="card-img-top" />
            <div class="card-body">
                <h1 class="card-title">{{ product.nombre }}</h1>
                <p class="card-text">{{ product.caracteristicas }}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">$ {{ product.precio }}</li>
                <li class="list-group-item">Añadidos: {{ product.stock }}</li>
            </ul>
        </div>


        <!-- Card para mostrar el resultado -->
        <div class="card" v-if="totalFactura !== null">
            <div class="card-body">
                <h1 class="card-title">El total de la factura es:</h1>
                <p class="card-text">$ {{ totalFactura.toFixed(2) }}</p>
            </div>
        </div>
        
    </div>
    <button class="btn btn-outline-warning" @click="handleClick">Calcular Total</button>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
    name: 'App',
    setup() {
        const productos = ref([]);
        const totalFactura = ref(null);

        const obtenerInformacionProductos = async () => {
            const db = getFirestore();
            const productosRef = collection(db, '/productos');
            const productosSnapshot = await getDocs(productosRef);

            const productosArray = [];
            productosSnapshot.forEach((doc) => {
                productosArray.push(doc.data());
            });

            productos.value = productosArray;
        };

        const handleClick = () => {
            if (productos.value.length > 0) {
                totalFactura.value = productos.value.reduce(
                    (total, producto) => total + producto.stock * producto.precio,
                    0
                );
            }
        };

        onMounted(() => {
            obtenerInformacionProductos();
        });

        return {
            productos,
            totalFactura,
            handleClick,
        };
    },
};
</script>
  
<style scoped>
#app {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 18rem;
    margin: 10px;
}
</style>
  