// textをランダムに表示
function randomText() {
  const texts = [
    "今日はいい日だ！",
    "コツコツ頑張ろう",
    "ミスしてもOK！",
    "一歩ずつ進もう",
    "やればできる！",
    "まなちん大好き！",
    "頑張ってるまなちんえらすぎ！"
  ];
  
  // ランダムな番号を作る
  const randomIndex = Math.floor(Math.random() * texts.length);
  
  // 表示
  document.getElementById("randomText").textContent = texts[randomIndex];
}

/* 
 *頑張る？押下→ 頑張る！に変換→ 3秒後遷移
*/
function letsPractice() {
  const btn = document.getElementById("button");
  
  // 文字変更
  btn.value = "無理しないでね！";
  
  // 2秒後に遷移
  setTimeout(function() {
    location.href = "1page.html";
  }, 2000);
}