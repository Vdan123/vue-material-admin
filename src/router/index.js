import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
  {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: '',
    component: () => import('@/layouts/main/Main.vue'),
    children: [
      {
        path: '/',
        redirect: '/dashboard/analytics'
      },
      {
        path: '/dashboard/analytics',
        name: 'Analytics',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRoutes
})

export default router
