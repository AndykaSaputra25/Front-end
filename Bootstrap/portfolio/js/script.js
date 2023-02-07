// event ketika link diklik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');

    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top -15
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

// event pada about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

// event pada portfolio
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if( wScroll > $('.portfolio').offset().top -180) {
        $('.portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
});