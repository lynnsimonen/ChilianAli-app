import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/alis/home'
  },
  {
    path: '/alis/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/alis/welcome'
      },
      {
        path: 'home',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'ordermenu',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'eventsandmore',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
