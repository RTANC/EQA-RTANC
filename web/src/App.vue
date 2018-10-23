<template>
  <v-app>
    <v-toolbar app>
      <v-btn color="error" @click="onSignOut">Sign Out</v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onSignOut () {
      var auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {
      console.log('User signed out.')
    })
    }
  }
}
</script>
