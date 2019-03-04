import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AffClient from './views/affclient.vue'
import AffProjet from './views/affprojet.vue'
import AffSalarie from './views/affsalarie.vue'
import CreeClient from './views/creeclient.vue'
import CreeProjet from './views/creeprojet.vue'
import CreeSalarie from './views/creesalarie.vue'
import ModifClient from './views/modifclient.vue'
import ModifProjet from './views/modifprojet.vue'
import ModifSalarie from './views/modifsalarie.vue'
import SupprClient from './views/supprclient.vue'
import SupprProjet from './views/supprprojet.vue'
import SupprSalarie from './views/supprsalarie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/affclient',
      name: 'affclient',
      component: AffClient
    },
    {
      path: '/affprojet',
      name: 'affprojet',
      component: AffProjet
    },
    {
      path: '/affsalarie',
      name: 'affsalarie',
      component: AffSalarie
    },
    {
      path: '/creeclient',
      name: 'creeclient',
      component: CreeClient
    },
    {
      path: '/creeprojet',
      name: 'creeprojet',
      component: CreeProjet
    },
    {
      path: '/creesalarie',
      name: 'creesalarie',
      component: CreeSalarie
    },
    {
      path: '/modifclient',
      name: 'modifclient',
      component: ModifClient
    },
    {
      path: '/modifprojet',
      name: 'modifprojet',
      component: ModifProjet
    },
    {
      path: '/modifsalarie',
      name: 'modifsalarie',
      component: ModifSalarie
    },
    {
      path: '/supprclient',
      name: 'supprclient',
      component: SupprClient
    },
    {
      path: '/supprprojet',
      name: 'supprprojet',
      component: SupprProjet
    },
    {
      path: '/supprsalarie',
      name: 'supprsalarie',
      component: SupprSalarie
    }

  ]
})
