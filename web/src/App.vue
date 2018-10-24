<template>
  <v-app>
    <v-toolbar app color="grey darken-4" dark>
      <v-toolbar-side-icon>
        <v-img src="https://upload.wikimedia.org/wikipedia/th/4/46/Logo_rtanc.png"></v-img>
      </v-toolbar-side-icon>
      <v-toolbar-title>EQA-RTANC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="error" flat v-if="$store.getters.user" @click="onSignOut">Sign Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" :height="h">
      <router-view/>
      </v-parallax>
    </v-content>
    <v-footer app>
      <span>&copy; &nbsp;วิทยาลัยพยาบาลกองทัพบก</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      h: window.innerHeight
    }
  },
  methods: {
    onSignOut () {
      var auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(x => {
        this.$router.push('/')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
