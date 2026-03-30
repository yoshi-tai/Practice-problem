// 戻るボタンを押した時、履歴の一つ前に戻る
function goBack() {
  if (history.length > 1) {
    history.back();
  } else {
    location.href = "index.html"; // トップページに移動
  }
}

// 次へボタンを押した時、次の問題へ行く
function goNext() {
  const nextPage = "2page.html";
location.href = nextPage;
fetch(nextPage)
  .then(res => {
    if (res.ok) {
      location.href = nextPage;
    } else {
      // ページが存在しない場合
      alert("次のページはありません");
    }
  })
  .catch(() => {
    // エラー（存在しないなど）
    alert("次のページはありません");
  });
}

/*
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
};*/

