import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';
import Logout from '../components/Logout.vue';
import Cadastro from '../components/Cadastro.vue';
import Profile from '../components/Profile.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'home',
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      // boqueio apenas uma rota caso nao logado
      beforeEnter: function (to, from, next) {
        const token = localStorage.getItem('user-token')

        if (!token) {
          next('/login')
        } else {
          next()
        }
      },
      component: Dashboard
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: function (to, from, next) {
        const token = localStorage.getItem('user-token')

        if (!token) {
          next('/login')
        } else {
          next()
        }
      },
      component: Logout
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/profile',
      name: 'profile',
      beforeEnter: function (to, from, next) {
        const token = localStorage.getItem('user-token')

        if (!token) {
          next('/login')
        } else {
          next()
        }
      },
      component: Profile
    }
    
  ]
})

// bloqueio todas as rodas caso nao autenticado
//router.beforeEach((to, from, next) => {
//  const token = localStorage.getItem('user-token')

//  if (!token) {    
//    next('/login')
//    return;
//  }

//  next();
//});

export default router
