const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/template-message/template-message"
    }
});

const templateMessageUrl = require("../../../../config").templateMessageUrl;

const app = getApp();
const formData = {
    address: "T.I.T 造舰厂",
    time: "2017.01.09",
    name: "帝国歼星舰",
    serial: "123456789"
};

_Page({
    onShareAppMessage() {
        return {
            title: "模板消息",
            path: "page/API/pages/template-message/template-message"
        };
    },

    onLoad() {
        this.setData({
            formData
        });
    },

    submitForm(e) {
        const self = this;
        const { formId } = e.detail;
        const formData = e.detail.value;
        console.log("form_id is:", formId);
        self.setData({
            loading: true
        });

        _my.request({
            url: templateMessageUrl,
            method: "POST",
            data: {
                form_id: formId,
                formData
            },

            success(res) {
                console.log("submit form success", res);

                _my.showToast({
                    title: "发送成功",
                    icon: "success"
                });

                self.setData({
                    loading: false
                });
            },

            fail({ errMsg }) {
                console.log("submit form fail, errMsg is:", errMsg);
            }
        });
    }
});
