<script>
    /** @type {import('./$types').PageData} */  
    export let data;
</script>

<section class="container" on:scroll={ () => data.sayScroll() }>
    <p>{data.text}</p>
    <slot></slot>
</section>

<style>
    .container {
        height: 100vh;
        overflow-y: scroll;
    }
</style>
