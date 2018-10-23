<template>
  <v-app>
    <v-toolbar app color="grey darken-4" dark>
      <v-toolbar-side-icon>
        <v-img src="https://upload.wikimedia.org/wikipedia/th/4/46/Logo_rtanc.png"></v-img>
      </v-toolbar-side-icon>
      <v-toolbar-title>EQA-RTANC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="error" flat>Sign Out</v-btn>
      </v-toolbar-items>
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
