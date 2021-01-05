const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/swiper/swiper"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "swiper",
            path: "page/component/pages/swiper/swiper"
        };
    },

    data: {
        background: ["demo-text-1", "demo-text-2", "demo-text-3"],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },

    changeIndicatorDots() {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },

    changeAutoplay() {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },

    intervalChange(e) {
        this.setData({
            interval: e.detail.value
        });
    },

    durationChange(e) {
        this.setData({
            duration: e.detail.value
        });
    },

    bindchange(e) {
        console.log(1, e);
    },

    bindtransition(e) {
        console.log(2, e);
    },

    bindanimationfinish(e) {
        console.log(3, e);
    }
});
