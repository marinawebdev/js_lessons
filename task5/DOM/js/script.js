let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    newMenuItem = document.createElement('li'),
    title = document.getElementById('title'),
    advBlock = document.querySelector('.adv'),
    answer = document.getElementById('prompt');

menu.insertBefore(menuItems[2], menuItems[1]);
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

advBlock.remove();

let userAnswer = prompt('Как Вы относитесь к технике Apple?', '');
answer.textContent = userAnswer;