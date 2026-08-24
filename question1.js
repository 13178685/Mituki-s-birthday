const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");


// ========================================
// 回答ボタン
// ========================================

checkButton.addEventListener("click", () => {

    const answer = document.getElementById("answer").value;


    if (answer === "0926") {

        showCorrect(
            "思い出をたどれたね 🎉<br>この数字は未来への鍵。"
        );

    } else {

        showWrong(
            "もう一度写真の順番を確認してみて 💭"
        );

    }

});


// ========================================
// 次へボタン
// Q1 → Q2 特別トランジション
// ========================================

nextButton.addEventListener("click", () => {

    // 二重クリック防止
    nextButton.disabled = true;

    // ページ全体に終了クラスを追加
    document.body.classList.add("q1-transition");

    // 少し待ってからQ2へ
    setTimeout(() => {

        window.location.href = "question2.html";

    }, 1600);

});


// ========================================
// 写真拡大
// ========================================

const images = document.querySelectorAll(".zoom");

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");


images.forEach((image) => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImage.src = image.src;

    });

});


modal.addEventListener("click", () => {

    modal.style.display = "none";

});