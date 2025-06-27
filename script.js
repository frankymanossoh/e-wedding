document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.particle-container');
    if (container) {
        // Saya akan menggunakan karakter yang sedikit lebih terlihat untuk partikel
        const ornaments = ['*', '.', '*', '.']; 
        const particleCount = 20; // Menambah jumlah partikel sedikit

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('floating-ornament');
            
            particle.textContent = ornaments[Math.floor(Math.random() * ornaments.length)];
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${15 + Math.random() * 10}s`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            // Meningkatkan ukuran font agar partikel lebih terlihat
            particle.style.fontSize = `${1.3 + Math.random() * 1}rem`; 
            
            container.appendChild(particle);
        }
    }

    // Fungsionalitas tombol "Open Invitation" jika ada (misal, scroll ke bagian lain)
    const openInvitationButton = document.querySelector('.open-invitation');
    if (openInvitationButton) {
        openInvitationButton.addEventListener('click', function() {
            // Contoh: Scroll ke bagian selanjutnya dari undangan
            // Anda bisa mengganti ini dengan fungsionalitas lain, misalnya membuka modal, dll.
            console.log('Tombol "Open Invitation" diklik!');
            // window.scrollTo({
            //     top: window.innerHeight, // Scroll ke bawah satu viewport height
            //     behavior: 'smooth'
            // });
            
            // Atau jika ingin menghapus cover dan menampilkan konten utama:
            // document.getElementById('cover').style.display = 'none';
            // document.getElementById('main-content').style.display = 'block'; // Asumsikan ada #main-content
        });
    }
});