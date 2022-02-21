const slideItem = document.querySelectorAll('.slider-item');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const modalForm = document.querySelector('.modal-form');
const modalVisual = document.querySelector('.modal-visual');
const adForm = document.querySelector('.ad-form');
const modalClick = document.querySelector('.modal-click');

const menuLine = document.querySelector('.menu-line');
const menuLineRotate = document.querySelectorAll('.menu-item__line');
const headerMenu = document.querySelector('.header-menu');
const headerContact = document.querySelector('.header-contact');

let COUNT = 0;
let CHECKED = true;

btnLeft.addEventListener('click', () => {
    slideItem[COUNT].classList.remove('slide-active');
    if(COUNT === 0){
        COUNT = slideItem.length - 1;
        slideItem[COUNT].classList.add('slide-active');
    } else {
        COUNT-= 1;
        slideItem[COUNT].classList.add('slide-active');
    }
});

btnRight.addEventListener('click', () => {
    slideItem[COUNT].classList.remove('slide-active');
        if(COUNT === slideItem.length - 1){
            COUNT = 0;
            slideItem[COUNT].classList.add('slide-active');
        } else {
            COUNT+= 1;
            slideItem[COUNT].classList.add('slide-active');
        }
});

modalClick.addEventListener('click', () => {
    modalForm.classList.add('modal-form-active');
    modalVisual.classList.add('modal-form-active');
});

modalVisual.addEventListener('click', () => {
    modalForm.classList.remove('modal-form-active');
    modalVisual.classList.remove('modal-form-active');
});

modalForm.addEventListener('click', () => {
    modalForm.classList.remove('modal-form-active');
    modalVisual.classList.remove('modal-form-active');
});

modalForm.addEventListener('click', () => {
    modalForm.classList.remove('modal-form-active');
    modalVisual.classList.remove('modal-form-active');
});

menuLine.addEventListener('click', () => {
    if(CHECKED){
        headerMenu.classList.add('header-menu__active');
        menuLineRotate[0].style.display = 'none';
        menuLineRotate[1].style.background = '#000';
        menuLineRotate[2].style.background = '#000';
        menuLineRotate[1].style.transform = 'rotate(45deg)';
        menuLineRotate[2].style.transform = 'rotate(-45deg)';
        menuLineRotate[3].style.display = 'none';
        headerContact.style.top = '300px';
        CHECKED = false;
    } else {
        headerMenu.classList.remove('header-menu__active');
        menuLineRotate[0].style.display = 'block';
        menuLineRotate[1].style.background = '#ffffff';
        menuLineRotate[2].style.background = '#ffffff';
        menuLineRotate[1].style.transform = 'rotate(0)';
        menuLineRotate[2].style.transform = 'rotate(0)';
        menuLineRotate[3].style.display = 'block';
        headerContact.style.top = '-300px';
        CHECKED = true;
    }
    
});