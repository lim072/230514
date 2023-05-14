$(document).ready(function(){
    $('.gnb>li').hover(function(){
        $('.sub , .wrapBg').stop().slideDown() 
    },function(){
        $('.sub , .wrapBg').stop().slideUp() 
    })

    setInterval(function(){
        $('#slide>.inner').animate({'left' : '-1200px'},function(){
            $('#slide>.inner>li').eq(0).appendTo("#slide>.inner")
            $('#slide>.inner').css({'left':0})
        })
    },3000)

    $('.notice>span').eq(0).click(function(){
        $('.popBg , .popup').css({'display' : 'block'})
    })
    $('button').click(function(){
        $('.popBg , .popup').css({'display' : 'none'})
    })
})