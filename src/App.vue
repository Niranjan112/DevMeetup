<template>
  <v-app>
    <v-navigation-drawer app v-model="sideNav" temporary>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark class="blue-grey darken-2">
      <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title>DevMeetup</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>{{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
      { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
      { icon: 'person', title: 'Profile', link: '/profile' },
      { icon: 'face', title: 'Sign up', link: '/signup' },
      { icon: 'lock_open', title: 'Sign in', link: '/signin' }
    ]
  })
}
</script>
