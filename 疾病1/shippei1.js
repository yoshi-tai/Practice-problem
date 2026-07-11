/* ページ番号とファイル名の対応 */
const pageNames = [
  null,
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twentyone",
  "twentytwo",
  "twentythree",
  "twentyfour",
  "twentyfive",
  "twentysix",
  "twentyseven",
  "twentyeight",
  "twentynine",
  "thirty",
  "thirtyone",
  "thirtytwo",
  "thirtythree",
  "thirtyfour",
  "thirtyfive",
  "thirtysix",
  "thirtyseven",
  "thirtyeight",
  "thirtynine",
  "forty",
  "fortyone",
  "fortytwo",
  "fortythree",
  "fortyfour",
  "fortyfive",
  "fortysix",
  "fortyseven",
  "fortyeight",
  "fortynine",
  "fifty",
  "fiftyone",
  "fiftytwo",
  "fiftythree",
  "fiftyfour",
  "fiftyfive",
  "fiftysix",
  "fiftyseven",
  "fiftyeight",
];

/* 問題番号を表示する関数 */
function setProblemNumber() {
  const problemNumber = document.getElementById("problemNumber").getAttribute("value");
  document.getElementById("problemNumber").textContent = problemNumber;
}

window.onload = function () {
  setProblemNumber();
};

/* 次へボタン押下時 */
function goNext(btn) {
  const problemNumber = Number(document.getElementById("problemNumber").getAttribute("value"));
  const nextNumber = Math.min(problemNumber + 1, 58);
  location.href = pageNames[nextNumber] + ".html";
}

/* 戻るボタン押下時 */
function goBack(btn) {
  const problemNumber = Number(document.getElementById("problemNumber").getAttribute("value"));
  if (problemNumber === 1) {
    location.href = "../index.html";
    return;
  }
  const prevNumber = Math.max(problemNumber - 1, 1);
  location.href = pageNames[prevNumber] + ".html";
}
