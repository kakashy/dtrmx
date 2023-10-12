<script>
	let y_offset = '30px';
	const time = 1;
</script>

<main>
	<h1 style={`--y-offset: ${y_offset}; --time: ${time}s;`}>DanceTime</h1>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
	}

	h1 {
		color: var(--color-gray-100);
		font-size: 60px;
		font-weight: 900;
		text-transform: uppercase;
		text-align: center;
		cursor: default;
		text-shadow: 0px 0 0px var(--color-gray-100), 0px 0 0px var(--color-gray-100),
			0px 0 0px var(--color-gray-100);
		animation: var(--time) cubic-bezier(0.88, 0.19, 0.2, 0.84) infinite shadow-anim;
		--y-offset: 30px;
		--y-offset2: calc(var(--y-offset) * 2);
		--y-offset3: calc(var(--y-offset) * 3);
	}

	@keyframes shadow-anim {
		5% {
			text-shadow: 0px 0 0px var(--color-gray-100), 0px 0 0px var(--color-gray-100),
				0px 0 0px var(--color-gray-100);
		}
		25% {
			text-shadow: 0px var(--y-offset) 0px #00e0ff, 0px var(--y-offset2) 0px #8f00ff,
				0px var(--y-offset3) 0px #ff008a;
		}
		75% {
			text-shadow: 0px calc(var(--y-offset) * -1) 0px #00e0ff,
				0px calc(var(--y-offset2) * -1) 0px #8f00ff, 0px calc(var(--y-offset3) * -1) 0px #ff008a;
		}
		95% {
			text-shadow: 0px 0 0px var(--color-gray-100), 0px 0 0px var(--color-gray-100),
				0px 0 0px var(--color-gray-100);
		}
	}
</style>
