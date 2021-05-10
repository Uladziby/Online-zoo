const btn_minus = document.getElementById('minus')
const btn_plus = document.getElementById('plus')
const mapImg = document.getElementById('map')
const wrapper = document.getElementById('map__wrapper');
const header = document.getElementById('header');
const footer = document.getElementById('footer');


/* const EaglesImg = document.querySelector('#Eagles');
const GorillasImg = document.querySelector('#Gorillas');
const AlligatorsImg = document.querySelector('#Alligators');
const PandasImg = document.querySelector('#Pandas'); */

const itemsAnimals = document.querySelectorAll('a#Pandas,a#Gorillas,a#Eagles,a#Alligators');


let topIndent = 0;
let leftIndent = 0;


const calculateCoords = (e, elem) => {
    var box = elem.getBoundingClientRect();
    topIndent = e.pageY - box.top + pageYOffset  
    leftIndent = e.pageX - box.left + pageXOffset  

}


const moveAt = (e) => {
    mapImg.style.left = e.pageX - leftIndent +'px'

    
    if(e.pageX >= wrapper.offsetWidth){
        stopDrag();
    } else if (e.pageX <=0){
        stopDrag()
    }
    mapImg.style.top = e.pageY -400 - topIndent +'px'


    const shiftX = e.pageX - leftIndent;
    const shiftY = e.pageY - topIndent;  

}


//stop drag for stopped all activities
const stopDrag = () => {
    document.removeEventListener('mousemove', moveAt)
    mapImg.removeEventListener('mouseup', stopDrag)
}


mapImg.addEventListener('mousedown', (e)=>{
    calculateCoords (e, mapImg);

    moveAt(e)

    document.addEventListener('mousemove',moveAt )
    mapImg.addEventListener('mouseup', stopDrag )
  
})

mapImg.ondragstart = function(){
    return false;
}

header.addEventListener('mouseenter', stopDrag)
footer.addEventListener('mouseenter', stopDrag)

let startWidth = 1467
let startHeight = 912


function funcZoomIn(){
   
    console.log('+')
    console.log('mapImg.width '+ mapImg.width,'mapImg.heigth '+ mapImg.height )
    
    let prevWidth = mapImg.width
    let prevHeight = mapImg.height

    if(mapImg.width <= wrapper.offsetWidth*2){
        mapImg.style.width = `${prevWidth*1.25}px`
        mapImg.style.height = `${prevHeight*1.25}px`
        console.log('mapImg.width '+ mapImg.width, 'mapImg.heigth '+ mapImg.height)
        
        zoomImage( mapImg.width, mapImg.height)          
    } 
}
function funcZoomOut(){
    console.log('-')
    let prevWidth = mapImg.width
    if(mapImg.width <= wrapper.offsetWidth*2){
        
        mapImg.style.width = `${prevWidth/1.25}px`
        if(mapImg.width <= wrapper.offsetWidth){
            
            //mapImg.style.width =  `${mapImg.offsetWidth}px`
        zoomImage( mapImg.width, mapImg.height)
        }
    }    
}

btn_plus.addEventListener('click',funcZoomIn)
btn_minus.addEventListener('click',funcZoomOut)


function zoomImage(width, height){
    this.width = width
    this.height = height
    let arrTopCoords = [];
    let arrLeftCoords = [];
    let coeff= this.width/startWidth
    console.log("🚀 ~ file: map.js ~ line 181 ~ zoomImage ~ coeff", coeff)


    itemsAnimals.forEach(item => {
        // console.log("🚀 ~ file: map.js ~ line 184 ~ zoomImage ~ item", item)
        
        arrTopCoords.push(parseInt(window.getComputedStyle(item).top));
        // console.log(arrTopCoords)
        arrLeftCoords.push(parseInt(window.getComputedStyle(item).left))

        item.style.left = item.left* coeff + 'px';
        console.log("🚀 ~ file: map.js ~ line 189 ~ zoomImage", item.offsetTop, item.offsetLeft )
        item.style.top =  item.offsetTop* coeff + 'px';
        
    });
}
