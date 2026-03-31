function letsPractice() {
  location.href = "1page.html";
}

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