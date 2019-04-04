<template>    
    <li>
        <h2 v-text="artist.name"></h2>
        <a :href="artist.url" target="_blank"></a>
        <img :src="artist.image[2]['#text']">
    </li>
</template>

<script>
export default {
    name: 'artist',
    props: ['artist']
}
</script>

<style>
</style>
