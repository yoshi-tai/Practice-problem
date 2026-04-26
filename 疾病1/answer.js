/* 1問目の答え
function showAnswer() {
  var answerText = document.getElementById("answerText");
  answerText.textContent = "これが答えです！";
}
 
 
 function answer(){
   alert("答えを表示します");
 }
*/

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}