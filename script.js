// ================================================
//  SCRIPT.JS - Chocolate & Coffee Safe
// ================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Swiper Catégorie ---
    const swiper = new Swiper('.slider_categorie', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // --- Alerte formulaire contact ---
    // FIX #1 : vérification que l'élément existe avant d'ajouter l'écouteur
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            alert("Nous vous remercions pour l'envoi de votre formulaire ! Nous reviendrons vers vous prochainement.");
        });
    }

    // --- Alerte commande (boutons "Commandez maintenant") ---
    // FIX #1 : suppression de getElementById('choco1') qui n'existe pas dans le HTML
    // et qui faisait planter tout le script. On cible tous les boutons de commande.
    document.querySelectorAll('.btn_cof').forEach(btn => {
        btn.addEventListener('click', function () {
            alert("Votre commande est confirmée. Merci de patienter un moment.");
        });
    });

    // --- Menu Hamburger (bouton ☰) ---
    // FIX #3 : code hamburger présent UNE SEULE FOIS ici, supprimé du HTML inline
    const navbar  = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav_menu');

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('hamburger');
    menuBtn.setAttribute('aria-label', 'Ouvrir le menu');
    menuBtn.innerHTML = '<span></span><span></span><span></span>';
    navbar.appendChild(menuBtn);

    const overlay = document.createElement('div');
    overlay.classList.add('nav_overlay');
    document.body.appendChild(overlay);

    function ouvrirMenu() {
        navMenu.classList.add('open');
        overlay.classList.add('open');
        menuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function fermerMenu() {
        navMenu.classList.remove('open');
        overlay.classList.remove('open');
        menuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
        navMenu.classList.contains('open') ? fermerMenu() : ouvrirMenu();
    });

    overlay.addEventListener('click', fermerMenu);

    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', fermerMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) fermerMenu();
    });

});
