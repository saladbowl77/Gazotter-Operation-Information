const img = document.getElementById("ico_img");
const head_title = document.getElementById("head_title");
const status_text = document.getElementById("status_text");
mkImg();
function mkImg() {
  const ico_type = document.getElementById("ico_type").value;
  const title_value = document.getElementById("title_value").value;
  const status_text_value = document.getElementById("status_text_value").value;
  const status_textsize_value = document.getElementById("status_textsize_value").value;
  const img_dict = {
      "o": "./img/OK.png",
      "c": "./img/NO.png",
      "n": "./img/Cau.png"
  };
  img.src = img_dict[ico_type];
  head_title.innerHTML = title_value;
  status_text.innerHTML = status_text_value;
  status_text.style.fontSize = status_textsize_value + "px";
  html2canvas(document.getElementById("capture")).then(canvas => {
  // canvasをimgtタグに挿入できる形に変更
  var imageData = canvas.toDataURL();
  // imgタグに画像として、canvasの内容を挿入
  document.getElementById('canvas-image').setAttribute("src",canvas.toDataURL());
  });
}
