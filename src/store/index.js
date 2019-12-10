import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://cdn.britannica.com/s:700x450/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
        id: 'qwer12',
        title: 'Meetup in Nariman point',
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://cdn.britannica.com/s:700x450/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg',
        id: 'qwer45',
        title: 'Meetup in Delhi',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'agugud122',
      registeredMeetups: ['qwer45']
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  },
  modules: {
  }
})
