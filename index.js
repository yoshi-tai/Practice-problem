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
 *疾病1 ボタン
 *頑張る？押下→ 頑張る！に変換→ 3秒後遷移
 */
function onece_shippei1() {
  const btn = document.getElementById("onece_shippei1");
  
  // 文字変更
  btn.value = "無理しないでね！";
  
  // 2秒後に遷移
  setTimeout(function() {
    location.href = "onece_shippei1.html";
  }, 2000);
}

/* 
 *疾病1 ボタン
 *頑張る？押下→ 頑張る！に変換→ 3秒後遷移
 */
function twice_shippei2() {
  const btn = document.getElementById("twice_shippei2");
  
  // 文字変更
  btn.value = "無理しないでね！";
  
  // 2秒後に遷移
  setTimeout(function() {
    location.href = "twice_shippei2.html";
  }, 2000);
}