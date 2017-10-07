<template>
<div class="home-jumbo" v-cloak>
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

        <slot name="swiper-overlay-text"></slot>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';
.swiper-overlay-text {
    $margin: 10px;
    @include mq('md') {
        width: 80%;
    }
    * {
        color: $white;
    }
    h1 {
        margin-bottom: $margin * 2;
        @include mq('sm') {
            font-size: 18px;
        }
    }
    p {
        margin-bottom: $margin / 2;
        @include mq('sm') {
            font-size: 16px;
        }
    }
}
</style>
<style lang="scss">
@import 'src/styles/utils/__module__';
.home-jumbo .swiper-overlay-text {
    .btn {
        @include mq('sm') {
            font-size: 14px;
        }
    }
}
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
