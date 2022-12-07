import reviews from "./reviews.js"

const modeBtn = document.getElementById("modeBtn")
const navbar = document.getElementById("navbar")
const homeLink = document.getElementById("homeLink")
const productLink = document.getElementById("productLink")
const aboutLink = document.getElementById("aboutLink")
const contactLink = document.getElementById("contactLink")
const reviewLink = document.getElementById("reviewLink")
const logoDiv = document.getElementById("logo-div")
const arrowBtn = document.getElementsByClassName("arrowBtn")
const reviewDiv = document.getElementById("reviewDiv")
const formSubmitBtn = document.getElementById("formSubmitBtn")
const formDiv = document.getElementById("formDiv")
const emailInput = document.getElementById("emailInput")
const subjectInput = document.getElementById("subjectInput")
const messageInput = document.getElementById("messageInput")


// DARK MODE

let darkMode = true 

function changeMode(){
        if (darkMode){            
            document.documentElement.setAttribute('data-theme', 'light');    
            navbar.classList.add("navbar-light", "bg-light")
            navbar.classList.remove("navbar-dark", "bg-dark")
            logoDiv.innerHTML = `<img id ="logo" src = "images/logo.png">`
            darkMode = false}
        else {
            document.documentElement.setAttribute('data-theme', 'dark')
            navbar.classList.remove("navbar-light", "bg-light")
            navbar.classList.add("navbar-dark", "bg-dark")
            logoDiv.innerHTML = `<img id ="logo" src = "images/darklogo.png">`

            darkMode = true
        }}



// ACTIVE NAVBAR LINKS (Clicking)

modeBtn.addEventListener("click", changeMode)
homeLink.addEventListener("click", homeActive)
productLink.addEventListener("click", productActive)
aboutLink.addEventListener("click", aboutActive)
contactLink.addEventListener("click", contactActive)
reviewLink.addEventListener("click", reviewActive)

function homeActive(){
    homeLink.classList.add("active")
    productLink.classList.remove("active")
    aboutLink.classList.remove("active")
    reviewLink.classList.remove("active")
    contactLink.classList.remove("active")

}

function productActive(){
    homeLink.classList.remove("active")
    productLink.classList.add("active")
    aboutLink.classList.remove("active")
    reviewLink.classList.remove("active")
    contactLink.classList.remove("active")

}

function aboutActive(){

    homeLink.classList.remove("active")
    productLink.classList.remove("active")
    aboutLink.classList.add("active")
    reviewLink.classList.remove("active")
    contactLink.classList.remove("active")
}

function reviewActive(){

    homeLink.classList.remove("active")
    productLink.classList.remove("active")
    aboutLink.classList.remove("active")
    reviewLink.classList.add("active")
    contactLink.classList.remove("active")

}

function contactActive(){

    homeLink.classList.remove("active")
    productLink.classList.remove("active")
    aboutLink.classList.remove("active")
    reviewLink.classList.remove("active")
    contactLink.classList.add("active")

}

// ACTIVE NAVBAR LINKS (Scrolling)


const thresh = .6

const homeObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        homeActive()
        }
}, { threshold: [thresh] });

homeObserver.observe(document.querySelector("#homeDiv"));


const prodObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        productActive()
        }
}, { threshold: [thresh] });

prodObserver.observe(document.querySelector("#Products"));

const aboutObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        aboutActive()
        }
}, { threshold: [thresh] });

aboutObserver.observe(document.querySelector("#About"));

const reviewObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        reviewActive()
        }
}, { threshold: [thresh] });

reviewObserver.observe(document.querySelector("#Reviews"));


const contactObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        contactActive()
        }
}, { threshold: [thresh] });

contactObserver.observe(document.querySelector("#Contact"));


// REVIEWS

arrowBtn[0].addEventListener("click", prevReview)
arrowBtn[1].addEventListener("click", nextReview)

let reviewNumber = 0

function prevReview(){
    reviewNumber -=1
    if(reviewNumber<0){
        reviewNumber = reviews.length-1
    }
    reviewDiv.innerHTML = reviews[reviewNumber]
}
function nextReview(){
    reviewNumber +=1
    if(reviewNumber>=reviews.length){
        reviewNumber = 0
    }
    reviewDiv.innerHTML = reviews[reviewNumber]
}


// CONTACT FORM

document.addEventListener("keyup", checkInputs)

formSubmitBtn.disabled = true

function checkInputs (){

    console.log(subjectInput.value.length)
if (messageInput.value.length > 0 &&
subjectInput.value.length > 0 &&
emailInput.value.length > 0){
    formSubmitBtn.disabled = false
}
else {formSubmitBtn.disabled = true}
}


formSubmitBtn.addEventListener("click", submitForm)

function submitForm(e){
    e.preventDefault()

    console.log("form sumbitted")
    formSubmitBtn.innerText = "Thank you!"
    setTimeout(()=>{
        formSubmitBtn.innerText = "Submit"
        formSubmitBtn.disabled = true}, 3000)
    formDiv.reset()


    const loginFormData = new FormData(formDiv)
    console.log(loginFormData)
}