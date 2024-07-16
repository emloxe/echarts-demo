import Vue from 'vue';
import VueRouter from 'vue-router';
import Chart from '../views/Chart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chart',
    component: Chart,
    children: [
      {
        path: 'bar',
        component: () => import('@/views/BarView.vue')
      },
      {
        path: 'pie',
        component: () => import('@/views/PieView.vue')
      },
      {
        path: 'line',
        component: () => import('@/views/LineView.vue')
      },
      {
        path: 'map',
        component: () => import('@/views/MapView.vue')
      },
      {
        path: 'other',
        component: () => import('@/views/OtherView.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
