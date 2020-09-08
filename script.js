//コンテンツがゆっくり出てくる
const targetElement = document.querySelectorAll(".animationTarget");
console.log(targetElement);
document.addEventListener("scroll", function () {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .2;
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})
//ページトップに戻る
$(document).ready(function () {
    var pagetop = $(".pagetop");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      });
    pagetop.click(function () {
      $("body, html").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  //トップイメージ
  var particles = Particles.init({
    selector: '.background',
  sizeVariations: 10,
  color: ['#00bbdd', '#404B69', '#DBEDF3'],
  connectParticles: true
});
