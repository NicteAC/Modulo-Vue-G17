<template>
  <ul>
    <li v-for="(paciente, $index) in pacientesConNombreCompleto" :key="$index">
      {{ paciente.name }} | {{ paciente.lastName }} | {{ paciente.fullName }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "DestroyExample",
  data: () => ({
    algo: "algo",
    pacientes: [
      { name: "Loreto", lastName: "Bustos", usaAudifonos: true },
      { name: "Carolina", lastName: "Aliaga", usaAudifonos: false },
    ],
  }),
  methods: {
    pacientesConNombreCompletoPeroComoMetodo() {
      return this.pacientes.map((paciente) => {
        return {
          ...paciente,
          fullName: `${paciente.name} ${paciente.lastName}`,
        };
      });
    },
  },
  computed: {
    pacientesQueSoloUsanAudifonos() {
      return this.pacientes.filter((paciente) => paciente.usaAudifonos);
    },
    pacientesConNombreCompleto() {
      return this.pacientes.map((paciente) => {
        return {
          ...paciente,
          fullName: `${paciente.name} ${paciente.lastName}`,
        };
      });
    },
  },
};
</script>

<style></style>