<?php
/*
Plugin Name: Tarot Interactivo
Description: Un plugin para mostrar un juego interactivo de tarot.
Version: 1.0
Author: Tu Nombre
*/

if (!defined('ABSPATH')) {
    exit; // Evitar acceso directo.
}

// Registrar los scripts y estilos.
function tarot_enqueue_assets() {
    wp_enqueue_style('tarot-estilos', plugin_dir_url(__FILE__) . 'assets/Estilos.css');
    wp_enqueue_script('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', [], null, true);
    wp_enqueue_script('tarot-funcionalidad', plugin_dir_url(__FILE__) . 'assets/Funcionalidad.js', ['jquery'], null, true);
}
add_action('wp_enqueue_scripts', 'tarot_enqueue_assets');

// Crear el shortcode para mostrar el juego.
function tarot_render_shortcode() {
    ob_start(); ?>
    <div id="particles-js"></div>

    <!-- Pantalla 1 con el título y botón -->
    <div class="start-container" id="startContainer">
        <h1>¿Sobre qué tema deseas consultar?</h1>
        <button class="start-button" onclick="startTarot('amor')">Amor</button>
        <button class="start-button" onclick="startTarot('dinero')">Dinero</button>
        <button class="start-button" onclick="startTarot('futuro')">Familia</button>
    </div>

    <!-- Pantalla 2: Carrusel de cartas -->
    <div class="carousel-container" id="carouselContainer" style="display:none;">
        <div id="cardContainer">
            <h2>Selecciona 3 cartas</h2>
        </div>
    </div>

    <!-- Pantalla 3: Resultados -->
    <div class="result-container" id="resultContainer" style="display:none;">
        <div class="result-panel">
            <div class="selected-cards" id="selectedCardsContainer"></div>
            <h3 class="title">Elegiste las siguientes cartas</h3>
            <div class="card-names" id="selectedCardNames"></div>
            <h3 class="subtitle">Esto dice tu futuro</h3>
            <div class="description" id="descriptions"></div>
        </div>
        <button class="boton-habla" onclick="redirectToMensajeria()">Habla con el maestro</button>
    </div>
    <?php return ob_get_clean();
}
add_shortcode('tarot_interactivo', 'tarot_render_shortcode');
