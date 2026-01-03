   // Toggle menu mobile
        function toggleMenu() {
            const nav = document.getElementById('mainNav');
            const overlay = document.getElementById('menuOverlay');
            const toggle = document.querySelector('.menu-toggle');
            
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Animation du bouton hamburger
            if (nav.classList.contains('active')) {
                toggle.innerHTML = '✕';
            } else {
                toggle.innerHTML = '☰';
            }
        }

        // Fermer le menu
        function closeMenu() {
            const nav = document.getElementById('mainNav');
            const overlay = document.getElementById('menuOverlay');
            const toggle = document.querySelector('.menu-toggle');
            
            nav.classList.remove('active');
            overlay.classList.remove('active');
            toggle.innerHTML = '☰';
        }


      