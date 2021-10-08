import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Estabelecimentos from './components/Estabelecimentos.vue'
import Produtos from './components/Produtos.vue'
import Pedido from './components/Pedido.vue'
import PedidoRealizado from './components/PedidoRealizado.vue'
import VerPedidos from './components/VerPedidos.vue'
import VerProdutos from './components/VerProdutos.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Estabelecimentos
    },
    {
      path: '/admin/:id',
      component: Admin,
    },
    {
      path: '/estabelecimento/:id',
      component: Produtos
    },
    {
      path: '/pedido/:estabelecimento/:produto',
      component: Pedido
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/pedidoRealizado',
      component: PedidoRealizado
    },
    {
      path: '/verPedidos/:id',
      component: VerPedidos
    },
    {
      path: '/verProdutos/:id',
      component: VerProdutos
    }  
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
