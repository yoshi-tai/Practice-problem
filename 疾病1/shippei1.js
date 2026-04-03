/* 
 *　次へ　ボタン押下時
 *　画面遷移
 */
function goNext() {
  const btn = document.getElementById("one");
  
  // 文字変更
  btn.value = "無理しないでね！";
  
  // 2秒後に遷移
  setTimeout(function() {
    location.href = "疾病1/one.html";
  }, 2000);
}

