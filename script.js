document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.particle-container');
    if (container) {
        // Menggunakan karakter salju dan kilau untuk efek yang lebih jelas
        // PASTIKAN FONT DI PERANGKAT PENGGUNA MENDUKUNG KARAKTER INI (umumnya didukung di OS modern)
        const ornaments = ['*', '❅', '❆', '✨', '❄️']; 
        const particleCount = 40; // Meningkatkan jumlah partikel untuk kesan yang lebih lebat

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('floating-ornament');
            
            particle.textContent = ornaments[Math.floor(Math.random() * ornaments.length)];
            
            particle.style.left = `${Math.random() * 100}%`;
            // Sedikit mengurangi durasi animasi agar partikel bergerak sedikit lebih cepat
            particle.style.animationDuration = `${10 + Math.random() * 10}s`; // Rentang 10-20 detik
            particle.style.animationDelay = `${Math.random() * 15}s`;
            // Meningkatkan ukuran font agar partikel sangat terlihat (rentang 1.3rem - 2.3rem)
            particle.style.fontSize = `${1.3 + Math.random() * 1}rem`; 
            
            container.appendChild(particle);
        }
    }

    // Fungsionalitas tombol "Open Invitation"
    const openInvitationButton = document.querySelector('.open-invitation');
    if (openInvitationButton) {
        openInvitationButton.addEventListener('click', function() {
            // Ini adalah tempat Anda akan menambahkan fungsionalitas ketika tombol diklik.
            // Contoh: Menggulir ke bagian berikutnya dari undangan, atau membuka modal.
            
            console.log('Tombol "Open Invitation" diklik!');
            
            // Uncomment salah satu baris di bawah ini jika Anda ingin mengaktifkan fungsionalitas:
            
            // Contoh 1: Menggulir ke bagian selanjutnya dari undangan (jika ada)
            // window.scrollTo({
            //     top: window.innerHeight, // Gulir ke bawah satu tinggi viewport
            //     behavior: 'smooth'      // Animasi gulir halus
            // });
            
            // Contoh 2: Menyembunyikan cover dan menampilkan konten utama (jika ada elemen dengan ID 'main-content')
            // document.getElementById('cover').style.display = 'none';
            // // Asumsikan ada elemen <div id="main-content">...</div> yang awalnya display: none;
            // // Anda harus membuat elemen #main-content di HTML Anda setelah #cover
            // const mainContent = document.getElementById('main-content');
            // if (mainContent) {
            //     mainContent.style.display = 'block'; 
            // }
        });
    }
});