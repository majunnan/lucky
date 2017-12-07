//rem 
;(function(designWidth, maxWidth) {
	var doc = document,
	win = window,
	docEl = doc.documentElement,
	remStyle = document.createElement("style"),
	tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width>maxWidth && (width=maxWidth);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	refreshRem();

	win.addEventListener("resize", function() {
		clearTimeout(tid); 
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { 
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
})(750, 750);

//href
var $root = $('html, body');
var sTop = document.body.scrollTop;
function scrollTop (obj, toObj) {
    // var divHeight = document.getElementsByClassName(toObj)[0].offsetTop
    // var res = divHeight - sTop - 58
    // console.log(sTop)
    // console.log(divHeight)
    // console.log(res)
    // $root.animate({  
    //     scrollTop: res
    // }, 500);
    for (var i = 0; i < $('.bcd-header-menu-box').length; i++) {
        $('.bcd-header-menu-box').removeClass('active');
    }
    $(obj).addClass('active');
    $('.bcd-menu-box').removeClass('active');
    return false;
}

$('.feature').on('click', function () {
    scrollTop('.feature', 'bcd-screen-wrap')
})
$('.team').on('click', function () {
    scrollTop('.team', 'bcd-team-wrap')
})
$('.faq').on('click', function () {
    scrollTop('.faq', 'bcd-faq-wrap')
})
$('.exchanges').on('click', function () {
    scrollTop('.exchanges', 'bcd-exchanges-wrap')
})
$('.wallets').on('click', function () {
    scrollTop('.wallets', 'bcd-exchanges-wrap')
})
$('.news').on('click', function () {
    scrollTop('.news', 'bcd-news-wrap')
})

//mobile menu
$('.menu-img').on('click', function (e) {
    $('.bcd-language-box').removeClass('active');
    $('.bcd-language-box-big').removeClass('active');
    if ($('.bcd-menu-box').hasClass('active')) {
        $('.bcd-menu-box').removeClass('active');
    } else {
        $('.bcd-menu-box').addClass('active');
    }
})


//change language
$('.lan-box').on('click', function (e) {
    $('.bcd-menu-box').removeClass('active');
    if ($('.bcd-language-box').hasClass('active')) {
        $('.bcd-language-box').removeClass('active');
    } else {
        $('.bcd-language-box').addClass('active');
        e.preventDefault();
        $('.cn').on('click', function () {
            $('.lan-box').html('CN');
            $('.bcd-language-box').removeClass('active');
        })
        $('.en').on('click', function () {
            $('.lan-box').html('EN');
            $('.bcd-language-box').removeClass('active');
        })
    }
    if ($('.bcd-language-box-big').hasClass('active')) {
        $('.bcd-language-box-big').removeClass('active');
    } else {
        $('.bcd-language-box-big').addClass('active');
        e.preventDefault();
        $('.cn').on('click', function () {
            $('.lan-box').html('CN');
            $('.bcd-language-box-big').removeClass('active');
        })
        $('.en').on('click', function () {
            $('.lan-box').html('EN');
            $('.bcd-language-box-big').removeClass('active');
        })
    }
})

$('.bcd-language-img').on('mouseover', function () {
    $(this).addClass('active');
})
$('.bcd-language-img').on('mouseout', function () {
    $(this).removeClass('active');
})


//header background
$(window).scroll(function() { 
    if($(window).scrollTop() >= 10) {
        // $('.bcd-language-box-big').attr('style', 'background: rgba(39,33,33,0.9)');
        // $('.bcd-header-wrap').attr('style', 'background: #191616')
    } else {
        // $('.bcd-language-box-big').attr('style', '')
        // $('.bcd-header-wrap').attr('style', '')
    }
}); 

//faq 
$('.bcd-faq-box ul li').on('click', function () {
    for (var i = 0; i < $('.bcd-faq-box ul li').length; i++) {
        $('.bcd-faq-box ul li').removeClass('active')
    }
    $(this).addClass('active');
})

//mobile and pc exchange
if(/Android|webOS|iPad|iPhone|iPod|iPad|BlackBerry|iPad Pro/i.test(navigator.userAgent)) {
    $('.bcd-header-container').height('58');
    $('.bcd-faq-box ul li span').attr('style', 'font-size: 12px');
    $('.bcd-faq-box ul li p').attr('style', 'font-size: 10px');
    $('.bcd-faq-box ul li i img').attr('style', 'width: 12px');
    $('#seemore').attr('style', 'padding: 10px 20px;');
    if(/iPad/i.test(navigator.userAgent)) {
        $('.bcd-banner-phone').width(window.innerWidth);
        $('#banner').width(window.innerWidth);
    }
} else {
    $('.bcd-header-container').height('80');
    $('#banner').width(window.innerWidth);
}

window.addEventListener('resize', function() {
    if(/Android|webOS|iPad|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        $('.bcd-header-container').height('58');
        $('.bcd-faq-box ul li span').attr('style', 'font-size: 12px');
        $('.bcd-faq-box ul li p').attr('style', 'font-size: 10px');
        $('.bcd-faq-box ul li i img').attr('style', 'width: 12px');
    } else {
        $('.bcd-header-container').height('80');
        $('#banner').width(window.innerWidth);
    }
}, false);

//return top
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.getElementById("myBtn").style.display = "block";
   } else {
       document.getElementById("myBtn").style.display = "none";
   }
}

function topFunction() {
    $('html, body').animate({  
        scrollTop: 0
    }, 500);
}


$('#telegram').on('click', function () {
    $('.bcd-shade').height($('body').height())
    $('.bcd-shade').addClass('active')
})
$('.closeShade').on('click', function () {
    $('.bcd-shade').height(0)
    $('.bcd-shade').removeClass('active')
})