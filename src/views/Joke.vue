<template>
    <div>
        <h1>Joke Page</h1>
        <h4 v-for="(joke, idx) in allJoke" :key="idx">
            <span>{{idx + 1}}</span>
            {{joke}}
        </h4>
    </div>
</template>

<script>
export default {
    computed: {
        allJoke() {
            return this.$store.getters.showAllCurrentJoke
        }
    }
}
</script>

<style scoped>
    h4 {
        color: rgb(156, 84, 223);
        font-size: 1.5rem;
    }
</style>