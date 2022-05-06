// jsを記述する際はここに記載していく

// white filter
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// #page-top
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// ×とメニューバーの表示
var navLinks = document.getElementById("navLinks");

    function showMenu(){
    navLinks.style.right = "0";
    }
    function hideMenu(){
    navLinks.style.right = "-200px";
    }