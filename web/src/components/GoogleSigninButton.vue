<template>
    <div ref="signinBtn" class="g-signin2" data-theme="dark" data-longtitle="true"></div>
</template>

<script>
export default {
    name: 'GoogleSigninButton',
    props: {
        client_id: {
            type: String,
            required: true
        }
    },
    mounted () {
        gapi.load('auth2', () => {
            const auth2 = gapi.auth2.init({
                client_id: this.client_id
            })
            auth2.attachClickHandler(this.$refs.signinBtn, {}, user => {
                this.$emit('sign', user)
            }, error => {
                console.log(error)
            })
        })
    }    
}
</script>

