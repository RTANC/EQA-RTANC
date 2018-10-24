<template>
<v-container grid-list-md fluid fill-height>
    <v-layout row wrap justify-center>
       <v-flex xs12 sm8 md4>
            <v-card class="elevation-3">
                <v-toolbar color="deep-purple" dark>
                    <v-toolbar-title>ลงชื่อเข้าใช้</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <google-signin-button @sign="onSigned" client_id="796380492881-pd70tauio7jfopaqguhmvr97dfn318sr.apps.googleusercontent.com"></google-signin-button>
                </v-card-text>
        </v-card>
       </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import GoogleSigninButton from './GoogleSigninButton'
export default {
    name: 'SignIn',
    components: {GoogleSigninButton},
    methods: {
        onSigned (user) {
            const id_token = user.getAuthResponse().id_token
            console.log(id_token)
            this.$store.dispatch('setUser', id_token)
            this.$router.push('Home')
        }
    }
}
</script>
