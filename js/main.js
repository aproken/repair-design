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
            $('.scroll-up').css("visibility", "visible");
        } else {
            $('.scroll-up').css("visibility", "hidden");
        }
    });

    $('.scroll-up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });
    

  });