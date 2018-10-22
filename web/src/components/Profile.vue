<template>
    <table>
        <tr>
            <td>Name:</td>
            <td>{{name}}</td>
        </tr>
        <tr>
            <td>E-mail:</td>
            <td>{{email}}</td>
        </tr>
        <tr>
            <td></td>
            <td><v-btn color="error" @click="signOut">Sign Out</v-btn></td>
        </tr>
    </table>
    
</template>

<script>
export default {
    name: 'Profile',
    data () {
        return {
            name: null,
            email: null
        }
    },
    methods: {
        signOut () {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    }
    },
    mounted () {
        this.name = this.$route.query.name
        this.email = this.$route.query.email
    }
}
</script>

