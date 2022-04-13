let menu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelector('.navbar-menu');
let videoBtn = document.querySelectorAll('.video-btn');

menu.addEventListener('click',function(){
 menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-change').src = src;
    });
});
