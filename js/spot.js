// ページ内ジャンプ緩急つける
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 100;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  var topBtn = $("#page_top");
  topBtn.hide();

  //ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    } else {
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      80
    );
    return false;
  });
});
