<script>
	import '../app.scss';
</script>

<main class="main">
	<slot />
</main>
    
<style lang="scss">

	.main {
		display: grid;
		margin: 0 auto;
	}

	.main {
		grid-area: main;
		min-width: $min-text-width;
		max-width: $max-text-width;
	}

	.navigation {
		grid-area: navigation;
		width: 20ch;
		height: max-content;
	}

	.empty-right {
		grid-area: empty-right;
		width: 20ch;
	}

	/* Media Queries */
	@media (min-width: $breakpoint) {
		.content {
			grid-template-columns: auto min($max-text-width, 100%) auto;
			grid-template-areas: 'navigation main empty-right';
		}
	}

	@media (max-width: $breakpoint) {
		.content {
			grid-template-rows: auto auto;
			grid-template-areas:
				'navigation'
				'main';
		}

		.empty-right {
			display: none;
		}
	}
</style>