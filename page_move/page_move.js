window.addEventListener("load", function() {
  
  // ======================
  // HTML読み込み
  // ======================
  fetch("../page_move/page_move.html")
    .then(response => response.text())
    .then(data => {
      
      document.getElementById("pageMove").innerHTML = data;
      
      initPageMove();
      
    });
  
});


function initPageMove() {
  
  // ======================
  // ページ名一覧
  // ======================
  const fileNames = [
    "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
    
    "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive",
    "twentysix", "twentyseven", "twentyeight", "twentynine", "thirty",
    
    "thirtyone", "thirtytwo", "thirtythree", "thirtyfour", "thirtyfive",
    "thirtysix", "thirtyseven", "thirtyeight", "thirtynine", "forty",
    
    "fortyone", "fortytwo", "fortythree", "fortyfour", "fortyfive",
    "fortysix", "fortyseven", "fortyeight", "fortynine", "fifty",
    
    "fiftyone", "fiftytwo", "fiftythree", "fiftyfour",
    "fiftyfive", "fiftysix", "fiftyseven", "fiftyeight"
  ];
  
  
  // ======================
  // 現在の問題番号取得
  // ======================
  const currentPage = Number(
    document.getElementById("problemNumber").getAttribute("value")
  );
  
  
  // ======================
  // 表示中グループ
  // ======================
  let currentGroup = Math.floor((currentPage - 1) / 10);
  
  
  render();
  
  
  // ======================
  // 描画処理
  // ======================
  function render() {
    
    const totalPages = 58;
    
    const pageInfo = document.getElementById("pageInfo");
    const pageButtons = document.getElementById("pageButtons");
    
    const prevGroupBtn = document.getElementById("prevGroupBtn");
    const nextGroupBtn = document.getElementById("nextGroupBtn");
    
    
    // 上の表示
    pageInfo.textContent = currentPage + " / " + totalPages;
    
    
    // ボタン初期化
    pageButtons.innerHTML = "";
    
    
    const start = currentGroup * 10 + 1;
    let end = start + 9;
    
    if (end > totalPages) {
      end = totalPages;
    }
    
    
    // ページ番号ボタン生成
    for (let i = start; i <= end; i++) {
      
      const btn = document.createElement("button");
      
      btn.textContent = i;
      
      btn.className = "pageBtn";
      
      
      // 現在ページ
      if (i === currentPage) {
        
        btn.disabled = true;
        
      } else {
        
        btn.addEventListener("click", function() {
          
          location.href =
            "../疾病1/" +
            fileNames[i - 1] +
            ".html";
          
        });
        
      }
      
      pageButtons.appendChild(btn);
      
    }
    
    
    // << ボタン
    prevGroupBtn.disabled = (currentGroup === 0);
    
    prevGroupBtn.onclick = function() {
      
      if (currentGroup > 0) {
        
        currentGroup--;
        
        render();
        
      }
      
    };
    
    
    // >> ボタン
    const maxGroup = Math.floor((totalPages - 1) / 10);
    
    nextGroupBtn.disabled = (currentGroup === maxGroup);
    
    nextGroupBtn.onclick = function() {
      
      if (currentGroup < maxGroup) {
        
        currentGroup++;
        
        render();
        
      }
      
    };
    
  }
  
}
