<template>
    <div class="whatsapp-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
        <div class="whatsapp-label">Contactar al WhatsApp</div>
        <div class="cbuttonwhatsapp">
            <a href="https://wa.me/50683428764" target="_blank">
                <i class="bi bi-whatsapp ciconcwhatsapp"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
.whatsapp-container {
    position: fixed;
    bottom: 60px;
    right: 10px;
    z-index: 6;
    display: flex;
    align-items: center;
    gap: 15px;
}

.cbuttonwhatsapp {
    background-color: #014a36;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 20px;
    border: solid 3px #fff;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 100;
}

.cbuttonwhatsapp:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
}

.cbuttonwhatsapp a {
    color: #fff;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.whatsapp-label {
    background: #014a36;
    color: #fff;
    padding: 12px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    pointer-events: none;
    border: 2px solid #fff;
    z-index: 100;
}

.whatsapp-container:hover .whatsapp-label {
    opacity: 1;
    transform: translateX(0);
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    }
    50% {
        box-shadow: 0 4px 25px rgba(37, 211, 102, 0.7);
    }
}

.cbuttonwhatsapp {
    animation: pulse 2s infinite;
}

.whatsapp-container:hover .cbuttonwhatsapp {
    animation: none;
}

</style>