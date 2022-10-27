(function(){
    console.log('carrousel');
    let elBtn = document.querySelector(".bouton");
    console.log(elBtn);
    let elCarrousel = document.querySelector(".carrousel");
    let elCarrousel__x = document.querySelector(".carrousel__x");
    let elGalerie = document.querySelector(".galerie");
    let elGalerieImgs = document.querySelectorAll(".galerie img")
    elBtn.addEventListener('mousedown', function(){
        console.log("evenement");
        elCarrousel.classList.add("carrousel--ouvrir");
        for (const elImg of elGalerieImgs){
            console.log(elImg.getAttribute('src'));
        }
    })

    elCarrousel__x.addEventListener('mousedown', function(){
        elCarrousel.classList.remove("carrousel--ouvrir");

    })
})();

