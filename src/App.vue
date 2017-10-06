<template>
<div id="app">
    <router-view id="app-header" name="header" />
    <div id="app-body">
        <transition name="fade">
            <router-view name="content" />
        </transition>
    </div>
    <router-view id="app-footer" name="footer" />
</div>
</template>

<style lang="scss">
    @import './app.scss';
</style>

<script>
export default {
    name: 'App',
    metaInfo: {
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - Pixelstairs` : 'Pixelstairs :: Connect Your Creativity With the World';
        },
        noscript: [
            { innerHTML: 'This website requires JavaScript.' }
        ],
        meta: [{
            charset: 'utf-8'
        }, {
            'http-equiv': 'Content-Type', content: 'text/html', charset: 'utf-8'
        }, {
            'http-equiv': 'Pragma', content: 'no-cache'
        }, {
            name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui, shrink-to-fit=no'
        }, {
            name: 'fragment', content: '!'
        }, {
            vmid: 'title', name: 'title', content: 'Pixelstairs :: Connect Your Creativity With the World'
        }, {
            vmid: 'description', name: 'description', content: 'Display your artwork in online exhibition and meet it in real life!'
        }, {
            name: 'author', content: 'Evan Moon'
        }, {
            name: 'subject', content: 'Lubycon'
        }, {
            name: 'publisher', content: 'Lubycon'
        }, {
            name: 'developed', content: 'Evan Moon'
        }, {
            name: 'designed', content: 'Simon Noh, Christine Yoon'
        }, {
            name: 'robots', content: 'index,follow'
        }, {
            name: 'copyright', content: 'copyrights 2016 Lubycon'
        }, {
            name: 'keywords', content: 'art,artist,creator,design,font,vector,design,community,designer,illustration,wallpaper'
        }, {
            name: 'mobile-web-app-capable', content: 'yes'
        }, {
            name: 'theme-color', content: '#dddddd'
        }, {
            property: 'og:type', content: 'website'
        }, {
            vmid: 'og:title', property: 'og:title', content: 'Pixelstairs :: Connect Your Creativity With the World'
        }, {
            vmid: 'og:description', property: 'og:description', content: 'Display your artwork in online exhibition and meet it in real life!'
        }, {
            vmid: 'og:image', property: 'og:image', content: 'https://s3.ap-northeast-2.amazonaws.com/pixelstairs/assets/logo/ogImage.jpg'
        }, {
            vmid: 'og:url', property: 'og:url', content: 'https://www.pixelstairs.com'
        }],
        script: [{
            innerHTML: `{
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "Pixelstairs",
                "url": "https://pixelstairs.com",
                "sameAs": [
                    "https://www.pixelstairs.com"
                ],
                "brand": "Lubycon",
                "description": "Connect your creativity with the World!",
                "logo": "https://s3.ap-northeast-2.amazonaws.com/pixelstairs/assets/logo/vp_b.png",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+8210-4755-6185",
                    "email": "contact@pixelstairs.com",
                    "contactType": "Customer service"
                }
            }`,
            type: 'application/ld+json'
        }]
    }
};
</script>
