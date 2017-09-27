/*
    @name: Aboutus
    @desc: 픽셀스테어스 about 페이지
    @author: Evan Moon
    @created_at: 2017.09.27
*/
import $ from 'jquery';
import { LOGOS, ABOUT_US_ICONS } from 'src/constants';

export default {
    name: 'Aboutus',
    data () {
        return {
            logo: LOGOS.vp_w,
            introIcons: [{
                icon: ABOUT_US_ICONS.paint,
                name: 'paint-art'
            }, {
                icon: ABOUT_US_ICONS.cg,
                name: 'cg-art'
            }, {
                icon: ABOUT_US_ICONS.photo,
                name: 'photo-art'
            }]
        };
    },
    methods: {
        gotoScroll (element) {
            const top = $(this.$refs[element]).offset().top - 65;
            $('html, body').stop().animate({
                scrollTop: top
            }, 300);
        }
    }
};
