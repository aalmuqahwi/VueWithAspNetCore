<template>
    <div>
        <p>Current count: <strong>{{ currentCount }}</strong></p>
        <button v-on:click="incrementCounter" class="btn btn-primary">Increment</button>
    </div>
</template>
<script>
    export default {
        name: 'Counter',
        data: function () {
            return {
                currentCount: 0
            }
        },
        methods: {
            incrementCounter: function () {
                this.currentCount += 1;
            }
        }
    };
</script>