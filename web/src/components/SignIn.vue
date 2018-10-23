<template>
<v-container grid-list-md fluid fill-height>
    <v-layout row wrap justify-center>
       <v-flex xs12 sm4 md4>
            <v-card>
            <v-card-title class="headline">ลงชื่อเข้าใช้</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <signin-button @sign="onSigned" client_id="796380492881-pd70tauio7jfopaqguhmvr97dfn318sr.apps.googleusercontent.com"></signin-button>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
       </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import SigninButton from './SigninButton'
export default {
    name: 'SignIn',
    components: {SigninButton},
    methods: {
        onSigned (user) {
            const profile = user.getBasicProfile()
            console.log('Welcome: ' + profile.getName())
        }
    }
}
</script>
