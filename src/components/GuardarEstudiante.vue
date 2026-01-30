<template>
  <div>
    <input v-model="form.nombre" placeholder="Nombre" />
    <input v-model="form.apellido" placeholder="Apellido" />
    <input type="date" v-model="form.fechaNacimiento" />
    <input v-model="form.genero" placeholder="Genero" />
    <input v-model="form.provincia" placeholder="Provincia" />

    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
        provincia: ""
      }
    };
  },
  methods: {
    async guardar() {
      const body = {
        ...this.form,
        fechaNacimiento: this.form.fechaNacimiento + "T00:00:00"
      };

      console.log("ENVIANDO:", body);
      await guardarFachada(body);
    }
  }
};
</script>