const titleProject = document.querySelectorAll('.title-c');
const card = document.querySelectorAll('.card');


for(let i = 0; i < 6; i++) {
    card[i].addEventListener('mouseover', () => {
        titleProject[i].style.color = 'transparent';
    })

    card[i].addEventListener('mouseout', () => {
        titleProject[i].style.color = '#DAA520';
    })    
};




