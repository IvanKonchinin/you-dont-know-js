'use strict';

const collectionBook = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');

collectionBook[0].prepend(book[2]);
collectionBook[0].prepend(book[5]);
collectionBook[0].prepend(book[3]);
collectionBook[0].prepend(book[4]);
collectionBook[0].prepend(book[0]);
collectionBook[0].prepend(book[1]);

document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';

book[4].classList.add('book3');
book[0].classList.add('book2');
book[2].classList.add('book6');
book[5].classList.add('book5');


document.querySelector('.book3 h2 a').textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const book2Ul = document.querySelectorAll('.book2 ul');
const book2UlLi = document.querySelectorAll('.book2 ul li');

book2Ul[0].append(book2UlLi[2]);
book2UlLi[3].after(book2UlLi[6]);
book2UlLi[6].after(book2UlLi[8]);
book2UlLi[10].before(book2UlLi[2]);

const book6Ul = document.querySelectorAll('.book6 ul');
const book6UlLi = document.querySelectorAll('.book6 ul li');
const book6UlLiClone = book6UlLi[0].cloneNode();
book6UlLiClone.textContent = 'Глава 8: За пределами ES6';
book6Ul[0].append(book6UlLiClone);
book6UlLi[9].before(book6UlLiClone);

const book5Ul = document.querySelectorAll('.book5 ul');
const book5UlLi = document.querySelectorAll('.book5 ul li');

book5UlLi[1].after(book5UlLi[9]);
book5UlLi[9].after(book5UlLi[3]);
book5UlLi[3].after(book5UlLi[4]);
book5UlLi[2].after(book5UlLi[6]);
book5UlLi[7].after(book5UlLi[5]);



