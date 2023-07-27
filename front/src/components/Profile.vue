<template>
    <div>
      <div class="text-center">
        <h2>Perfil</h2>
     <span> Nome: {{username}}</span>
     <br>
     <span> ID: {{id}}</span>
    </div>
     <br>
     <span> token: {{token}}</span>
     <br>
     <span> refres: {{refresh}}</span>
    
    </div>
  </template>
  
  <script>
import {  ref } from 'vue';

export default {
  data() {
    return {
      username: ref(''),
      id: ref(''),
      token: ref(''),
      refresh : ref('',)
    };
  },
  mounted() {
    if (localStorage.getItem('user-token') != null ){
      this.username = localStorage.getItem('username')
      this.id = localStorage.getItem('pk_user')
      this.token = localStorage.getItem('user-token')
      this.refresh = localStorage.getItem('refresh')
    }
  }
}
  </script>