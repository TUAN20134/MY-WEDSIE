function changeSticker() {
    const stickers = [
        "https://i.imgur.com/6bK5Qp0.png",
        "https://i.imgur.com/MhF9jmw.png",
        "https://i.imgur.com/9D8PjI6.png"
    ];
    
    const randomIndex = Math.floor(Math.random() * stickers.length);
    document.getElementById("princessSticker").src = stickers[randomIndex];
}
