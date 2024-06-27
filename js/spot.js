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

// scroll
$(function () {
  let topBtn = $("#page_top");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }

    if ($(this).scrollTop() > 4580) {
      topBtn.css("bottom", "100px");
    } else {
      topBtn.css("bottom", "10px");
    }
  });

  // top button
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
