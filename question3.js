// ========================================
// Q3
// MEMORY ARCHIVE
// ========================================


// ========================================
// 要素取得
// ========================================

const memoryCards =
    document.querySelectorAll(".memory-card");

const finalArea =
    document.getElementById("finalArea");


// ========================================
// 各メモリーカード
// ========================================

memoryCards.forEach((card) => {

    const inputs =
        card.querySelectorAll(
            ".letter-inputs input"
        );

    const checkButton =
        card.querySelector(
            ".memory-check"
        );

    const message =
        card.querySelector(
            ".card-message"
        );

    const answer =
        card.dataset.answer;


    // ====================================
    // 入力処理
    // ====================================

    inputs.forEach((input, index) => {

        input.addEventListener(
            "input",
            () => {

                input.value =
                    input.value
                        .replace(/[^a-zA-Z]/g, "")
                        .toUpperCase()
                        .slice(0, 1);


                // 次の入力欄へ移動
                if (
                    input.value !== "" &&
                    index < inputs.length - 1
                ) {

                    inputs[index + 1].focus();

                }

            }
        );


        // =================================
        // Backspace
        // =================================

        input.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Backspace" &&
                    input.value === "" &&
                    index > 0
                ) {

                    inputs[index - 1].focus();

                }

            }
        );

    });


    // ====================================
    // Enterキー
    // ====================================

    inputs[
        inputs.length - 1
    ].addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                checkAnswer();

            }

        }
    );


    // ====================================
    // CHECKボタン
    // ====================================

    checkButton.addEventListener(
        "click",
        checkAnswer
    );


    // ====================================
    // 回答チェック
    // ====================================

    function checkAnswer() {

        // すでに正解していたら何もしない
        if (
            card.classList.contains("solved")
        ) {

            return;

        }


        let userAnswer = "";


        inputs.forEach(
            (input) => {

                userAnswer += input.value;

            }
        );


        userAnswer =
            userAnswer.toUpperCase();


        // =================================
        // 正解
        // =================================

        if (
            userAnswer === answer
        ) {

            // 入力欄をロック
            inputs.forEach(
                (input) => {

                    input.disabled = true;

                }
            );


            checkButton.disabled = true;


            // 正解演出
            playMemoryUnlock(card);


            // solved
            card.classList.add(
                "solved"
            );


            // 全カード確認
            checkAllCards();

        }


        // =================================
        // 不正解
        // =================================

        else {

            message.textContent =
                "TRY AGAIN";

            message.className =
                "card-message wrong";


            card.classList.remove(
                "shake"
            );


            // アニメーション再スタート
            void card.offsetWidth;


            card.classList.add(
                "shake"
            );


            setTimeout(
                () => {

                    card.classList.remove(
                        "shake"
                    );

                },
                500
            );

        }

    }


    // ====================================
    // MEMORY UNLOCK 演出
    // ====================================

    function playMemoryUnlock(card) {

        const message =
            card.querySelector(
                ".card-message"
            );


        // --------------------------------
        // STEP 1
        // 入力欄を光らせる
        // --------------------------------

        card.classList.add(
            "unlock-start"
        );


        // --------------------------------
        // STEP 2
        // 光のライン
        // --------------------------------

        setTimeout(
            () => {

                card.classList.add(
                    "light-scan"
                );

            },
            150
        );


        // --------------------------------
        // STEP 3
        // MEMORY FOUND
        // --------------------------------

        setTimeout(
            () => {

                message.textContent =
                    "MEMORY FOUND";

                message.className =
                    "card-message correct memory-found";

            },
            650
        );


        // --------------------------------
        // STEP 4
        // カードを裏返す
        // --------------------------------

        setTimeout(
            () => {

                card.classList.add(
                    "flipped"
                );

            },
            1300
        );


        // --------------------------------
        // STEP 5
        // 数字を出現
        // --------------------------------

        setTimeout(
            () => {

                const number =
                    card.querySelector(
                        ".key-number"
                    );


                if (number) {

                    number.classList.add(
                        "number-reveal"
                    );

                }

            },
            1750
        );


        // --------------------------------
        // STEP 6
        // 演出終了
        // --------------------------------

        setTimeout(
            () => {

                card.classList.remove(
                    "unlock-start"
                );

                card.classList.remove(
                    "light-scan"
                );

            },
            2300
        );

    }

});


// ========================================
// 4枚すべて正解したか
// ========================================

function checkAllCards() {

    const solvedCards =
        document.querySelectorAll(
            ".memory-card.solved"
        );


    if (
        solvedCards.length ===
        memoryCards.length
    ) {

        setTimeout(
            () => {

                finalArea.style.display =
                    "block";


                finalArea.classList.add(
                    "final-show"
                );


                finalArea.scrollIntoView({
                    behavior: "smooth"
                });

            },
            2600
        );

    }

}


// ========================================
// 最終コード入力
// ========================================

const finalInputs =
    document.querySelectorAll(
        ".final-inputs input"
    );


finalInputs.forEach(
    (input, index) => {


        // =================================
        // 数字入力
        // =================================

        input.addEventListener(
            "input",
            () => {

                input.value =
                    input.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 1);


                // 次の入力欄へ
                if (
                    input.value !== "" &&
                    index <
                    finalInputs.length - 1
                ) {

                    finalInputs[
                        index + 1
                    ].focus();

                }

            }
        );


        // =================================
        // キーボード操作
        // =================================

        input.addEventListener(
            "keydown",
            (event) => {


                // Backspace
                if (
                    event.key === "Backspace" &&
                    input.value === "" &&
                    index > 0
                ) {

                    finalInputs[
                        index - 1
                    ].focus();

                }


                // Enter
                if (
                    event.key === "Enter" &&
                    index ===
                    finalInputs.length - 1
                ) {

                    checkFinal();

                }

            }
        );

    }
);


// ========================================
// 最終回答関連
// ========================================

const finalCheck =
    document.getElementById(
        "finalCheck"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


// ========================================
// UNLOCKボタン
// ========================================

finalCheck.addEventListener(
    "click",
    checkFinal
);


// ========================================
// 最終回答チェック
// ========================================

function checkFinal() {

    let answer = "";


    finalInputs.forEach(
        (input) => {

            answer += input.value;

        }
    );


    // ====================================
    // 正解
    // ====================================

    if (
        answer === "1003"
    ) {

        // 入力欄をロック
        finalInputs.forEach(
            (input) => {

                input.disabled = true;

            }
        );


        // UNLOCKボタンを消す
        finalCheck.style.display =
            "none";


        // 正解画面を表示
        showQ3CorrectScreen();


        return;

    }


    // ====================================
    // 不正解
    // ====================================

    finalMessage.textContent =
        "TRY AGAIN";

    finalMessage.className =
        "final-wrong";


    finalInputs.forEach(
        (input) => {

            input.classList.add(
                "input-error"
            );

        }
    );


    setTimeout(
        () => {

            finalInputs.forEach(
                (input) => {

                    input.classList.remove(
                        "input-error"
                    );

                }
            );

        },
        500
    );

}


// ========================================
// Q3 正解画面
// ========================================

function showQ3CorrectScreen() {

    // ------------------------------------
    // オーバーレイ作成
    // ------------------------------------

    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "q3CorrectOverlay";


    // ------------------------------------
    // 中身
    // ------------------------------------

    overlay.innerHTML = `

        <div class="q3-correct-box">

            <div class="q3-correct-icon">
                ✦
            </div>


            <p class="q3-correct-label">
                MEMORY ARCHIVE // 03
            </p>


            <h2>
                ACCESS GRANTED
            </h2>


            <div class="q3-correct-line"></div>


            <p class="q3-correct-message">
                すべての記憶がつながった。
            </p>


            <p class="q3-correct-key">
                KEY : 1003
            </p>


            <button id="q3NextButton">
                QUESTION 4
            </button>

        </div>

    `;


    // ------------------------------------
    // bodyに追加
    // ------------------------------------

    document.body.appendChild(
        overlay
    );


    // ------------------------------------
    // 少し待って表示
    // ------------------------------------

    requestAnimationFrame(
        () => {

            overlay.classList.add(
                "show"
            );

        }
    );


    // ------------------------------------
    // 最終演出
    // ------------------------------------

    createFinalEffect();


// ------------------------------------
// Q4へ
// Q3 → Q4 TRANSITION
// ------------------------------------

const q3NextButton =
    document.getElementById(
        "q3NextButton"
    );


q3NextButton.addEventListener(
    "click",
    () => {

        // ====================================
        // 二重クリック防止
        // ====================================

        q3NextButton.disabled = true;


        // ====================================
        // Q3正解画面を完全に消す
        // ====================================

        const correctOverlay =
            document.getElementById(
                "q3CorrectOverlay"
            );


        if (correctOverlay) {

            correctOverlay.classList.remove(
                "show"
            );

            // CSSの競合に関係なく確実に消す
            correctOverlay.style.opacity = "0";
            correctOverlay.style.visibility = "hidden";
            correctOverlay.style.pointerEvents = "none";

        }


        // ====================================
        // Q3 → Q4 演出開始
        // ====================================

        setTimeout(
            () => {

                document.body.classList.add(
                    "q3-to-q4-start"
                );

            },
            200
        );


        // ====================================
        // 中央から光
        // ====================================

        setTimeout(
            () => {

                document.body.classList.add(
                    "q3-to-q4-light"
                );

            },
            600
        );


        // ====================================
        // Q4へ
        // ====================================

        setTimeout(
            () => {

                window.location.href =
                    "question4.html";

            },
            1400
        );

    }
);

}


// ========================================
// 最終演出
// ========================================

function createFinalEffect() {

    const finalCode =
        document.querySelector(
            ".final-code"
        );


    // ------------------------------------
    // 最終コードを光らせる
    // ------------------------------------

    if (finalCode) {

        finalCode.classList.add(
            "code-unlocked"
        );

    }


    // ------------------------------------
    // 光の粒
    // ------------------------------------

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "memory-particle";


        particle.textContent =
            "✦";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDelay =
            Math.random() * 0.8 + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            2500
        );

    }

}