// 戻るボタンを押した時、履歴の一つ前に戻る
function goBack() {
  if (history.length > 1) {
    history.back();
    console.log("ここ通ってる？");
  } else {
    location.href = "index.html"; // トップページに移動
  }
}