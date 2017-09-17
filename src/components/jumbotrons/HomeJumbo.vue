<template>
<div>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="content in contents">
                <div
                    class="swiper-thumbnail"
                    :style="{ 'background-image': `url(${content.image.file})` }"
                ></div>
            </div>
        </div>

        <div class="swiper-pagination" slot="pagination"></div>
        <div slot="button-prev">
            <button class="swiper-button-prev"><i class="pxs-arrow-left"></i></button>
        </div>
        <div slot="button-next">
            <button class="swiper-button-next"><i class="pxs-arrow-right"></i></button>
        </div>

        <div class="swiper-overlay"></div>
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
                autoplay: 4000,
                speed: 1000,
                initialSlide: 1,
                loop: true,
                pagination: '.swiper-pagination',
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next'
            }
        };
    },
    methods: {
        fetchFeaturedContents () {
            return APIService.resource('contents.list').get({
                pageIndex: 1,
                pageSize: 3,
                sort: 'latest:desc'
            });
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
