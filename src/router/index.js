import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Company from '@/components/Company';

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
            name: 'HelloWorld',
            component: HelloWorld,
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