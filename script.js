document.addEventListener('DOMContentLoaded', function() {
    // Fungsionalitas tombol "Open Invitation"
    const openInvitationButton = document.querySelector('.open-invitation');
    if (openInvitationButton) {
        openInvitationButton.addEventListener('click', function() {
            console.log('Tombol "Open Invitation" diklik!');
            
            // Mengaktifkan kembali scrolling pada body
            document.body.style.overflow = 'auto'; 

            // Mengarahkan ke halaman utama (menggunakan nama file 'main.html' seperti yang Anda minta)
            window.location.href = 'main.html'; 
        });
    }
});