function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("hearts");
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Tạo trái tim liên tục mỗi 300ms
setInterval(createHeart, 300);
