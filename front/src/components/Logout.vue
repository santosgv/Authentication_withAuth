<template>
  <div>
    <h2>Logout</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Remova o token JWT do localStorage
      localStorage.removeItem('token');

      // Redirecione o usuário para a página de login ou página inicial
      this.$router.push('/login'); // ou this.$router.push('/');
    },
  },
};
</script>
