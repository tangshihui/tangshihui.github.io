
var langUtil = (function($) {
    var lang = {
        dictionary: {
            "user-name": { en: "TangShihui", cn: "唐世辉" },
            "lbl-version": { en: "Version", cn: "版本" },
            "op-english": { en: "English", cn: "英文" },
            "op-chinese": { en: "Chinese", cn: "中文" }
        },
        changVersion: function (key, lang) {
            return this.dictionary[key][lang];
        }
        

    }

    return lang;
})(jQuery);



function changeLang() {
        var lang = $("#version").val();
        $(".user-name").html(langUtil.changVersion("user-name", lang));
        $(".lbl-version").html(langUtil.changVersion("lbl-version", lang));

        $("#version").children().each(
            function () {
                $(this).html(langUtil.changVersion($(this).attr("class"), lang));
            }
            );
    }
