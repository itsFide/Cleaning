let servicesBlock = document.querySelector('.services');
let scrollDown = document.querySelector('.intro-scroll-down');
let priceWrapperBlock = document.querySelector('.price-table-wrapper');
let scrollTopBtn = document.querySelector('.scroll-top');
let whiteBlocks = document.querySelectorAll('.white');
let darkBlocks = document.querySelectorAll('.dark');
window.addEventListener('scroll',()=>{
  if(pageYOffset >= servicesBlock.offsetTop / 2){
    scrollTopBtn.classList.add('active');
    
  } else{
    scrollTopBtn.classList.remove('active');
  }



})
scrollTopBtn.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
scrollDown.addEventListener('click',()=>{
  window.scrollTo({
    top: servicesBlock.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
})
