$(document).ready(function () {
    scrollIcon();
    tabNav();
    mobileNav();
    checkMobile();
    resize();
    window.addEventListener('resize', resize)
    window.addEventListener('load', resize)


});
function resize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh)
}
function checkMobile() {
    var type = navigator.userAgent.toLowerCase();
    console.log(type);
    if (type.indexOf('android') > -1) {
        //안드로이드            
        $('.mobile_app a').addClass('android')
        $('.mobile_app a').removeClass('ios')
        $('.mobile_app a').on('click', function (event) {
            event.preventDefault();
            window.open("https://play.google.com/store/apps/details?id=kr.co.teeshot.app");
        })
    } else if (type.indexOf("iphone") || type.indexOf("ipad") || type.indexOf("ipod")) {
        //IOS
        $('.mobile_app a').addClass('ios')
        $('.mobile_app a').removeClass('android')
        $('.mobile_app a').on('click', function (event) {
            event.preventDefault();
            window.open("https://apps.apple.com/kr/app/id1092007968");
        })

    } else {
        //아이폰, 안드로이드 외
        return alert('모바일 기기를 이용해주세요');
    }


}

function scrollIcon(params) {
    $(".icon-scroll").on('click', function (event) {
        var mobile = 640 >= window.innerWidth;

        event.preventDefault();
        if (!mobile) {
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - 180 }, 500);

        } else {
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - 80 }, 500);

        }

    });
};

function tabNav() {
    $(".tabArea .tab li a").on("click", function () {
        // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
        let num = $(".tabArea .tab li a").index($(this));

        // 기존에 적용되어 있는 on class 삭제
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");

        // 다음 요소 클릭시 on class 추가
        $('.tabArea .tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");

    });
};

function mobileNav(params) {
    $('#select_menu a').on('click', function () {
        $('.sub_tab').toggleClass('active');
        $('#select_menu a').toggleClass('on');
        $('.dismiss').toggleClass('on')
    })
    $('.sub_tab li a').on('click', function () {
        let num = $(".sub_tab li a").index($(this));

        $('#select_menu a').text($(this).text());
        $('.dismiss').removeClass('on')

        // 기존에 적용되어 있는 on class 삭제
        $('.sub_tab').removeClass('active')
        $('#select_menu a').removeClass('on');

        $(".sub_tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");

        // 다음 요소 클릭시 on class 추가
        $('.sub_tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");
    });

}