fetch("common-button.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("button").innerHTML = data;
    
    // ★ここでイベントを設定する（重要）
    setEvents();
  });

function setEvents() {
  document.getElementById("back").onclick = function() {
    location.href = "1page.html";
  };
  
  document.getElementById("next").onclick = function() {
    location.href = "2page.html";
  };
}