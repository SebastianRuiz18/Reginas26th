document.addEventListener('DOMContentLoaded', () => {
    
    // CONFIGURACIÓN DEL COUNTDOWN
    // Fecha objetivo: 17 de Mayo, 2026 a las 2:30 PM PST
    const targetDate = new Date("2026-05-17T14:30:00-07:00").getTime();

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d < 10 ? '0' + d : d;
        document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
        document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
        document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector(".countdown-section").innerHTML = "<p class='countdown-label'>¡EL EVENTO HA COMENZADO!</p>";
        }
    }, 1000);
});