$(document).ready(function () {
    var value = 0;
    var countClicked = 0;
    var clicked = false;
    function getPosition(position) {
        if (position <= (360/7/2)) {
            $('.congratulation__note').text('THẺ ƯU ĐÃI 4999 BỊCH KOTEX');
            document.getElementById("correct").play();
        }
        else if (position <= (360/7/2 + 360/7)) {
            $('.congratulation__note').text('VÉ GIẢM GIÁ NHÀ NGHỈ 50%');
            document.getElementById("correct").play();
        }
        else if (position <= (360/7/2 + 360/7*2)) {
            $('.congratulation__note').text('MIỄN PHÍ 10 BỊCH DIANA');
            document.getElementById("correct").play();
        } else if (position <= (360/7/2 + 360/7*3)) {
            $('.congratulation__note').text('VÉ MIỄN PHÍ 5 BỘ BIKINI');
            document.getElementById("correct").play();
        } else if (position <= (360/7/2 + 360/7*4)) {
            $('.congratulation__note').text('TIẾT KIỆM CHI PHÍ NHÀ NGHỈ');
            document.getElementById("correct").play();
        }
        else if (position <= (360/7/2 + 360/7*5)) {
            $('.congratulation__note').text('VÍ TIẾT KIỆM KOTEX');
            document.getElementById("correct").play();
        }
        else if (position <= (360/7/2 + 360/7*6)) {
            $('.congratulation__note').text('TẠCH RỒI');
            document.getElementById("fail").play();
        }
        else {
            $('.congratulation__note').text('THẺ ƯU ĐÃI 4999 BỊCH KOTEX');
            document.getElementById("correct").play();
        }
        $('.popup').removeClass('active');
        $('.congratulation').fadeIn();
        clicked = false;
        countClicked = 0;
    }
    $('.wheel__button').click(function () {
        if (clicked !== true) {
            let random = Math.floor((Math.random() * 360)) + 720*2;
            value += random;
            console.log(random % 360);
            console.log(value % 360);
            $(".wheel__inner").css("transform", `rotate(${value}deg)`);
            setTimeout(() => {
                getPosition(value % 360);
            }, 5000);
        }
        clicked = true;
    })
    $('.congratulation__close').click(function () {
        $('.congratulation').fadeOut();
    })
    $('.congratulation').click(function (event) {
        if (event.target != this)
            return;
        $(this).fadeOut();
    })
})