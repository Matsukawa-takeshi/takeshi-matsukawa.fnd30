'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function butotnClick(){
  let result = "";
  const hight = Number(document.getElementById("counter").value);
  const tree = document.getElementsByClassName("tree")[0];
  const screen = document.getElementsByClassName("main")[0];
  const footer = document.getElementsByClassName("footer")[0];
  const message = document.getElementsByClassName("message")[0];
  const snow = document.getElementsByClassName("snow")[0];
  let elements = document.getElementsByName('show');
  let checkValue = "";

  screen.style.display = "none";
  footer.style.display = "none";
  message.style.display = "none";
  snow.style.display = "none";
  
  for (let i = 0; i < elements.length; i++){
      if (elements.item(i).checked){
          checkValue = elements.item(i).value;
      }
  }
  if (hight > 20 && checkValue === "Window") { 
    alert("1-20までの高さを入力してください。");
  } else {
    if(checkValue === "Window"){
      for (let i = 1; i <= hight; i++) {
        if (hight === 1) {
          result = "🎄";
        } else {
          for(let j = 1; j <= i; j++) {
              result = result + "🎄"; 
            if (j === i && j !== hight) {
              result = result + "\n";
            }
          }
        }
      }
      
      tree.innerText = result;
      tree.style.fontSize = "50px";
      tree.style.lineHeight = "20px";
      tree.style.letterSpacing = "-1em";
      screen.style.display = "flex";
      footer.style.display = "block";
      if (hight === 20) {
        message.style.display = "block";
        let snowText = "";
        for(let i = 1; i <= 400; i++){
          if ( Math.random() * 10 <= 2) {
            snowText = snowText + "❄";
          } else {
            snowText = snowText + "　";
          }
        }
        snow.innerText = snowText;
        snow.style.display = "block";
      }
    } else {
    
      for (let i = 1; i<=hight; i++) {
        for (let j = hight - i; j > 0; j--) {
          result = result + " ";
        }
        for (let k = 1; k <= i; k++) {
          result = result + "T"; 
          if (k !== i) {
            result = result + " "; 
          } else if (k === i && k !== hight) {
            result = result + "\n";
          }
        }
      }
      console.log(result);
    }
  }
}
