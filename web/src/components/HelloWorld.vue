<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 justify-center>
        <div id="google-signin-btn" class="g-signin2"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    onSignIn (user) {
      const profile = user.getBasicProfile()
      const usrname = profile.getName()
      const email = profile.getEmail()
      console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
      this.$router.push({path: 'Profile', query: {name: usrname, email: email}})
    }
  },
  mounted () {
    gapi.signin2.render('google-signin-btn', { // this is the button "id"
      onsuccess: this.onSignIn // note, no "()" here
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
