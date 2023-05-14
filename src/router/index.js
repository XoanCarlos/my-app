import { createRouter, createWebHistory } from 'vue-router'
import ServicesItem from '../app/components/ServicesItem.vue'
import AboutUs from '../app/components/AboutUs.vue'
import TaxiFleet from '../app/components/TaxiFleet.vue'
import HomeUs from '../app/components/HomeUs.vue'
import NotFound from '../app/components/NotFound.vue';

const routes = [{
    path: '/servicesitem',
    name: 'ServicesItem',
    component: ServicesItem
   },
   {
    path: '/taxifleet',
    name: 'TaxiFleet',
    component: TaxiFleet
   },
   {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
   },
   {
    path: '/',
    name: 'HomeUs',
    component: HomeUs
   },
   {
     path: "/:catchAll(.*)",
     name: "NotFound",
     component: NotFound
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
