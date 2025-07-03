let image_slider=document.getElementsByClassName('image_slider');
let etap = 0;
let nbr_image = image_slider.length;

let precedent = document.querySelector('.precedent')
let suivant =document.querySelector('.suivant')

function enleverActiveImage() {
    for(let i=0;i<nbr_image;i++){
        image_slider[i].classList.remove('active');

    }
}
suivant.addEventListener('click',function(){
    etap++;
    if(etap >= nbr_image){
        etap = 0;
    }
    enleverActiveImage();
    image_slider[etap].classList.add('active');
})
precedent.addEventListener('click',function(){
    etap --;
    if(etap < 0){
        etap = nbr_image - 1;
    }
    enleverActiveImage();
    image_slider[etap].classList.add('active');
})
setInterval(function(){
    etap++;
    if(etap >= nbr_image){
        etap =0;
    }
    enleverActiveImage();
    image_slider[etap].classList.add('active');
},4000)