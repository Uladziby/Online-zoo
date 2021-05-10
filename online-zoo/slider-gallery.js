const next = document.getElementById('next')
const prev = document.getElementById('prev')
const carousel = document.getElementById('carousel')
const content = document.getElementById('content')

const gap = 20
const widthBtns = 52
const widthItem = 450
let slideIndex = 0

let width = carousel.offsetWidth;
imgWidth = document.querySelector('.gallery_content__items li').offsetWidth;

window.addEventListener('resize', (e) => {
  width = carousel.offsetWidth;
  imgWidth = document.querySelector('.gallery_content__items li').offsetWidth;
  console.log(imgWidth)
});

next.addEventListener('click', e => {
    slideIndex++
    //0carousel.scrollLeft+=100
    carousel.scrollTo((imgWidth+gap*2)*slideIndex,0)
    //console.log('carousel.scrollWidth= '+ carousel.scrollWidth,'width= ' +width)
    
    if( slideIndex >= 0){
      console.log(slideIndex)
        console.log("prev is flex",carousel.scrollWidth)
        prev.style.opacity = 1;
        
    }
    if (slideIndex >=3) {
      console.log(slideIndex)
        next.style.opacity = 0.5;
      }
  
})
prev.addEventListener('click', ()=>{
  console.log('carousel.scrollWidth= '+ carousel.scrollWidth ,'width= ' +width)
  slideIndex-=3
    carousel.scrollTo((imgWidth+gap*2)*slideIndex*3,0)
    //carousel.scrollLeft-=100
    //console.log(carousel.scrollWidth, width, gap, carousel.scrollWidth - width - gap , !content.scrollWidth)
    //console.log("next is none",content.scrollWidth - width - gap , carousel.scrollLeft + width)
    if (slideIndex  < 3) {
      console.log(slideIndex)

      console.log("prev is none", carousel.scrollLeft - width - gap)
        
        next.style.opacity = 1;
      }
      if (slideIndex<=0) {
        console.log(slideIndex)

        //console.log("next is flex",!content.scrollWidth - width - gap ,  carousel.scrollLeft + width )
        prev.style.opacity = 0.5;
        
        
      }
    
})


/*
const slideFunc = ()=>{
  carousel.scrollBy(width + gap, 0)
  if( carousel.scrollWidth != 0){
    prev.style.opacity = 1;
  }
  if(content.scrollWidth - width - gap <= carousel.scrollLeft + width){
   
    next.style.opacity = 0.5;
  }
  //if we are to the end we return to the start
  if(content.scrollWidth - width - gap <= carousel.scrollLeft + width){
    carousel.scrollBy(-(width + gap+widthBtns)*6, 0)
    next.style.opacity = 1;
    prev.style.opacity = 0.5;
  }
}

let autoSlideInterval = setInterval(slideFunc, 3000)
let autoSlideTimeout = null

//func use for stop autosliding 
const delayAutoSliding = ()=>{
  clearTimeout(autoSlideTimeout)
  clearInterval(autoSlideInterval)
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(()=>{
    clearInterval(autoSlideInterval)
    autoSlideInterval = setInterval(slideFunc, 3000)
  },3000)
}


carousel.addEventListener('click',delayAutoSliding )
*/