const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const nameOutput = document.getElementById('username')
conts imageSlider = document.getElementById('slider')

submitButton[0].addEventListener("click", function(event){
    if (nameInput.ariaValueMax.length === 0 || emailInput.ariaValueMax.length === 0){
        alert("Nama atau email tidak boleh kosong")
    } else {
        nameOutput.textContent = nameInput.value
    }    
})
var i = 0
const image = [
   "assets/lake landscape.webp",
   "assets/south afrika.webp",
   "assets/stone mountain.webp"
]
function bannerSlide() {
    i += 1
    if (i == images.length) {
        i = 0
    }
    imageSlider.src = image[i]
}
setInterval(bannerSlide. 1000)
