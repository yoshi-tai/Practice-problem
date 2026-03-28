// header埋め込み
fetch('common-header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// button埋め込み
fetch("common-button.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("button").innerHTML = data;
    setEvents();
  });

// ボタンイベント
function setEvents() {
  
  document.getElementById("back").onclick = function() {
    location.href = "1page.html";
  };
  
  document.getElementById("next").onclick = function() {
    const checked = document.querySelector('input[name="radio"]:checked');
    
    if (checked) {
      localStorage.setItem("q1", checked.value);
    }
    
    location.href = "2page.html";
  };
}

// 復元処理
window.onload = function() {
  const saved = localStorage.getItem("q1");
  
  if (saved) {
    const target = document.querySelector(`input[value="${saved}"]`);
    if (target) {
      target.checked = true;
    }
  }
};