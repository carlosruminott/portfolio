<script>
    /** @type {import('./$types').PageData} */  
    export let data;
    let y = 0
    let limit = 0
    let result = 1
    $:result = (y <= limit) ? (1 - y/limit) : 0
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={limit} />

<div class="color" style="--scrollY: {result}"></div>

<section class="container" on:scroll={ () => data.sayScroll() }>
    <p>{data.text}</p>
    <slot></slot>
</section>

<style>
    :root {
        --scrollY: 1
    }
    .color {
        height: 100px;
        width: 100px;
        background-color: #000;
        opacity: var(--scrollY);
        position: fixed;
    }
    .container {
        height: 200vh;
        overflow-y: scroll;
    }
</style>
