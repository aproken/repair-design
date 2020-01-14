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
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
       

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
        });
    
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });

    $(document).on('keydown', function(event){
        if (event.key === "Escape" || event.key === "Esc") {
            if (modal.hasClass('modal--visible')){
                modal.toggleClass('modal--visible');
            }
        }
    }) 
    
    modal.on('click', function(event) {
        if (event.target.className === "modal modal--visible") {
            modal.toggleClass('modal--visible'); 
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
                userPhone: "required",
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
                minlength: "Пожалуйста, введите имя не короче двух символов",
            },
            userPhone: {
                required: "Пожалуйста, введите телефон",
                phone: "",
            },
            userEmail: {
                required: "Пожалуйста, введите адрес электронной почты",
                email: "Формат электронной почты: name@domain.com"
            },
            'policy-checkbox': 'Необходимо согласие на обработку данных'
            },
            errorPlacement: function (error, element) {
                if (element.attr("type") == "checkbox") {
                    return element.next('label').append(error);
                }
            
                 error.insertAfter($(element));
            },
        })
    });

    //маска телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
  });