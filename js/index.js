$(document).ready(function(){
    sliderBXMain();
    labelClass()
    aboutClick();
    tabClick();
    topDown();
    collaboSpread();
    listSpread();
});

function sliderBXMain(){
    $('.slider').bxSlider({
        mode: 'horizontal',
        speed:500,
        easing:'ease-in-out',
        startSlide:0,
        infiniteLoop:true,
        reponsive:true,
        controls:true,
        auto : true,
        pause : 4000,
        touchEnabled:false,
        // autoHover : true
    });
}
function labelClass(){
    var $checkTarget = $("label");
    var $burger = $("#burger")

    $checkTarget.click(function(){
        if($burger.is(':checked')==0){
            $checkTarget.addClass("active");
        }else{
            $checkTarget.removeClass("active");
        }
    })
}

function aboutClick(){
    var $about = $("body > nav ul li:first-of-type a");

    $about.click(function(){
        $("#burger").prop('checked',false);
        $("label").removeClass("active");
    })
}

function tabClick(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabnumb");
        $(".tabMenu li").removeClass("active"); 
        $(this).addClass("active");

        $(".tabPage").removeClass("active");
        $("#"+activeTab).addClass("active");
    })
}

function topDown(){
    $(document).scroll(function(){
        if($(window).scrollTop() != 0){
            $('header').addClass('headerUp');
        }else{
            $('header').removeClass('headerUp');
        }
    });
}

function collaboSpread(){
    $("body.collaboPage button").click(function(){
        $("ul.collaboSlider").toggleClass("flow");
        if($(this).html()=="Spread Client"){
            $(this).html("Slide Client");
        }else{
            $(this).html("Spread Client");
        }
    })
}

function listSpread(){
    $("body.listPage section.list nav ul li").click(function(){
        $("body.listPage section.list nav ul").toggleClass("spread");
    })
}