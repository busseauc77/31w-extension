(function(){
    let elmGalerie = document.querySelector(".galerie")
    let elmGalerieImg = document.querySelectorAll(".galerie img")
    let elmBouton = document.querySelector('.bouton')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__x = document.querySelector('.carrousel__x')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__form = document.querySelector('.carrousel__form')
    let index = 0
    let dernierIndex = -1

    console.log(elmBouton);

    if(elmBouton){
        elmBouton.addEventListener('mousedown', function(){
            elmCarrousel.classList.add('carrousel--ouvrir')
            for (const elmImg of elmGalerieImg){
                ajout_img_dans_carrousel(elmImg)
                ajout_radio_dans_carrousel()
                elmImg.addEventListener('mousedown', function(){
                    if (dernierIndex != -1){
                                elmCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer')  
                    }
                    elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer')
                    dernierIndex = this.dataset.index
                })
            }
        })
    }

function ajout_radio_dans_carrousel(){
    let elmCarrousel__form__radio = document.createElement('input')
    elmCarrousel__form__radio.setAttribute('type','radio')
    elmCarrousel__form__radio.classList.add('carrousel__form__rad')
    elmCarrousel__form__radio.setAttribute('name','carrousel__form__rad')
    elmCarrousel__form__radio.dataset.index = index
    index++
    elmCarrousel__form.appendChild(elmCarrousel__form__radio)

    elmCarrousel__form__radio.addEventListener('mousedown', function(){

        if (dernierIndex != -1)
        {
            elmCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer')  
        }
        elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer')
        dernierIndex = this.dataset.index
    })
}
/**
 * Ajout d'une img dans le carrousel
 * @param {object dom} elmImg 
 */

    function ajout_img_dans_carrousel(elmImg)
    {
        elmImg.dataset.index = index;
        let elmCarrouselImg = document.createElement('img')
        elmCarrouselImg.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrouselImg.classList.add('carrousel__figure__img') 
        elmCarrousel__figure.appendChild(elmCarrouselImg) 
    }

    if (elmCarrousel__x){
        elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir')
        })
    }
})()