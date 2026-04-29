/* 
 * OKボタン押下時
*/
function OK(){
  const radio = document.querySelectorAll('input[name="radio"]:checked');
  
  // 選ばれた value を配列にする
  const values = Array.from(checked).map(item => item.value);
    // 1 と 3 が選ばれているか判定

  if (values.includes("1") && values.includes("3")) {
    alert("正解！");
  } else {
    alert("不正解");
}
}

/* 答えボタン押下時
 * ①はいorいいえのアラートを出す
 * ②-1 「はい」なら答えのメソッドを呼び出す
 * ②-2 「いいえ」ならがんばれ！を表示
*/
function showAnswer() {
  const result = confirm("答え見てみる？");
  if (result) {
    document.getElementById("modal1").style.display = "block";
    openModal("OK"); // モーダルを開く
  } else {
    alert("がんばってるね！");
    closeModal(); // モーダルを閉じる
  }
}

/*答えを表示する
 * ①モーダルを表示する
 * ②モーダル内に答えを表示する
*/
function openModal(num) {
  if (num === "OK") {
    const problemNumber = document.getElementById("problemNumber");
    answerText(problemNumber);
  }
}

/* 答えを非表示にする
 * モーダルを閉じる
 * ①モーダルを非表示にする
*/
function closeModal() {
  document.getElementById("modal1").style.display = "none";
}

/* 答え */
function answerText(problemNumber) {
  if (problemNumber.textContent === "1") {
    // 問題1の答えを表示
    document.querySelector(".answer").innerHTML = `
      形質細胞（3）：Bリンパ球が分化した細胞で、大量の抗体を産生する主役。<br>
      リンパ球（6）：特に Bリンパ球 が抗体産生に関わる。
    `;

    // 解説
    document.querySelector(".explanation").innerHTML = `
      好中球は、細菌や異物を貪食することが主な役割です。<br>
      好塩基球は、アレルギー反応に関与し、ヒスタミンなどの化学物質を放出します。<br>
      好酸球は、寄生虫感染やアレルギー反応に関与し、特に寄生虫に対して効果的です。<br>
      マクロファージは、貪食作用を持ち、抗原提示も行います。<br>
    `;

    // 選択肢の解説
    document.querySelector(".option-explanations").innerHTML = `
      1. 好中球 → 貪食がメイン<br>
      2. 好塩基球 → アレルギー反応<br>
      4. 好酸球 → 寄生虫・アレルギー<br>
      5. マクロファージ → 貪食・抗原提示
    `;
  }
}