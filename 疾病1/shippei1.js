/* 
 *　次へ　ボタン押下時
 *　画面遷移
 */
function goNext() {
  const btn = document.getElementById("next");
  
  // 2秒後に遷移
  setTimeout(function() {
    location.href = "two.html";
  }, 1000);
}

/* 
 *　戻る　ボタン押下時
 *　画面遷移
 */
function goBack() {
  const btn = document.getElementById("back");
  
  // 2秒後に遷移
  setTimeout(function() {
    location.href = "../index.html";
  }, 500);
}

