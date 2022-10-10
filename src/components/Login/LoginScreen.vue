<template>
    <h1> Login Screen </h1>
    <SmallButton v-bind:buttonName='LOGIN'>LOGIN</SmallButton>
</template>

<script>
import SmallButton from '../PageButton/SmallButton.vue'

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            buttonName: 'Login!'
        };
    },

    components: {
        SmallButton
    }
};

</script>