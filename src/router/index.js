import { createRouter, createWebHistory } from 'vue-router'
import ServicesItem from '../app/components/ServicesItem.vue'
import AboutUs from '../app/components/AboutUs.vue'
import TaxiFleet from '../app/components/TaxiFleet.vue'
import HomeUs from '../app/components/HomeUs.vue'
<<<<<<< HEAD
=======
import NotFound from '../app/components/NotFound.vue';
>>>>>>> f1e47cddf9645a34b70e1bd49c84315721e39984

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
<<<<<<< HEAD
=======
   },
   {
     path: "/:catchAll(.*)",
     name: "NotFound",
     component: NotFound
>>>>>>> f1e47cddf9645a34b70e1bd49c84315721e39984
   }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
