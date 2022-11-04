<?php
/**
 * 
 * @package Carrousel
 * @author Camille Busseau
 * @copyright Collège de Maisonneuve
 * @license GPL-2.0-or-later
 * @version 1.0.0
*/
/*
Plugin Name: cb_carrousel
Description: Permet d'afficher en boîte modale de l'image sélectionnée dans une galerie et d'ensuite accéder à toutes les images de celle-ci
Plugin URI: https://github.com/busseauc77/31w-extension
Author: Camille Busseau - 2195352
Author URI: https://github.com/busseauc77
Version: 1.0.0
*/

// filemtime() // retourne en milliseconde le temps de la dernière sauvegarde
// plugin_dir_path() // retourne le chemin du répertoire du plugin
// __FILE__ // le fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts // le hook

function cb_enqueue(){

    $version_css = filemtime(plugin_dir_path(__file__). "style.css");
    $version_js = filemtime(plugin_dir_path(__file__). "js/carrousel.js");
    /* var_dump(__FILE__); die(); */
    wp_enqueue_style("cb_carrousel",plugin_dir_url( __FILE__)  . "style.css",
    array(),
    $version_css,
    false);

wp_enqueue_script("cb_carrousel", plugin_dir_url( __FILE__) . "js/carrousel.js",
                array(),
                $version_js,
                true);
    
};

add_action("wp_enqueue_scripts","cb_enqueue");


function cb_boite_carrousel(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu = 
        "<div class='carrousel'>"
            // --fermer parce que ACTION __figure parce que élément se trouve dans carrousel
            .'<button class="carrousel__x">X</button>'
            .'<figure class="carrousel__figure"></figure>'
            .'<form class="carrousel__form"></form>'
        .'</div> <!-- fin class="carrousel" -->';
        
    return $contenu;
}

add_shortcode('cb_carrousel', 'cb_boite_carrousel');

   