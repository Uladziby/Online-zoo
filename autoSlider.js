const tCarousel = document.getElementById('testi_carousel')
const tContent = document.getElementById('testi_content')

let widthT = tCarousel.offsetWidth;
//лучше всего задать ширину элемента слайдера + gap *2 вместо widthT
window.addEventListener("resize", e => (widthT = tCarousel.offsetWidth));


const slideFuncTesty = ()=>{
    tCarousel.scrollBy(widthT + gap*2, 0)
  if( tCarousel.scrollWidth != 0){
    prev.style.opacity = 1;
  }
  if(tContent.scrollWidth - widthT - gap <= tCarousel.scrollLeft + widthT){
   
    
  }
  //if we are to the end we return to the start
  if(tContent.scrollWidth - widthT - gap <= tCarousel.scrollLeft + widthT){
    tCarousel.scrollBy(-(widthT + gap*2)*6, 0)
    
  }
}

let autoSlideIntervalTesty = setInterval(slideFuncTesty, 8000)
let autoSlideTimeoutTesty = null

//func use for stop autosliding 
const delayAutoSlidingTesty = ()=>{
  clearInterval(autoSlideIntervalTesty)
  autoSlideIntervalTesty = null;

  autoSlideTimeoutTesty = setTimeout(()=>{
    let autoSlideIntervalTesty = setInterval(slideFuncTesty, 8000)
  },20000)
}

tCarousel.addEventListener('click',delayAutoSlidingTesty )