// 戻るボタンを押した時、履歴の一つ前に戻る
function goBack() {
  location.href = "index.html";
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