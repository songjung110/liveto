$(function(){
    // alert('a');

    //slide 화면에 맞추기
    // alert(slideHeight);
    var windowHeight = $(window).height();
    // alert(windowHeight);
    $('.slide').height(windowHeight);
    $(window).on('resize',function(){
        // alert('a');
        $('.slide').height($(window).height());
        // alert('a');
    });
    
    

    //header sub 메뉴 내려오게 하기
    $('.gnb , .sub , .sub:before').on('mouseover','li',function(){
        $(this).find('.sub').addClass('on');
        $(this).find('.sub').stop().animate({
            top :'90px',
            opacity : '1'
        },0,'linear');

        var winWidth = $(window).width();
        if(winWidth < 768){
          // alert('a');
          $(this).find('.sub').stop().animate({
            top :'30%',
            opacity : '1'
        },0,'linear');
        }

    }).on('mouseout','li',function(){
        $(this).find('.sub').stop().animate({
            top :'120px',
            opacity : '0'
        },100,'linear');
         $(this).find('.sub').removeClass('on');
        
         var winWidth = $(window).width();
        if(winWidth < 768){
          // alert('a');
          $(this).find('.sub').stop().animate({
            top :'120px',
            opacity : '1'
        },0,'linear');
        }
    });

    //태블릿 width 에서 버튼 클릭시 나오는 header 
    $('.gnb-btn').on('click',function(){

      if(!$('.gnb-btn').hasClass('on')){
        $('header .gnb').animate({
          right:'0'
        },500);
        $('.gnb-btn i').attr('class','fas fa-times');
        $('header .gnb-btn').css({
          color:'#fff',
          position:'fixed',
          top:'30px',
          right:'0px'
        });
        $('.gnb-btn').addClass('on');

      }else{

        $('header .gnb').animate({
          right:'-320px'
        },500);
        $('.gnb-btn i').attr('class','fas fa-bars');
        $('header .gnb-btn').css({
          color:'#f2ae12',
          position:'absolute',
          top:'30px',
          right:'0px'
        });
        $('.gnb-btn').removeClass('on');
      }
    });

    //slide 
    $('.small-slider').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        infinite:true,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        responsive: [
            {
            breakpoint: 1300,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
    });
    

    // 스크롤 내렸을때 내려오는 header
      // headerCon = $('#header');
      // headerConClone = $(headerCon).clone().appendTo('body');
      // $(headerConClone).addClass('on');
    var slideHeight = $('.slide').height();
    $(window).on('scroll',function(){
      // var sectionOffsetTop = $('.song-offset').offset().top;
      // alert(slideHeight);  
      var winScroll = $(window).scrollTop();
      if(slideHeight < winScroll){
        $('header').addClass('on');
        $('header.on').stop().animate({
          'top':'0'
        },500);

      }else{
        $('header').removeClass('on');
        $('header.on').stop().animate({
          'top':'-100%'
        },500);

      }
    });

        // 스크롤 내렸을때 내려오는 header
          //sub-page ver.
          // var tiHeight = $('.page-title').height();
          // $(window).on('scroll',function(){
          //   var winScroll = $(window).scrollTop();
          //   if(tiHeight < winScroll){
          //     $('header').addClass('on');
          //     $('header.on').stop().animate({
          //       'top':'0'
          //     },500);
      
          //   }else{
          //     $('header').removeClass('on');
          //     $('header.on').stop().animate({
          //       'top':'-100%'
          //     },500);
      
          //   }
          // });


    //견적문의 포커스 시 border 색상 변경


      $('.send-box.name').on('focus','input',function(){
          $('.send-box.name').find('.btm-line2').stop().animate({
            'width':'100%'
          },500);
        }).on('focusout','input',function(){
          $('.send-box.name').find('.btm-line2').stop().animate({
            'width':'0'
          },500);
      });

      $('.send-box.email').on('focus','input',function(){
        $('.send-box.email').find('.btm-line2').stop().animate({
          'width':'100%'
        },500);
      }).on('focusout','input',function(){
        $('.send-box.email').find('.btm-line2').stop().animate({
          'width':'0'
        },500);
    });

    $('.send-box.num').on('focus','input',function(){
      $('.send-box.num').find('.btm-line2').stop().animate({
        'width':'100%'
      },500);
    }).on('focusout','input',function(){
      $('.send-box.num').find('.btm-line2').stop().animate({
        'width':'0'
      },500);
    });

    $('.send-box.text').on('focus','input',function(){
      $('.send-box.text').find('.btm-line2').stop().animate({
        'width':'100%'
      },500);
    }).on('focusout','input',function(){
      $('.send-box.text').find('.btm-line2').stop().animate({
        'width':'0'
      },500);
    });


    // main section text rolling 

    $('#main-text-list').bxSlider({
      mode : 'vertical',
      pager : 'boolean',
      auto : 'true',
      speed : '300'
    });
    // var li = $('#main-text-list li');
    // // $(li).addClass('text-on');
    // var liLength= $(li).length;
    //   // alert(liLength);
    
    // setInterval(function(){
    // // liIndex = li.index(i);

    //   for(var i=0; i<liLength; i=i+1){
    //     liIndex = li.index(i);
        
    //   }
      
    //   //결과값은 여기에!
    //   // alert(liIndex);

    //   // alert(i);
    //   // alert(liSlide());
    //   // li.addClass('text-on');
    // },3000);


    /* 회사소개 페이지 */

    //메인 이미지 페이드인 페이드아웃
    $('.back-pic').animate({
      'opacity':'1'
    },100);

    /* 회사 연혁 페이지 연도별 탭 */

    //탭버튼 border
    $('.his-tab li:nth-child(1)').addClass('on');
    $('.his-tab li').on('click',function(){
      // alert('a');
      $('.his-tab li').removeClass('on');
      $(this).addClass('on');
    });

    //탭 콘텐츠 change
    $('.his-tab li:nth-child(1) a').addClass('on');
    $('.his-box').hide();
    $('#con1').show();

    $('.his-tab').on('click','a',function(e){
      e.preventDefault();
      //탭버튼 색상및

      //모든 탭 컨텐츠가 사라지고
      $('.his-box').hide();
      //클릭한 a태그의 href값을 가져와서 그 탭 컨텐츠만 보이게
      $($(this).attr('href')).show();

      //a태그 색상 전부 삭제
      $('.his-tab li a').removeClass('on');
      //클릭한 a태그의 색상만 활성화
      $(this).addClass('on');
    });

});

