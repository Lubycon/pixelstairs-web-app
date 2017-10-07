<template>
<div class="card artwork-card">
    <router-link :to="{ name: 'artwork-detail', params: { artId } }">
        <div
            class="card-img-top artwork-card--image"
            :style="{ 'background-image': `url(${thumbnail})` }"
        >
            <img :src="image.file" :title="title" :alt="title">
        </div>
        <div class="card-body">
            <h2 data-name="title">{{ title }}</h2>
            <div data-name="author">
                <span data-name="author-profile">
                    <div :style="{ 'background-image': `url(${computedAuthorProfile})` }"></div>
                </span>
                <span data-name="author-info">
                    <h4>{{ authorName }}</h4>
                </span>
            </div>
            <div data-name="counts">
                <ul>
                    <li data-name="like-count">
                        <i class="pxs-heart"></i>
                        <span>{{ likeCount }}</span>
                    </li>
                    <li data-name="view-count">
                        <i class="pxs-eye"></i>
                        <span>{{ viewCount }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </router-link>
</div>
</template>

<style lang="scss" scoped>
@import 'src/styles/utils/__module__';

$vertical-margin: 18px;
$horizontal-margin: 16px;
$icon-margin: 5px;
$profile-size: 25px;

.artwork-card {
    transition: transform 0.1s ease-in, box-shadow 0.1s ease-in;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    }
}

.artwork-card--image {
    position: relative;
    height: 250px;
    overflow: hidden;
    img {
        @include floatToCenter;
        width: 100%;
    }
}

.card-body {
    padding: $vertical-margin $horizontal-margin;
}

h2[data-name="title"] {
    @include ellipsis;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: $vertical-margin;
}

div[data-name="author"] {
    padding-bottom: $vertical-margin;
    margin-bottom: $vertical-margin;
    border-bottom: 1px solid $grey-100;
    span[data-name="author-profile"] {
        display: inline-block;
        vertical-align: middle;
        margin-right: $icon-margin;
        div {
            @include circleFrame($profile-size);
            display: inline-block;
            vertical-align: middle;
        }
    }
    span[data-name="author-info"] {
        display: inline-block;
        vertical-align: middle;
        h4 {
            display: inline-block;
            font-size: 12px;
            margin-bottom: 0;
        }
    }
}

div[data-name="counts"] {
    ul li {
        display: inline-block;
        margin-right: $horizontal-margin / 2;
        *:last-child {
            margin-right: 0;
        }
        i {
            vertical-align: middle;
            margin-right: $icon-margin;
            font-size: 14px;
        }
        span {
            vertical-align: middle;
        }

        &[data-name="like-count"] i {
            color: $red;
        }
    }
}
</style>

<script>
import ImageService from 'src/services/Image.service';

export default {
    name: 'Artwork-card',
    props: {
        artId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
        viewCount: {
            type: Number,
            default: 0
        },
        likeCount: {
            type: Number,
            default: 0
        },
        authorProfile: {},
        image: {}
    },
    data () {
        return {
            thumbnail: null
        };
    },
    computed: {
        computedAuthorProfile () {
            return ImageService.getUserProfile(this.authorProfile);
        }
    },
    created () {
        let thumbnail;

        if (this.image.isPixelOwn) {
            thumbnail = this.image.file + '30';
            this.$set(this.image, 'file', this.image.file + '640');
        }
        else {
            thumbnail = this.image.file;
        }

        this.$set(this, 'thumbnail', thumbnail);
    }
};
</script>
