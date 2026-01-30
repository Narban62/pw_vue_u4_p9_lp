<template>
  <div>
    <h3>Borrar Estudiante</h3>

    <input v-model="id" placeholder="Ingrese ID a borrar" />
    <button @click="borrar">Borrar</button>
  </div>
</template>

<script>
import { borrarFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    async borrar() {
      if (!this.id) {
        alert("Ingrese un ID");
        return;
      }

      const confirmar = confirm("¿Seguro que desea borrar este estudiante?");
      if (!confirmar) return;

      await borrarFachada(this.id);
      alert("Estudiante eliminado");
      this.id = "";
    }
  }
};
</script>