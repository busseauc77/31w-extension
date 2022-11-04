(function(){
    console.log("carrousel")
    let elGalerie = document.querySelector(".galerie")
    let elGalerieImg = document.querySelectorAll(".galerie img")
    let elBouton = document.querySelector('.bouton')
    let elCarrousel = document.querySelector('.carrousel')
    let elCarrousel__x = document.querySelector('.carrousel__x')
    let elCarrousel__figure = document.querySelector('.carrousel__figure')
    let elCarrousel__form = document.querySelector('.carrousel__form')

    // on initialise l'index à zéro, celui qui sera assignée à la première image de la galerie et qu'on implémentera
    let index = 0
    // on initialise une valeur qui nous aidera à remplacer l'image pour une autre seulement s'il y'en a une
    let dernierIndex = -1

    // écouteur d'évènement sur le bouton "ouvrir le carrousel"
    // idéalement, on écoute plutôt la galerie et ou se débarasse du bouton
    elGalerie.addEventListener('mousedown', function(e){
        // on ajoute au carrousel la classe la faisant apparaître sur la page
        elCarrousel.classList.add('carrousel--ouvrir');

        // si on a pas encore assigné des index aux images et boutons (à faire qu'une fois)
        if (index < 2){
         
            for (const elImg of elGalerieImg){
                // pour chaque image de la galerie, insère la dans le carrousel
                ajout_img_dans_carrousel(elImg);
                // on ajoute les boutons radios correspondants (même index)
                ajout_radio_dans_carrousel();
                // puis on change l'index avant de passer à la prochaine image de la galerie
                index++;
            };
        };

        for (const enfant of elCarrousel__figure.children){
            if (e.target.src == enfant.src){
                enfant.classList.add('carrousel__figure__img--activer');
            }
            else {
                enfant.classList.remove('carrousel__figure__img--activer');
            };
        };

        for (const boutonSelect of elCarrousel__form){
            if (e.target.dataset.index === boutonSelect.dataset.index){
                boutonSelect.setAttribute('checked', '');
            }

            else {
                boutonSelect.removeAttribute('checked');
            }
        };
    });

    function ajout_radio_dans_carrousel(){
        let elCarrousel__form__radio = document.createElement('input')
        elCarrousel__form__radio.setAttribute('type','radio')
        elCarrousel__form__radio.classList.add('carrousel__form__rad')
        elCarrousel__form__radio.setAttribute('name','carrousel__form__rad')
        elCarrousel__form__radio.dataset.index = index
        console.log(index)
        elCarrousel__form.appendChild(elCarrousel__form__radio)
    }
/**
 * Ajout d'une img dans le carrousel
 * @param {object dom} elImg 
 */
    function ajout_img_dans_carrousel(elImg){
        elImg.dataset.index = index
        console.log(index)

        console.log(elImg.getAttribute('src'))
        let elCarrouselImg = document.createElement('img')
        elCarrouselImg.setAttribute('src', elImg.getAttribute('src'))
        elCarrouselImg.classList.add('carrousel__figure__img') 
        elCarrousel__figure.appendChild(elCarrouselImg)
    }

    elCarrousel__x.addEventListener('mousedown', function(){
        elCarrousel.classList.remove('carrousel--ouvrir')
    })
})()