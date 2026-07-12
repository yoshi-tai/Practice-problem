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
  const defaultFileNames = [
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

  const fileNames = Array.isArray(window.customPageNames) && window.customPageNames.length > 0
    ? window.customPageNames
    : defaultFileNames;
  const pageBasePath = typeof window.pageBasePath === "string" ? window.pageBasePath : "";
  const configuredTotalPages = Number(window.customTotalPages);
  const totalPages = Math.max(
    0,
    Math.min(
      Number.isFinite(configuredTotalPages) && configuredTotalPages > 0
        ? configuredTotalPages
        : fileNames.length,
      fileNames.length
    )
  );
  
  // ======================
  // 現在の問題番号取得
  // ======================
  const currentPageValue = Number(
    document.getElementById("problemNumber").getAttribute("value")
  );
  const currentPage = Number.isFinite(currentPageValue) && currentPageValue > 0
    ? currentPageValue
    : 1;
  
  
  // ======================
  // 表示中グループ
  // ======================
  let currentGroup = Math.floor((Math.min(currentPage, totalPages || 1) - 1) / 10);
  
  
  render();
  
  
  // ======================
  // 描画処理
  // ======================
  function render() {
    
    const totalPagesToShow = totalPages;
    const pageInfo = document.getElementById("pageInfo");
    const pageButtons = document.getElementById("pageButtons");
    
    const prevGroupBtn = document.getElementById("prevGroupBtn");
    const nextGroupBtn = document.getElementById("nextGroupBtn");
    
    const resolvedCurrentPage = Math.min(currentPage, totalPagesToShow || 1);
    
    // 上の表示
    pageInfo.textContent = resolvedCurrentPage + " / " + totalPagesToShow;
    
    
    // ボタン初期化
    pageButtons.innerHTML = "";
    
    if (totalPagesToShow <= 1) {
      prevGroupBtn.disabled = true;
      nextGroupBtn.disabled = true;
      return;
    }
    
    const start = currentGroup * 10 + 1;
    let end = start + 9;
    
    if (end > totalPagesToShow) {
      end = totalPagesToShow;
    }
    
    
    // ページ番号ボタン生成
    for (let i = start; i <= end; i++) {
      
      const btn = document.createElement("button");
      
      btn.textContent = i;
      
      btn.className = "pageBtn";
      
      
      // 現在ページ
      if (i === resolvedCurrentPage) {
        
        btn.disabled = true;
        
      } else {
        
        btn.addEventListener("click", function() {
          
          location.href =
            pageBasePath +
            fileNames[i - 1] +
            ".html";
          
        });
        
      }
      
      pageButtons.appendChild(btn);
      
    }
    
    
    // << ボタン
    prevGroupBtn.disabled = (currentGroup === 0 || totalPagesToShow <= 1);
    
    prevGroupBtn.onclick = function() {
      
      if (currentGroup > 0) {
        
        currentGroup--;
        
        render();
        
      }
      
    };
    
    
    // >> ボタン
    const maxGroup = Math.floor((totalPages - 1) / 10);
    
    nextGroupBtn.disabled = (currentGroup === maxGroup || totalPagesToShow <= 1);
    
    nextGroupBtn.onclick = function() {
      
      if (currentGroup < maxGroup) {
        
        currentGroup++;
        
        render();
        
      }
      
    };
    
  }
  
}
