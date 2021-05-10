const btn_login = document.getElementById('btn_login')
const cover = document.getElementById('cover')
const modal = document.getElementById('modal')
const logIn = document.getElementById('logIn')
const signUp = document.getElementById('signUp')


//consts from tab SignUp
const btn_send = document.getElementById('send')
const nameField = document.getElementById('name')
const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')
const checkbox =  document.querySelector("input[name=checkbox]")
//consts from tab LogIn
const btn_sendLog = document.getElementById('sendLog')
const emailFieldLog = document.getElementById('emailLog')
const passwordFieldLog = document.getElementById('passwordLog')

//btns social
const tab1_google = document.getElementById('tab1_google')
const tab1_fb = document.getElementById('tab1_fb')
const tab2_google = document.getElementById('tab2_google')
const tab2_fb = document.getElementById('tab2_fb')
//global vars

const loginName = document.querySelector('.header_login__search-login.btns')
const nickname = document.getElementById('nickname')
console.log(nickname)

nickname.innerHTML = localStorage.getItem('user');

var currentTab = "";

if(nickname.innerHTML!==''){
    loginName.classList.add('active')
    nickname.style.display = "block"
    loginName.style.display = "flex"
    logIn.style.display = "none"
    signUp.style.display = "none"
    loginName.addEventListener('click', ()=>{
        nickname.innerHTML===''
    })
}

nickname.addEventListener('click', ()=>{

    console.log("its you")
    if (nickname.innerHTML=="Logout"){
        console.log("Logout")
        loginName.classList.remove('active')
        nickname.style.display = "none"
        loginName.style.display = "none"
        logIn.style.display = "block"
        signUp.style.display = "block"
        
    }
})

function validate(){
    
    if(currentTab === "tabSignUp"){
        if(nameField.validity.valid 
            &&  emailField.validity.valid 
            && passwordField.validity.valid 
            && checkbox.checked == true){
            if( ValidatePassword(passwordField.value)){

                btn_send.classList.remove('invalid')
            }    
           
        }
    }else if(currentTab === "tabLogIn"){
        if(emailFieldLog.validity.valid && passwordFieldLog.validity.valid ){
            if( ValidatePassword(passwordFieldLog.value)){
                btn_sendLog.classList.remove('invalid')
            }
        }
    }     
}

function ValidatePassword ( value) {
    const passwordLength = 8;
    return value.length>=passwordLength? true : false
}

function showModalLogin (tab){

    console.log(tab)
    cover.classList.remove('hidden')
    document.body.classList.add('notScrollable')
    modal.classList.remove('hidden') 

    if(tab === "logIn"){
        tabSignUp.classList.add('hidden')
        tabLogIn.classList.remove('hidden')
    }else if(tab === "signUp") {
        tabSignUp.classList.remove('hidden')
        tabLogIn.classList.add('hidden')
    
    }else if (tab === "login"){
        tabSignUp.classList.add('hidden')
        tabLogIn.classList.remove('hidden')

    }
}

function closeModalWindow(){
    cover.classList.add('hidden')
    document.body.classList.remove('notScrollable')
    modal.classList.add('hidden') 
}

function openModalLogIn (e){
    cover.classList.remove('hidden')
    console.log(e.button + ' openLogInModal')
}

function openModalSignUp (){
    cover.classList.remove('hidden')
    console.log('openSignUpModal')

}

btn_send.addEventListener('click', ()=>{
    if(btn_send.classList.contains('invalid') )return alert('incorrect password or email')
   
    authUser(nameField.value)
    closeModalWindow()
})
btn_sendLog.addEventListener('click', ()=>{
    if(btn_sendLog.classList.contains('invalid') )return alert('incorrect password or email')
    console.log('btn_sendLog')
    authUser(emailFieldLog.value)
    closeModalWindow()
})

logIn.addEventListener('click',(e) =>{
    currentTab ='tabLogIn';
    showModalLogin("logIn")
} )
signUp.addEventListener('click', (e) =>{
    currentTab ='tabSignUp';
    showModalLogin("signUp")
})

cover.addEventListener('click', closeModalWindow)
btn_login.addEventListener('click', (e) =>{
    currentTab ='tabLogIn'; 
    showModalLogin('login')
})


//inputs field from modal
nameField.addEventListener('input', ()=>{
    validate();
})
emailField.addEventListener('input', ()=>{
    validate();
})
passwordField.addEventListener('input', ()=>{
    validate();
})
checkbox.addEventListener('change',() => { 
    validate();
})
emailFieldLog.addEventListener('input', ()=>{
    validate();
})
passwordFieldLog.addEventListener('input', ()=>{
    validate();
})

//btns socials
function FuncSocialBtns (){
    localStorage.clear();
    console.log("social_fb")
    nickname.innerHTML = "Logout"
    closeModalWindow()
    nickname.style.display = "block"
    loginName.style.display = "block"
    logIn.style.display = "none"
    signUp.style.display = "none"
}

tab1_fb.addEventListener('click', FuncSocialBtns )
tab2_fb.addEventListener('click', FuncSocialBtns )
tab1_google.addEventListener('click', FuncSocialBtns )
tab2_google.addEventListener('click', FuncSocialBtns )

function openPage(pageName, elem){
    console.log(currentTab)
    currentTab = pageName

    var i , content_tab ;
    console.log(pageName, elem, currentTab)
    content_tab = document.getElementsByClassName('content_tab')
    //active_tab = document.getElementById('tabLogIn')
    //console.log(active_tab)

    for(i=0; i<content_tab.length;i++){
        content_tab[i].style.display = "none"
       // elem.classList.remove('active')
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
       //console.log(tablinks[i])
      }

    document.getElementById(pageName).style.display = "block";
    //elem.classList.remove('active')
}

function authUser(name){
    console.log("🚀 ~ file: modals.js ~ line 166 ~ authUser ~ authUser", authUser)
        
    console.log(name)
    nickname.style.display = 'block'
    nickname.innerHTML = name;

    loginName.style.display = "block"
    logIn.style.display = "none"
    signUp.style.display = "none"

    localStorage.setItem( 'user' , `${name}`);
}





