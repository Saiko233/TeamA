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
      topBtn.fadeIn();
    } else {
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
