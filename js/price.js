// let servicesBlock = document.querySelector('.services');
let priceWrapperBlock = document.querySelector('.price-table-wrapper');
let scrollTopBtn = document.querySelector('.scroll-top');
let whiteBlocks = document.querySelectorAll('.white');
let darkBlocks = document.querySelectorAll('.dark');
window.addEventListener('scroll',()=>{
  if(pageYOffset >= priceWrapperBlock.offsetTop / 2){
    scrollTopBtn.classList.add('active');
    
  } else{
    scrollTopBtn.classList.remove('active');
  }

    if(!scrollTopBtn.classList.contains('active')){
    priceWrapperBlock.classList.add('no-bg');
    } else{
        priceWrapperBlock.classList.remove('no-bg');
    }

})

scrollTopBtn.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})