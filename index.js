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

  const randomIndex = Math.floor(Math.random() * texts.length);
  document.getElementById("randomText").textContent = texts[randomIndex];
}

/* 
 *疾病1_1回目 ボタン
 */
function one_shippei1() {
  const btn = document.getElementById("one");
  btn.value = "無理しないでね！";
  setTimeout(function() {
    location.href = "疾病1_1回目/one.html";
  }, 2000);
}

/* 
 *疾病1 2回目ボタン
 */
function twice_shippei2() {
  const btn = document.getElementById("twice_shippei2");
  btn.value = "無理しないでね！";
  setTimeout(function() {
    location.href = "疾病1_2回目/one.html";
  }, 2000);
}

/* 
 *疾病1 3回目ボタン
 */
function thrice_shippei3() {
  const btn = document.getElementById("thrice_shippei3");
  btn.value = "無理しないでね！";
  setTimeout(function() {
    location.href = "疾病1_3回目/one.html";
  }, 2000);
}

/* 
 *微生物ボタン
 */
function microbe() {
  const btn = document.getElementById("microbe");
  btn.value = "無理しないでね！";
  setTimeout(function() {
    location.href = "微生物/one.html";
  }, 2000);
}


/* 
 *小児_事後課題 ボタン
 */
function childTask() {
  const btn = document.getElementById("childTask");
  btn.value = "無理しないでね！";
  setTimeout(function() {
    location.href = "小児_事後課題/one.html";
  }, 2000);
}
