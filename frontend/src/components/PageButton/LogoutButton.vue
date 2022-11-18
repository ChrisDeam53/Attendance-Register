<template>
    <SmallButton @click="logout" role="link" buttonName="Logout"></SmallButton>
</template>

<style>
</style>

<script>

    import SmallButton from './SmallButton.vue';

    export default {
        data() {
            return {
            }
        },
        name: "LogoutButton",
        components: {
            SmallButton
        },
        methods: {
            logout() {
                window.user = null
                this.$router.push({name: 'Home'})
            }
        }
    }
</script>