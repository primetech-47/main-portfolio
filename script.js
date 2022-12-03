const buttonContainer = document.querySelector('.button-container');
const navLinks = document.querySelectorAll('.nav-link');

buttonContainer .addEventListener('click', ()=>{
    document.body.classList.toggle('open-menu');
    document.body.style,overflow=document.body.style.overflow=='hiden' ? 'auto' : 'hidden'
});
navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('open-menu');  
        document.body.style,overflow='hidden'
    });
});

