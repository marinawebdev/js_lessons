window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // tabs
  let tab = document.querySelectorAll('.info-header-tab'),
      tabContainer = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for(let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  // hide all tabs except the first tab
  hideTabContent(1);

  function showTabContent(b) {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  tabContainer.addEventListener('click', function(event) {
    let target = event.target;
    if(target && target.classList.contains('info-header-tab')) {
      for(let i = 0; i < tab.length; i++) {
        if(target == tab[i]) {
          // hide all tabs
          hideTabContent(0);
          // show selected tab
          showTabContent(i);
        }
      }
    }
  });

  // timer
  let deadline = '2020-05-08';

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        // hours = Math.floor((t/1000/60/60) % 24);
        // days = Math.floor((t/(1000*60*60*24))),
  
    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endTime);

      function correctFormat(elem, item) {
        if(item < 10) {
          elem.textContent = '0' + item;
        } else {
          elem.textContent = item;
        }
      }

      correctFormat(hours, t.hours);
      correctFormat(minutes, t.minutes);
      correctFormat(seconds, t.seconds);

      if(t.total <= 0) {
        clearInterval(timeInterval);
        
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);

  // modal

  let moreBtn = document.querySelector('.more'),
      descriptionBtn = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      closeBtn = document.querySelector('.popup-close');

  function showModal(btn) {
    overlay.style.display = 'block';
    btn.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
    function closeModal() {
      overlay.style.display = 'none';
      btn.classList.remove('more-splash');
      document.body.style.overflow = '';
    }
    closeBtn.addEventListener('click', function() {
      closeModal();
    })
  }

  moreBtn.addEventListener('click', function() {
    showModal(this);
  });
  descriptionBtn.forEach(function(elem) {
    elem.addEventListener('click', function() {
      showModal(this);
    })
  });
});