 
var InitPhoneChangeAdv = (function () {
    return {
        init: function () {
            var self = this;
            self.fdOptions = {
                classHideName: 'hide-phone-element'
            };

            if (InitPhoneChangeAdv.getCookie('openedBannerLt')) {
                var currAdvKey = InitPhoneChangeAdv.getCookie('openedBannerLt');
                currAdvKey = parseInt(currAdvKey.replace(/\D+/g, ""));
                InitPhoneChangeAdv.setPhones(currAdvKey);
            }
            else {
                var currAdvKey = InitPhoneChangeAdv.getAddvKey();
                var currPhoneCheck = "";
                var currPhoneCheck = currPhoneCheck + InitPhoneChangeAdv.setPhones(currAdvKey);
                if (currPhoneCheck != "000") {  // dont create cookie for wrong hash
                    InitPhoneChangeAdv.setCookie('openedBanner1', currAdvKey, 30);
                }
            }
        },
        setPhones: function (currAdvKey) {
            var value = "";
            switch (currAdvKey) {
                case (0):
                    value = "000"; // by default
                    valueHref = "";
                    break;
                case (8800763800):
                    value = "8-800-763-800'";
                    //valueHref = "tel: ";
                    break;
                case (8900999800):
                    value = "8-900-999-800";
                    //valueHref = "tel: ";
                    break;
                default:
                    value = "000"; // if wrong hash in key
            }

            // default phone
            if (value == "000") {
                // ... some actions and remove hide class
                $(classHideName).removeClass(classHideName);
            }
            else {
                // ... some actions 
				
                // add new phone
                $(classHideName).text(value);
				
                // remove hide class
                $(classHideName).removeClass(classHideName);
            }

            return value;
        },
        getAddvKey: function () {
            var advCode1 = '123456789';  // looking for adv code
            var advCode2 = '987654321';
 
            var currNum = 0;  // by default
            if (window.location.href.indexOf(advCode1) > 0) {
                currNum = 8800763800;
            }
            else if (window.location.href.indexOf(advCode2) > 0) {
                currNum = 8900999800;
            }

            return currNum;
        },
        includeCss: function (cssFilePath) {
            var style = document.createElement('link');
            style.setAttribute('href', cssFilePath);
            style.setAttribute('rel', 'stylesheet');
            style.setAttribute('type', 'text/css');
            document.getElementsByTagName('head')[0].appendChild(style);
        },
        includeJs: function (jsFilePath) {
            var js = document.createElement("script");
            js.type = "text/javascript";
            js.src = jsFilePath;
            js.async = false;
            document.body.appendChild(js);
        },
        loadHtml: function (target, url) {
            var r = new XMLHttpRequest();
            r.open("GET", url, true);
            r.onreadystatechange = function () {
                if (r.readyState != 4 || r.status != 200) return;
                target.innerHTML = r.responseText;
            };
            r.send();
        },
        getCookie: function (c_name) {
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return unescape(y);
                }
            }
        },
        setCookie: function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + escape(value) + expires + "; path=/";
        }
    }
})();












