<template>
  <div>
    <h2>Login</h2>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
          username: this.username,
          password: this.password,
        });

        // Verifique se o token JWT foi retornado no corpo da resposta
        if (response.data.access) {
          // Guarde o token JWT em localStorage ou em outro local seguro
          localStorage.setItem('token', response.data.access);

          // Redirecione para a página do painel após o login
          this.$router.push('/dashboard');
        } else {
          // Caso o token não seja retornado, mostre uma mensagem de erro
          alert('Credenciais inválidas. Tente novamente.');
        }
      } catch (error) {
        // Caso ocorra algum erro na requisição, mostre uma mensagem de erro
        alert('Erro ao realizar login. Tente novamente mais tarde.');
      }
    },
  },
};
</script>