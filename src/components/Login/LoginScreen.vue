<template>
    <h1> Login Screen </h1>
    <SmallButton buttonName="Login"></SmallButton>
</template>

<script>
import SmallButton from '../PageButton/SmallButton.vue'

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        };
    },

    name: "LoginScreen",
    components: {
        SmallButton
    }
};

</script>