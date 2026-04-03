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

