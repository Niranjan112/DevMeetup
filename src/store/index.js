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
        date: new Date(),
        location: 'Mumbai',
        description: 'boom boom'
      },
      {
        imageUrl: 'https://cdn.britannica.com/s:700x450/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg',
        id: 'qwer45',
        title: 'Meetup in Delhi',
        date: new Date(),
        location: 'Delhi',
        description: 'boom boom'
      }
    ],
    user: {
      id: 'agugud122',
      registeredMeetups: ['qwer45']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'ass1'
      }

      commit('createMeetup', meetup)
    }
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
