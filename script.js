let time = 1;
document.getElementById('radio1');

setInterval(function(){
  nextImage();

}, 3000)

function nextImage(){
  time++;

  if(time>10){
    time = 1;
  }
  
  document.getElementById('radio'+time).checked = true;
}

