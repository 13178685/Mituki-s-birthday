// ========================================
// Q4
// THE LAST KEY
// ========================================


// ========================================
// ELEMENTS
// ========================================

const inputs =
    document.querySelectorAll(
        ".q4-inputs input"
    );


const checkButton =
    document.getElementById(
        "q4Check"
    );


const message =
    document.getElementById(
        "q4Message"
    );


const lockScreen =
    document.getElementById(
        "q4LockScreen"
    );


const treasureChest =
    document.getElementById(
        "finalChest"
    );


const finalCard =
    document.getElementById(
        "finalCard"
    );


const chestTapText =
    document.getElementById(
        "chestTapText"
    );


// ========================================
// INPUT
// ========================================

inputs.forEach((input, index) => {


    input.addEventListener(
        "input",
        () => {


            // 英字以外を削除
            // 大文字に変換

            input.value =
                input.value
                    .replace(
                        /[^a-zA-Z]/g,
                        ""
                    )
                    .toUpperCase()
                    .slice(0, 1);


            // 次の入力欄へ

            if (
                input.value !== "" &&
                index < inputs.length - 1
            ) {

                inputs[index + 1].focus();

            }

        }
    );


    // ====================================
    // BACKSPACE / ENTER
    // ====================================

    input.addEventListener(
        "keydown",
        (event) => {


            // Backspaceで
            // 前の入力欄へ

            if (
                event.key === "Backspace" &&
                input.value === "" &&
                index > 0
            ) {

                inputs[index - 1].focus();

            }


            // 最後の入力欄でEnter

            if (
                event.key === "Enter" &&
                index === inputs.length - 1
            ) {

                checkAnswer();

            }

        }
    );

});


// ========================================
// BUTTON
// ========================================

checkButton.addEventListener(
    "click",
    checkAnswer
);


// ========================================
// ANSWER CHECK
// ========================================

function checkAnswer() {


    let answer = "";


    inputs.forEach((input) => {

        answer += input.value;

    });


    // ====================================
    // 正解
    // ====================================

    if (
        answer === "LOVE"
    ) {

        unlock();

    }


    // ====================================
    // 不正解
    // ====================================

    else {


        message.textContent =
            "TRY AGAIN";


        message.className =
            "q4-wrong";


        inputs.forEach((input) => {

            input.classList.add(
                "q4-error"
            );

        });


        setTimeout(() => {


            inputs.forEach((input) => {

                input.classList.remove(
                    "q4-error"
                );

            });

        }, 500);

    }

}


// ========================================
// UNLOCK
// 正解後の演出
// ========================================

function unlock() {


    // ====================================
    // 入力を無効化
    // ====================================

    inputs.forEach((input) => {

        input.disabled = true;

    });


    checkButton.disabled = true;


    message.textContent = "";


    // ====================================
    // FINAL VERIFICATION
    // ====================================

    setTimeout(() => {

        lockScreen.classList.add(
            "show"
        );

    }, 300);


    // ====================================
    // KEY ACCEPTED
    // ====================================

    setTimeout(() => {

        lockScreen.classList.add(
            "accepted"
        );

    }, 1800);


    // ====================================
    // 宝箱登場
    // ====================================

    setTimeout(() => {


        // ロック画面を消す

        lockScreen.classList.remove(
            "show"
        );


        // =================================
        // LOVE入力画面を消す
        // =================================

        const q4Container =
            document.querySelector(
                ".q4-container"
            );


        q4Container.classList.add(
            "q4-hidden"
        );


        // =================================
        // 宝箱を表示
        // =================================

        treasureChest.classList.add(
            "show"
        );


        // =================================
        // TAP TO OPENを表示
        // =================================

        chestTapText.classList.add(
            "show"
        );


    }, 3300);

}


// ========================================
// TREASURE CHEST
// 宝箱をタップ
// ========================================

treasureChest.addEventListener(
    "click",
    openTreasureChest
);


// ========================================
// TAP TO OPEN
// 文字をタップ
// ========================================

chestTapText.addEventListener(
    "click",
    openTreasureChest
);


// ========================================
// OPEN TREASURE CHEST
// ========================================

function openTreasureChest() {


    // ====================================
    // 二重タップ防止
    // ====================================

    if (
        treasureChest.classList.contains(
            "opening"
        )
    ) {

        return;

    }


    // ====================================
    // 開封開始
    // ====================================

    treasureChest.classList.add(
        "opening"
    );


    // ====================================
    // TAP TO OPENを消す
    // ====================================

    chestTapText.classList.add(
        "hide"
    );


    // ====================================
    // 光が漏れる
    // ====================================

    setTimeout(() => {

        treasureChest.classList.add(
            "glow"
        );

    }, 100);


    // ====================================
    // フタが開く
    // ====================================

    setTimeout(() => {

        treasureChest.classList.add(
            "open"
        );

    }, 1000);


    // ====================================
    // 開いた状態を少し見せる
    // ====================================

    setTimeout(() => {


        // 宝箱を消す

        treasureChest.classList.add(
            "hide"
        );


    }, 4000);


    // ====================================
    // MESSAGE CARD
    // ====================================

    setTimeout(() => {


        finalCard.classList.add(
            "show"
        );


    }, 4500);

}
