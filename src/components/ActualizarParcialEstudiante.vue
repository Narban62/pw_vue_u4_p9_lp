<template>
  <div>
    <h3>Actualizar Parcial (PATCH)</h3>

    <input v-model="id" placeholder="ID" />
    <input v-model="campo" placeholder="Campo (ej: nombre)" />
    <input v-model="valor" placeholder="Nuevo valor" />

    <button @click="actualizarParcial">Actualizar Parcial</button>
  </div>
</template>

<script>
import { actualizarParcialFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      id: "",
      campo: "",
      valor: ""
    };
  },
  methods: {
    async actualizarParcial() {
      const body = {
        [this.campo]: this.valor
      };
      await actualizarParcialFachada(this.id, body);
      alert("Estudiante actualizado parcialmente (PATCH)");
    }
  }
};
</script>