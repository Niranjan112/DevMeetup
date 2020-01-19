import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import DateFilter from './filter/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/EditMeetupTimeDialog.vue'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('edit-meetup', EditMeetupDetailsDialog)
Vue.component('edit-meetup-date', EditMeetupDateDialog)
Vue.component('edit-meetup-time', EditMeetupTimeDialog)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBejumyEETORIkaKL6JNGUmBNtO6mGw-yU',
      authDomain: 'devmeetup-f132f.firebaseapp.com',
      databaseURL: 'https://devmeetup-f132f.firebaseio.com',
      projectId: 'devmeetup-f132f',
      storageBucket: 'devmeetup-f132f.appspot.com',
      messagingSenderId: '358639659596',
      appId: '1:358639659596:web:0f67d4cfc3e017dd35a2e9'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
