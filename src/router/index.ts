import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path:'/',
        redirect: '/Money'
    },
    {
        path: '/Money',
        component: Money
    },
    {
        path: '/Labels',
        component: Labels
    },
    {
        path:'/Statistics',
        component:Statistics
    },
    {
        path:'/Labels/edit/:id',
        component:EditLabel
    },
    {
        path:'*',
        component:NotFound
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
];

const router = new VueRouter({
    routes
});

export default router;
