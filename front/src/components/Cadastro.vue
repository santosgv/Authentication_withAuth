<template>
  <div>
    <h2>Cadastro</h2>
    <input type="text" v-model="username" placeholder="Username">
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password1" placeholder="Senha">
    <input type="password" v-model="password2" placeholder="Confirmar Senha">
    <button @click="cadastrar">Cadastrar</button>
  </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email:'',
      password1: '',
      password2: '',
    };
  },
  methods: {
    async cadastrar() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2
        });

        // Verifique se o token JWT foi retornado no corpo da resposta
        if (response.data.access) {
          // Guarde o token JWT em localStorage ou em outro local seguro
          localStorage.setItem('token', response.data.access);

          // Redirecione para a página do painel após o login
          this.$router.push('/home');
        } else {
          // Caso o token não seja retornado, mostre uma mensagem de erro
          alert('Dados digitado incorretamente.');
        }
      } catch (error) {
        // Caso ocorra algum erro na requisição, mostre uma mensagem de erro
        alert('Erro ao realizar Cadastro. Tente novamente mais tarde.');
      }
    },
  },
};
</script>