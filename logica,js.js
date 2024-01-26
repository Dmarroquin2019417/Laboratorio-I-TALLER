const mostrarMasBtn = document.getElementById('mostrarMasBtn');
        const informacionExtra = document.getElementById('informacionExtra');

        mostrarMasBtn.addEventListener('click', function () {
            informacionExtra.classList.toggle('hidden');
        });
