<template>
<div>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="content in contents">
                <img :src="content.image.file" :alt="`featured-content-${content.id}`">
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>

<script>
import APIService from 'src/services/API.service';
import ImageService from 'src/services/Image.service';

export default {
    name: 'HomeJumbo',
    data () {
        return {
            contents: [],
            swiperOption: {
                autoplay: 3000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination'
            }
        };
    },
    methods: {
        fetchFeaturedContents () {
            return APIService.resource('contents.list').get({
                pageIndex: 1,
                pageSize: 3,
                sort: 'featured:desc'
            });
        },
        reInit () {
            this.$refs.slick.reSlick();
        }
    },
    mounted () {
        this.fetchFeaturedContents().then(res => {
            res.result.contents.forEach(v => {
                const IMG = v.image;
                IMG.file = ImageService.getResolution(IMG);
            });
            this.$set(this, 'contents', res.result.contents);
        });
    }
};
</script>
