<script>
	import LandingContent from '$lib/LandingContent.svelte';
	import NotLoggedInLanding from '$lib/NotLoggedInLanding.svelte';
	import LoadingScreen from '$lib/LoadingScreen.svelte';
	import { onMount } from 'svelte';
	import { keyPress, keyDown, message } from '$lib/stores';

	import { getUserInfo, USER } from '$lib/Auth';

	const handleKeyPress = (e) => {
		keyPress.set(e);
	};

	const handleKeyDown = (e) => {
		keyDown.set(e);
	};

	let loaded = false;

	// Try to load user info before displaying anything
	onMount(() => {
		getUserInfo().then(() => {
			loaded = true;
		});
	});

	const handleMessage = (e) => {
		$message = e;
	};
</script>

<svelte:window on:keypress={handleKeyPress} on:keydown={handleKeyDown} on:message={handleMessage} />

<!-- {#if loaded} -->
<main>
	<!-- {#if $USER.loggedIn} -->
	<LandingContent />
	<!-- {:else} -->
	<!-- <NotLoggedInLanding /> -->

	<!-- {/if} -->
</main>

<!-- {:else} -->
<!-- <LoadingScreen /> -->
<!-- {/if} -->

<style>
	main {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>
