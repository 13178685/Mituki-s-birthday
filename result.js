/// ========================================
// 共通：正解
// ========================================

function showCorrect(messageText) {


    const overlay =
        document.getElementById("resultOverlay");

    const title =
        document.getElementById("resultTitle");

    const message =
        document.getElementById("resultMessage");

    const nextButton =
        document.getElementById("nextButton");


    overlay.style.display =
        "flex";


    title.className =
        "correct-pop";


    title.textContent =
        "CORRECT";


    message.innerHTML =
        messageText;


    nextButton.style.display =
        "block";

}



// ========================================
// 共通：不正解
// ========================================

function showWrong(messageText) {

    const overlay =
        document.getElementById("resultOverlay");

    const title =
        document.getElementById("resultTitle");

    const message =
        document.getElementById("resultMessage");

    const nextButton =
        document.getElementById("nextButton");


    // オーバーレイ表示

    overlay.style.display =
        "flex";


    // タイトル

    title.className =
        "wrong-pop";

    title.textContent =
        "TRY AGAIN";


    // メッセージ

    message.innerHTML =
        messageText;


    // 次へボタンは非表示

    nextButton.style.display =
        "none";


    // ====================================
    // 1.5秒後に閉じる
    // ====================================

    setTimeout(() => {

        overlay.style.display =
            "none";


        // 入力欄に戻す

        const answerInput =
            document.getElementById("answer");


        if (answerInput) {

            answerInput.focus();

        }

    }, 1500);

}



// ========================================
// Q2専用
// 暗号 → 解読 → 鍵 → 宝箱 → チケット
// ========================================

function showCipherCorrect(messageText) {


    const overlay =
        document.getElementById("resultOverlay");


    const title =
        document.getElementById("resultTitle");


    const message =
        document.getElementById("resultMessage");


    const nextButton =
        document.getElementById("nextButton");


    const treasureArea =
        document.getElementById("treasureArea");


    const treasureChest =
        document.getElementById("treasureChest");


    const ticketCard =
        document.getElementById("ticketCard");



    // ====================================
    // 初期化
    // ====================================

    overlay.style.display =
        "flex";


    title.className =
        "";


    message.innerHTML =
        "";


    nextButton.style.display =
        "none";


    treasureArea.style.display =
        "none";


    ticketCard.style.display =
        "none";



    // ====================================
    // ENCRYPTED
    // ====================================

    title.textContent =
        "ENCRYPTED";


    setTimeout(() => {

        title.textContent =
            "DJVK";

    }, 700);



    // ====================================
    // DECODING
    // ====================================

    setTimeout(() => {

        title.textContent =
            "DECODING...";

    }, 1400);



    // ====================================
    // LOCKED
    // ====================================

    setTimeout(() => {

        title.textContent =
            "LOCKED";

    }, 2100);



    // ====================================
    // ACCESS GRANTED
    // ====================================

    setTimeout(() => {

        title.textContent =
            "ACCESS GRANTED";


        title.classList.add(
            "access-granted"
        );

    }, 2700);



    // ====================================
    // KEY UNLOCKED
    // ====================================

    setTimeout(() => {


        title.className =
            "key-unlocked";


        title.textContent =
            "KEY UNLOCKED";


        message.innerHTML =
            "暗号が解除された。<br>" +
            "鍵が開いた。";


        treasureArea.style.display =
            "block";


        treasureChest.classList.add(
            "chest-shake"
        );


    }, 3500);



    // ====================================
    // 宝箱
    // ====================================

    treasureChest.onclick =
        () => {


            treasureChest.classList.remove(
                "chest-shake"
            );


            treasureChest.classList.add(
                "chest-opening"
            );


            // フタを開く

            const lid =
                treasureChest.querySelector(
                    ".chest-lid"
                );


            lid.classList.add(
                "lid-open"
            );



            // 光

            const light =
                document.createElement(
                    "div"
                );


            light.className =
                "treasure-light";


            treasureArea.appendChild(
                light
            );



            // チケット登場

            setTimeout(() => {


                treasureArea.style.display =
                    "none";


                title.className =
                    "reward-title";


                title.textContent =
                    "REWARD UNLOCKED";


                message.textContent =
                    "";


                ticketCard.style.display =
                    "block";


                nextButton.style.display =
                    "block";


            }, 1000);

        };



    // ====================================
    // Q3
    // ====================================

    nextButton.onclick =
        () => {


            window.location.href =
                "question3.html";

        };

}