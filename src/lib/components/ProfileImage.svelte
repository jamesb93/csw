<script>
    export let src = '';
    export let alt = '';
</script>

<img src={src} alt={alt}>

<style>
    img {
        filter: grayscale();
        -webkit-filter: grayscale();
        max-width: 100%;
        margin: 0 auto;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
</style>