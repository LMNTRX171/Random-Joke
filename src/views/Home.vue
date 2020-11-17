<template>
    <div>
        <h1>Home Page</h1>
        <h2>{{showJoke}}</h2>

        <button @click="addJoke">Add Joke</button>
    </div>
</template>

<script>
export default {
    computed: {
        showJoke() {
            return this.$store.getters.showCurrentJoke
        }
    },
    methods: {
        addJoke() {
            this.$store.dispatch('getJoke')
        }
    }
}
</script>