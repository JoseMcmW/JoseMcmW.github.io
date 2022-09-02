const imgBoxes = document.querySelectorAll('.skillsImg');
const textImg = document.querySelectorAll('.invisibleText');

for(let i = 0; i < 11; i++) {
    imgBoxes[i].addEventListener('mouseover', function onMouseOver() {
        if(textImg[i].classList.contains('invisibleText')){
            textImg[i].classList.remove('invisibleText')
        } 
    })
}







