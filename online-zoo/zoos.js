const btn_fav = document.getElementById('favorite')
const btn_favActive = document.getElementById('favorite-active')


function funcAddToFavorite(){
    console.log("🚀 ~ file: zoos.js ~ line 6 ~ funcAddToFavorite ~ funcAddToFavorite", funcAddToFavorite)
      
    btn_favActive.classList.remove('non-active')    
    btn_fav.classList.add('non-active')


    //btn_fav.style.display = "none"
}

function funcRemoveFromFavorite(){
    console.log("🚀 ~ file: zoos.js ~ line 10 ~ funcRemoveFromFavorite ~ funcRemoveFromFavorite", funcRemoveFromFavorite)
    btn_fav.classList.remove('non-active')
    btn_favActive.classList.add('non-active')


}

btn_fav.addEventListener('click', funcAddToFavorite)
btn_favActive.addEventListener('click', funcRemoveFromFavorite)