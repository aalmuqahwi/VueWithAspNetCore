<template>
    <div class="counter container">
        <h1>Counter</h1>

        <p>This is a simple example of a Vue component.</p>

        <Counter />
    </div>
</template>
<script>
    import Counter from '@/components/Counter.vue';

    export default {
        name: 'counter',
        components: {
            Counter
        }
    };
</script>