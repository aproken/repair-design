/*
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
   
    const switcheModal = () => {
        modal.classList.toggle('modal--visible');
    }

    modalBtn.forEach(element => {
        element.addEventListener('click', switcheModal);
    });

    /*
     * обработчик нажатия клавиши `Escape` на документ
     * по нажатию выполняем `switcheModal`
     *
     */
    /*
     document.addEventListener('keydown', function(event) {
      event = event || window.event;
      var isEscape = false;
      if ("key" in event) {
          isEscape = (event.key === "Escape" || event.key === "Esc");
      } else {
          isEscape = (event.keyCode === 27);
      }
      if (isEscape && modal.classList.contains('modal--visible')) {
          switcheModal();
      }
    });

    closeBtn.addEventListener('click', switcheModal);
    modal.addEventListener('click', function (event) {
        /* Если клик по outside то можно закрыть окно */
 /*
        if (event.target.classList.contains('modal--visible')){
           switcheModal()
        }
    });
  });
  */

  $(document).ready(function() {
    var modal = $('.modal'),
        modalAnswer = $('.modal-answer'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        closeBtnAnswer = $('.modal-answer__close');


    function showModal(selector){
        $(selector).toggleClass('modal--visible')
    }

    function hideModal(selector){
        $(selector).removeClass('modal--visible')
    }

    function showAnswer(ans) {
        modalAnswer.find('.modal-answer__title').text(ans)
        modalAnswer.toggleClass('modal--visible')
    }

    function hideAnswer() {
        modalAnswer.hide()
    }

    modalBtn.on('click', function() {
        const modalInst = $(this).data('instance') 
        showModal(modalInst)
    });
    
    closeBtn.on('click', function() {
        $(this).parents('.modal').removeClass('modal--visible');
    });

    $(document).on('keydown', function(event){
        if (event.key === "Escape" || event.key === "Esc") {
            if (modal.hasClass('modal--visible')){
                modal.find('form').each(function(i,x) {
                    x.reset()
                })
                modal.removeClass('modal--visible');
            }
        }
    }) 
    
    modal.on('click', function(event) {
        if (event.target.classList.contains('modal')) {
            modal.find('form').each(function(i,x) {
                x.reset()
            })
            modal.removeClass('modal--visible');
        }
    });

    $(window).on('scroll', function() {
        if($(this).scrollTop()) {
            $('.scroll-button__up').css("visibility", "visible");
        } else {
            $('.scroll-button__up').css("visibility", "hidden");
        }
    });

    $('.scroll-button__up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });

    $('.scroll-button__down').on('click', function() {
        $("html, body").animate({
            scrollTop: window.innerHeight
        }, 1500);
    });

     //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    })
    
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 20);
    bullets.css('left', prev.width() + 20);

    new WOW().init();

    //Валидация форм
    $('.modal__form, .footer__form, .control__form').each(function(index, item){
        $(item).validate({
            errorClass: "invalid",
            rules: {
                // строчное правило
                userName: {
                    required: true,
                    minlength: 2,
                },
                userQuestion: {
                    required: true,
                    minlength: 2
                },
                userPhone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17,
                },
                // правило-объект (блок)
                userEmail: {
                required: true,
                email: true,
                },
                'policy-checkbox': { required: true }
            },
            //сообщения
            errorElement: "div",
            messages: {
            userName: {
                required: "Пожалуйста, введите имя",
                minlength: "Имя не короче двух символов",
            },
            userPhone: {
                required: "Пожалуйста, введите телефон",
                minlength: "Формат номера: +7(000) 000-00-00",
                maxlength: "Формат номера: +7(000) 000-00-00",
            },
            userEmail: {
                required: "Пожалуйста, введите адрес электронной почты",
                email: "Формат электронной почты: name@domain.com"
            },
            userQuestion: {
                required: "Пожалуйста, введите свой вопрос"
            },
            'policy-checkbox': 'Необходимо согласие на обработку данных'
            },
            errorPlacement: function (error, element) {
                if (element.attr("type") == "checkbox") {
                    return element.next('label').append(error);
                }
            
                 error.insertAfter($(element));
            },
            submitHandler: function(form) {
                ym(65452483, 'reachGoal', 'request');
                $.ajax({
                    method: "POST",
                    url: "mail.php",
                    data: $(form).serialize(),
                    success: function(response) {
                        console.log(response)
                        $(form)[0].reset()
                        showAnswer('Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
                        hideModal('.modal-callback');
                    },
                    error: function(response) {
                        console.error(response)
                        $(form)[0].reset()
                        showAnswer('Ошибка!')
                        hideModal('.modal-callback');
                    }
                })
                return false;
            }
        })
    });

    //маска телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});
//Видео
//    var player;
//    $('.video__play').on('click',function onYouTubeIframeAPIReady() {
//        player = new YT.Player('player', {
//          height: '465',
//          width: '100%',
//          videoId: 'cm-p6dcXpHs',
//          events: {
//            'onReady': videoPlay,
//          }
//        });
//      })
//
//      function videoPlay(event) {
//        event.target.playVideo();
//      }


  });


