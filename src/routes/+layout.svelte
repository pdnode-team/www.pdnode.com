<script lang="ts">
	import CheckPocketbaseStatus from '$lib/components/CheckPocketbaseStatus.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Pdnode</title>
</svelte:head>
<div class="flex flex-col min-h-screen min-w-full">
	<Header />

	<main class="grow">
		{@render children()}
	</main>

	<CheckPocketbaseStatus />

	<Footer />
</div>
