import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Company from '@/components/Company';
import Products from '@/components/Products';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/Home',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/Products',
            name: 'Products',
            component: Products,
        },
        {
            path: '/Company',
            name: 'Company',
            component: Company,
        },
        {
            path: '/Contact us',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/Recruit',
            name: 'Company',
            component: Company,
        },
    ],
});