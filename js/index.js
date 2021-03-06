$(function(){
    // 변수 선언
    const toTopBtn = $('.to-top-btn-wrap');
    const itemWrap = $('.item-wrap');
    const modalBar = $('.header-wrap .modal-bar');
    const countWish = $('.count-wish');
    const searchWrap = $('.search-wrap');
    const searchCloseBtn = $('.search-wrap a');
    const searchSubmitBtn = $('.search-wrap .search-submit');
    const searchBtn = $('.header-wrap .xi-search');
    const modalBoxWrap = $('.modal-box-wrap');
    const modalBoxClose = $('.modal-box-wrap a');
    const mainSlideArticle = $('.main-wrap article');
    const mainSlideWrap = $('.main-wrap .slide-wrap');
    const indexNumberNow = $('.index-number .now');
    const slideInfoBar = $('.slide-info-bar');
    const slideInfoH3 = $('.slide-info-bar h3');
    const mainSlideH3 = $('.main-wrap .texts h3');
    const mainSlideText = $('.main-wrap .texts');
    const mainSlideBtn = $('.main-wrap .slide-button i'); 
    const bannerArticle = $('.banner-1 article');
    const bannerVideo = $('.banner-1 video');
    const bannerImage = $('.banner-1 .image');
    const productSlideWrap = $('.content-2 .slide-wrap');
    const newProductGroup = $('.content-2 .slide-group');
    const newProductPaging = $('.content-2 .paging li');
    const monthProductWrap = $('.content-3 .slide-wrap');
    const monthProductGroup = $('.content-3 .slide-group');
    const monthProductPaging = $('.content-3 .paging li');
    const productLikeBtn = $('.content .icons .xi-heart');
    const productWishBtn = $('.content .icons .xi-cart');
    const productDiscount = $('.content-2 .discount-rate');
    const productDiscountRate = $('.content-2 .discount-rate span');
    const productOrigianlNum = $('.content-2 .texts .original-prices');
    const productOrigianlPrice = $('.content-2 .texts .original-prices span');
    const productDiscountedPrice = $('.content-2 .texts .final-prices span');
    const monthProductDiscount = $('.content-3 .discount-rate');
    const monthProductDiscountRate = $('.content-3 .discount-rate span');
    const monthProductOrigianlNum = $('.content-3 .texts .original-prices');
    const monthProductOrigianlPrice = $('.content-3 .texts .original-prices span');
    const monthProductDiscountedPrice = $('.content-3 .texts .final-prices span');
    let mainSlideDataNum = 0;
    let mainSlideIndex = 0;
    let bannerIndex = 0;
    let productPage = 0;
    let monthProductPage = 0;
    let device = 'pc';
    let timer = 'null';
    let sec = 150;

    // 기본 세팅
    $(document).ready(function(){
        for(i = 0; i < 12 ; i++){
            productDiscountRate.eq(i).text(parseInt(((productDiscountedPrice.eq(i).text() - productOrigianlPrice.eq(i).text()) / productOrigianlPrice.eq(i).text()) * -100));
            if (productDiscount.eq(i).text() == 0 + '%') {
                productDiscount.eq(i).css({
                    display: 'none'
                });                
            }
            if (productOrigianlPrice.eq(i).text() == productDiscountedPrice.eq(i).text()){
                productOrigianlNum.eq(i).css({
                    display: 'none'
                });
            }
            monthProductDiscountRate.eq(i).text(parseInt(((monthProductDiscountedPrice.eq(i).text() - monthProductOrigianlPrice.eq(i).text()) / monthProductOrigianlPrice.eq(i).text()) * -100));
            if (monthProductDiscount.eq(i).text() == 0 + '%') {
                monthProductDiscount.eq(i).css({
                    display: 'none'
                });                
            }
            if (monthProductOrigianlPrice.eq(i).text() == monthProductDiscountedPrice.eq(i).text()){
                monthProductOrigianlNum.eq(i).css({
                    display: 'none'
                });
            }        
            productOrigianlPrice.eq(i).text(productOrigianlPrice.eq(i).text().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            productDiscountedPrice.eq(i).text(productDiscountedPrice.eq(i).text().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            monthProductOrigianlPrice.eq(i).text(monthProductOrigianlPrice.eq(i).text().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            monthProductDiscountedPrice.eq(i).text(monthProductDiscountedPrice.eq(i).text().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    });
    
    // 1

    
    function modalOn (){
        modalBoxWrap.css({
            right: '0px'
        });
    }

    function modalClose (){
        modalBoxWrap.css({
            right: '-800px'
        });
    }

    function mainSwipeLeft (){
        mainSlideIndex++;
        mainSlideDataNum = mainSlideArticle.eq(mainSlideIndex).attr('data-num');
        if (mainSlideIndex >= 7) {
            mainSlideDataNum = 0;
        };  
        if (mainSlideIndex >= 7) {
            mainSlideIndex = 0;
        }      
        mainSlideArticle.css({
            'z-index' : 95,
            'opacity' : 0
        });
        mainSlideArticle.eq(mainSlideDataNum).css({
            'z-index' : 96,
            'opacity' : 1
        });
        indexNumberNow.text(parseInt(mainSlideDataNum) + parseInt(1));
        slideInfoBar.css({
            width: ((parseInt(mainSlideDataNum) * 5 + 35 + '%'))
        });
        slideInfoH3.text(mainSlideH3.eq(mainSlideIndex).text());
        slideInfoH3.css({
            color: '#fff'
        });
        mainSlideText.css({
            display: 'none'
        });
        mainSlideText.fadeIn(1400);
    }

    function mainSwipeRight (){
        mainSlideIndex--;
        mainSlideDataNum = mainSlideArticle.eq(mainSlideIndex).attr('data-num');
        if (mainSlideIndex <= -1) {
            mainSlideDataNum = 6;
        };  
        if (mainSlideIndex <= -1) {
            mainSlideIndex = 6;
        }      
        mainSlideArticle.css({
            'z-index' : 95,
            'opacity' : 0
        });
        mainSlideArticle.eq(mainSlideDataNum).css({
            'z-index' : 96,
            'opacity' : 1
        });
        indexNumberNow.text(parseInt(mainSlideDataNum) + parseInt(1));
        slideInfoBar.css({
            width: ((parseInt(mainSlideDataNum) * 5 + 35 + '%'))
        });
        slideInfoH3.text(mainSlideH3.eq(mainSlideIndex).text());
        slideInfoH3.css({
            color: '#fff'
        });
        mainSlideText.css({
            display: 'none'
        });
        mainSlideText.fadeIn(1400);
    }

    function bannerMouseEnter (){
        bannerIndex = $(this).index();
        bannerArticle.css({
            width: '14%'
        });
        bannerArticle.eq(bannerIndex).css({
            width: '70%'
        });
        bannerVideo.eq(bannerIndex).css({
            opacity: 1,
            display: 'block',
        });
        bannerImage.eq(bannerIndex).css({
            opacity: 0.7
        });
        if ($(window).width() <= 750) {
            bannerArticle.css({
                width: 100 + '%'
            });
        } 
    }

    function bannerMouseLeave (){
        bannerIndex = $(this).index();
        bannerArticle.css({
            width: 'calc(100% / 3 - 10px)'
        });
        bannerVideo.css({
            opacity: 0,
        });
        bannerImage.css({
            opacity: 1
        });
        if ($(window).width() <= 750) {
            bannerArticle.css({
                width: 100 + '%'
            });
        }
    }

    function windowResize (){
        clearTimeout(timer);
        timer = setTimeout(function(){
            if ($(window).width() <= 750) {
                if (device == "mobile") {
                    bannerArticle.css({
                        width: 100 + '%'
                    });
                    if (productPage >= 3) {
                        productPage = 1;
                        newProductGroup.css({
                            marginLeft: productPage * -100 + '%'
                        });
                        newProductPaging.removeClass('now');
                        newProductPaging.eq(productPage).addClass('now');
                    }            
                    if (monthProductPage >= 3) {
                        monthProductPage = 1;
                        monthProductGroup.css({
                            marginLeft: monthProductPage * -100 + '%'
                        });
                        monthProductPaging.removeClass('now');
                        monthProductPaging.eq(monthProductPage).addClass('now');
                    }
                    device = "pc"
                }
            } else if ($(window).width() > 750) {
                if (device == "pc") {
                    bannerArticle.css({
                        width: 'calc(100% / 3 - 10px)'
                    });
                    if (productPage >= 3) {
                        productPage = 1;
                        newProductGroup.css({
                            marginLeft: productPage * -100 + '%'
                        });
                        newProductPaging.removeClass('now');
                        newProductPaging.eq(productPage).addClass('now');
                    }            
                    if (monthProductPage >= 3) {
                        monthProductPage = 1;
                        monthProductGroup.css({
                            marginLeft: monthProductPage * -100 + '%'
                        });
                        monthProductPaging.removeClass('now');
                        monthProductPaging.eq(monthProductPage).addClass('now');
                    }
                    device = "mobile";
                }
            }
        }, sec);
    }

    function productSwipeRight (){
        productPage--;
        if ($(window).width() <= 750) {
            if (productPage < 0) {
                productPage = 5;
            } 
        } else if ($(window).width() > 750) {
            if (productPage < 0) {
                productPage = 2;
            }
        }
        newProductGroup.css({
            marginLeft: (productPage) * -100 + '%'
        });
        newProductPaging.removeClass('now');
        newProductPaging.eq(productPage).addClass('now');
    };

    function productSwipeLeft (){
        productPage++;
        if ($(window).width() <= 750) {
            if (productPage >= 6) {
                productPage = 0;
            } 
        } else if ($(window).width() > 750) {
            if (productPage >= 3) {
                productPage = 0;
            }
        }
        newProductGroup.css({
            marginLeft: (productPage) * -100 + '%'
        });
        newProductPaging.removeClass('now');
        newProductPaging.eq(productPage).addClass('now');
    }

    function newProductPageMove (){
        productPage = $(this).index();
        newProductGroup.css({
            marginLeft: (productPage) * -100 + '%'
        });
        newProductPaging.removeClass('now');
        newProductPaging.eq(productPage).addClass('now');
    }

    function monthProductSwipeRight (){
        monthProductPage--;
        if ($(window).width() <= 750) {
            if (monthProductPage < 0) {
                monthProductPage = 5;
            } 
        } else if ($(window).width() > 750) {
            if (monthProductPage < 0) {
                monthProductPage = 2;
            }
        }
        monthProductGroup.css({
            marginLeft: (monthProductPage) * -100 + '%'
        });
        monthProductPaging.removeClass('now');
        monthProductPaging.eq(monthProductPage).addClass('now');
    }

    function monthProductSwipeLeft (){
        monthProductPage++;
        if ($(window).width() <= 750) {
            if (monthProductPage >= 6) {
                monthProductPage = 0;
            } 
        } else if ($(window).width() > 750) {
            if (monthProductPage >= 3) {
                monthProductPage = 0;
            }
        }
        monthProductGroup.css({
            marginLeft: (monthProductPage) * -100 + '%'
        });
        monthProductPaging.removeClass('now');
        monthProductPaging.eq(monthProductPage).addClass('now');
    }

    function monthProductPageMove (){
        monthProductPage = $(this).index();
        monthProductGroup.css({
            marginLeft: (monthProductPage) * -100 + '%'
        });
        monthProductPaging.removeClass('now');
        monthProductPaging.eq(monthProductPage).addClass('now');
    }

    function likeBtnClick (){
        if ($(this).hasClass('like') == true) {
            $(this).removeClass('like');
        } else {
            $(this).addClass('like');
        }
    }

    function wishBtnClick (){
        if ($(this).hasClass('wish') == true) {
            $(this).removeClass('wish');
        } else {
            $(this).addClass('wish');
        };
        countWish.text($('.wish').length);       
    }

    function searchClick (){
        searchWrap.css({
            height: '100vh',
            top: 0         
        });
        $('body').css({
            height: '100vh',
            overflow: 'hidden'
        });
    }

    function searchClose (){
        searchWrap.css({
            height: 0,
            top: '-100vh'
        });
        $('body').css({
            height: 'auto',
            overflow: 'auto'
        });
    }

    function searchSubmit (){
        alert('서버와 연결할 수 없습니다');
    }

    function windowScroll (){
        if ($(window).scrollTop() >= itemWrap.offset().top) {
            toTopBtn.addClass('active');
        } else if ($(window).scrollTop() < itemWrap.offset().top) {
            toTopBtn.removeClass('active');
        }
    }

    function toTheTop (){
        $('html').animate({scrollTop: 0},500);
    }


    // 2

    modalBar.click(modalOn);
    modalBoxClose.click(modalClose);
    mainSlideWrap.swipeleft(mainSwipeLeft);
    mainSlideWrap.swiperight(mainSwipeRight);
    bannerArticle.mouseenter(bannerMouseEnter);
    bannerArticle.mouseleave(bannerMouseLeave);
    mainSlideBtn.eq(0).click(mainSwipeRight);
    mainSlideBtn.eq(1).click(mainSwipeLeft);
    $(window).resize(windowResize);
    productSlideWrap.swiperight(productSwipeRight);
    productSlideWrap.swipeleft(productSwipeLeft);
    newProductPaging.click(newProductPageMove);
    monthProductWrap.swiperight(monthProductSwipeRight);
    monthProductWrap.swipeleft(monthProductSwipeLeft);
    monthProductPaging.click(monthProductPageMove);
    productLikeBtn.click(likeBtnClick);
    productWishBtn.click(wishBtnClick);
    searchBtn.click(searchClick);
    searchCloseBtn.click(searchClose);
    searchSubmitBtn.click(searchSubmit);
    $(window).scroll(windowScroll);
    toTopBtn.click(toTheTop);
});