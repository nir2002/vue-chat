import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login';
import {
  FirebaseAuth
} from '@/library/Database'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    component: Login
  }]
})


router.beforeEach((to, _from, next) => {
  let auth = FirebaseAuth;

  // redirect not authenticated users to login screen
  if (auth.currentUser === null && to.path !== '/') {
    next({
      path: '/'
    })
  } else {
    next()
  }
});

export default router;
