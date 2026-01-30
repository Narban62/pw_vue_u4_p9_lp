<template>
    <div>
        <h3>Actualizar Estudiante (PUT)</h3>

        <input v-model="id" placeholder="ID" />

        <input v-model="estudiante.nombre" placeholder="Nombre" />
        <input v-model="estudiante.apellido" placeholder="Apellido" />
        <input type="date" v-model="estudiante.fechaNacimiento" />
        <input v-model="estudiante.genero" placeholder="Género" />
        <input v-model="estudiante.provincia" placeholder="Provincia" />

        <button @click="actualizar">Actualizar</button>
    </div>
</template>

<script>
import { actualizarPutFachada } from "@/clients/MatriculaClient";

export default {
    data() {
        return {
            id: "",
            estudiante: {
                nombre: "",
                apellido: "",
                fechaNacimiento: "",
                genero: "",
                provincia: ""
            }
        };
    },
    methods: {
        async actualizar() {
            // 🔥 validación FRONT
            if (
                !this.id ||
                !this.estudiante.nombre ||
                !this.estudiante.apellido ||
                !this.estudiante.fechaNacimiento ||
                !this.estudiante.genero ||
                !this.estudiante.provincia
            ) {
                alert("Todos los campos son obligatorios");
                return;
            }

            const body = {
                nombre: this.estudiante.nombre,
                apellido: this.estudiante.apellido,
                fechaNacimiento: this.estudiante.fechaNacimiento, // yyyy-MM-dd
                genero: this.estudiante.genero,
                provincia: this.estudiante.provincia
            };

            try {
                await actualizarPutFachada(this.id, body);
                alert("Estudiante actualizado correctamente");
            } catch (error) {
                console.error("ERROR PUT:", error.response?.data || error);
                alert("Error 400: datos inválidos");
            }
        }
    }
};
</script>