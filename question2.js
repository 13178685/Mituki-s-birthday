const checkButton =
    document.getElementById("checkButton");

const hintButton =
    document.getElementById("hintButton");

const hintMessage =
    document.getElementById("hintMessage");

const answerInput =
    document.getElementById("answer");



// ========================================
// ヒント
// ========================================

const hints = [

`時計は進むだけじゃない。
戻ることもある。`,

`Q1で手に入れた
4桁を思い出そう。`,

`0926

↓

0・9・2・6

1文字ずつ
左へ戻してみよう。`

];


let hintIndex = 0;



// ========================================
// ヒント
// ========================================

hintButton.addEventListener(
    "click",
    () => {


        if (hintIndex >= hints.length) {

            return;

        }


        const hint =
            document.createElement("div");


        hint.className =
            "q2-hint-card";


        hint.innerHTML =
            hints[hintIndex]
            .replace(/\n/g, "<br>");


        hintMessage.appendChild(hint);


        hintIndex++;


        if (hintIndex < hints.length) {

            hintButton.textContent =
                `HINT ${hintIndex + 1}`;

        }

        else {

            hintButton.textContent =
                "NO MORE HINTS";

            hintButton.disabled = true;

        }

    }
);



// ========================================
// Enterキー
// ========================================

answerInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            checkAnswer();

        }

    }
);



// ========================================
// 回答
// ========================================

checkButton.addEventListener(
    "click",
    checkAnswer
);



// ========================================
// 判定
// ========================================

function checkAnswer() {


    const answer =
        answerInput.value
        .trim()
        .toUpperCase();


    if (answer === "DATE") {

        correct();

    }

    else {

        wrong();

    }

}



// ========================================
// 正解
// ========================================

function correct() {


    answerInput.classList.remove(
        "answer-wrong"
    );


    answerInput.classList.add(
        "answer-correct"
    );


    showCipherCorrect(
        `DATE<br><br>次は2人のデートの思い出。`
    );

}



// ========================================
// 不正解
// ========================================

function wrong() {


    answerInput.classList.remove(
        "answer-correct"
    );


    answerInput.classList.add(
        "answer-wrong"
    );


    showWrong(
        "もう一度考えてみよう。"
    );

}
