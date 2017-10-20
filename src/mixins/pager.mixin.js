/*
    @name: pager.mixin.js
    @desc: 인피니트 스크롤, 페이지네이터 믹스인
    @author: Evan Moon
    @created_at: 2017.10.14
*/

export const PagerMixin = {
    data () {
        return {
            pageIndex: 1,
            isBusy: true,
            isDone: false
        };
    },
    methods: {
        addPageIndex () {
            if (!this.isBusy) {
                this.pageIndex++;
            }
        },
        isPageDoneCheck ({ totalPageCount, currentPageIndex, lastPage, pageLength = 20 }) {
            if (lastPage instanceof Array === false) {
                console.error('[Error] lastPage variable expect Array');
                return false;
            }
            const currentPageLength = (pageLength * (currentPageIndex - 1)) + lastPage.length;
            this.isDone = currentPageLength >= totalPageCount;
        }
    },
    mounted () {
        this.isBusy = false;
    }
};
