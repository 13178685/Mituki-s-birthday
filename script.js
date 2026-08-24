const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    // BEGINを押したことを示す
    document.body.classList.add("intro-start");


    // 少し待って白い光へ
    setTimeout(() => {

        document.body.classList.add("intro-white");

    }, 650);


    // Q1へ移動
    setTimeout(() => {

        window.location.href = "question1.html";

    }, 1100);

});


// ========================================
// 花びら
// ========================================

const petals = document.getElementById("petals");

if (petals) {

    for (let i = 0; i < 25; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.textContent = "🌸";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        petal.style.animationDelay =
            Math.random() * 5 + "s";

        petals.appendChild(petal);

    }

}