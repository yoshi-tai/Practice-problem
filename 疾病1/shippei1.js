/* 
 *　次へ　ボタン押下時
 *　画面遷移
 */
function goNext(btn) {
  if (btn.id === "one") {
    location.href = "two.html";
  } else if (btn.id === "two") {
    location.href = "three";
  } else if (btn.id === "four") {
    location.href = "four";
  }
}

/*
 * 戻るボタンを押した時、履歴の一つ前に戻る
 * ただし履歴がなかった場合はトップページへ
 */
function goBack(btn) {
  if (btn.id === "one") {
    location.href = "../index.html";
  } else if (btn.id === "two") {
    location.href = "one.html";
  } else if (btn.id === "three") {
    location.href = "two.html";
  }
}