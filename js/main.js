document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
   
    const switcheModal = () => {
        console.log("toggle")
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
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
          isEscape = (evt.key === "Escape" || evt.key === "Esc");
      } else {
          isEscape = (evt.keyCode === 27);
      }
      if (isEscape && modal.classList.contains('modal--visible')) {
          switcheModal();
      }
    };

    closeBtn.addEventListener('click', switcheModal);
    modal.addEventListener('click', function (evt) {
        /* Если клик по outside то можно закрыть окно */
        if (evt.target.classList.contains('modal--visible')){
           switcheModal()
        }
    });
  });