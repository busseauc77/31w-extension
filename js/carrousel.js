(function(){
    // console.log('carrousel');
    let elGalerie = document.querySelector(".galerie");
    let elGalerieImgs = document.querySelectorAll(".galerie img")

    let elBtn = document.querySelector(".bouton");

    let elCarrousel = document.querySelector(".carrousel");
    let elCarrousel__x = document.querySelector(".carrousel__x");
    let elCarrousel__figure = document.querySelector(".carrousel__figure");
    let elCarrousel__form = document.querySelector(".carrousel__form");
    let index = 0;
    let dernierIndex = elGalerieImgs.length;
    
    elBtn.addEventListener('mousedown', function(){
        // console.log("evenement");

        elCarrousel.classList.add("carrousel--ouvrir");
        for (const elImg of elGalerieImgs){
            ajout_img_dans_carrousel(elImg);
            console.log(index);
            ajout_radio_dans_carrousel(index);
            // index++;

        }    
    })

    function ajout_img_dans_carrousel(elImg){
        let elCarrouselImg = (document.createElement('img'));
        elCarrouselImg.setAttribute('src', elImg.src);
        elCarrouselImg.classList.add('carrousel__figure__img');
        elCarrousel__figure.appendChild(elCarrouselImg);
    }

    function ajout_radio_dans_carrousel(){
        let elCarrousel__Form__Radio = document.createElement('input');
        elCarrousel__Form__Radio.setAttribute('type', 'radio');
        elCarrousel__Form__Radio.classList.add('carrousel__form__rad');
        elCarrousel__Form__Radio.setAttribute('name', 'carrousel__form__rad');
        elCarrousel__Form__Radio.dataset.index = index;
        elCarrousel__form.appendChild(elCarrousel__Form__Radio);
        index++;


        elCarrousel__Form__Radio.addEventListener("mousedown", ()=>{
            console.log(elCarrousel__Form__Radio.dataset.index)
            elCarrousel__figure.children[this.dataset.index].classList.add();
        })

    }

    elCarrousel__x.addEventListener('mousedown', function(){
        elCarrousel.classList.remove("carrousel--ouvrir");

    })
})();

