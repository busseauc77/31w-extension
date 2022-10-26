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

function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu = 
    "<div class='boite'>"
    . "<code>Auteur: " . get_the_author() . "</code>"
    . "<date>Date de publication: " . get_the_date() . "</date>"
    . "<h5>Adresse URL" . get_the_guid() . "</h5>"
    . "<h6>Catégorie: " . get_the_category() . "</h6>"
    . '</div> <!-- fin class="boite" -->';
    
    return $contenu;
   }
   add_shortcode('cb_carrousel', 'genere_html');