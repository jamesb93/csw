<script>
	import '../app.scss';
</script>

<div class="container">
    <div class="content">
        <main>
            <slot />
        </main>
    </div>
</div>
    
<style lang='scss'>
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .content {
        display: grid;
        justify-content: center;
        margin: 1em;
    }

    main {
        grid-area: main;

    }
</style>