document.querySelector('.dropbox').addEventListener('click', ()=>{
    document.querySelector('.dropbox__icon').classList.toggle('dropbox__icon--active');
    document.querySelector('.dropbox__content').classList.toggle('dropbox__content--active');
});

document.querySelector('.burger').addEventListener('click', ()=>{
    document.querySelector('.burger').classList.toggle('burger--active');
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu--active');
});
