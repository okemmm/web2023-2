//function photograph3(){
//<img src='./image/Night.png' id="img3" alt="photochange" class="photograph">
//setTimeout("photograph3()",3000);}


var originalImage = './image/Morning.png'; // 元の画像のURL

function photograph3() {
  var imgElement = document.getElementById("img3");
  imgElement.src = './image/Night.png';
  imgElement.alt = "photochange";

  // 3秒後に元の画像に戻す
  setTimeout(function() {
    imgElement.src = originalImage;
    imgElement.alt = "photochange";
  }, 3000);
}
