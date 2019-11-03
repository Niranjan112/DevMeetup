import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Meetups from '../views/Meetup/Meetups.vue'
import CreateMeetup from '../views/Meetup/CreateMeetup.vue'
import Profile from '../views/User/Profile.vue'
import Signin from '../views/User/Signin.vue'
import Signup from '../views/User/Signup.vue'
import Meetup from '../views/Meetup/Meetup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },

  {
    path: '/meetup/new',
    name: 'CreateMetup',
    component: CreateMeetup
  },

  {
    path: '/meetups/:id',
    name: 'Meetup',
    component: Meetup
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
