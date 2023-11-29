document.addEventListener("DOMContentLoaded", function () {
    const activateGPSButton = document.getElementById("activateGPS");

    activateGPSButton.addEventListener("click", function () {
        // Periksa apakah browser mendukung geolocation
        if ("geolocation" in navigator) {
            // Mendapatkan lokasi pengguna
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    alert("Lokasi Anda: " + position.coords.latitude + ", " + position.coords.longitude);
                },
                function (error) {
                    alert("Gagal mendapatkan lokasi. Periksa apakah GPS Anda aktif.");
                }
            );
        } else {
            alert("Maaf, browser Anda tidak mendukung geolocation.");
        }
    });
});


function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTimeDisplay");
    const currentDateTime = new Date();
    
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: false };

    const formattedDate = currentDateTime.toLocaleDateString('en-US', dateOptions);
    const formattedTime = currentDateTime.toLocaleTimeString('en-US', timeOptions);

    const formattedDateTime = `${formattedDate} - ${formattedTime}`;

    // Tampilkan tanggal dan jam di elemen HTML
    dateTimeElement.textContent = formattedDateTime;
}

// Panggil updateDateTime saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", updateDateTime);

    // pindah ke posisi paling bawah
function scrollToBottom() {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
}