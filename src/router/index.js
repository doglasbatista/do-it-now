import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';

import SignUp from '@/components/Registration/SignUp';
import SignIn from '@/components/Registration/SignIn';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});
