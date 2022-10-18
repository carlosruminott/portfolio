<script>
    /** @type {import('./$types').PageData} */  
    export let data
  </script>

<svelte:head>
	<title>Home - Carlos Ruminott</title>
	<meta name="description" content="Carlos Ruminott, diseñador y desarrollador web full stack" />
</svelte:head>

<p>{data.title}</p>

<div class="info">
    <h1 class="text-3xl font-bold">Carlos Ruminott</h1>
    <p>Diseñador y desarrollador web full stack</p>
    <a href="/about" class="underline">about</a>
</div>

<div class="info">
    <h1>Carlos Ruminott</h1>
    <p>Diseñador y desarrollador web full stack</p>
    <a href="/about" class="underline">about</a>
</div>