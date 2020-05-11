


function btan(){
    document.write("folk of");
}

function replace(){
  let imgs = document.body.getElementByTagname("img");
  for(let i= 1; i<imgs.lenght-1;i++){
    let img = imgs[i];
    if(img.alt){
      let text = document.createTextNode(img.alt);
        img.parentNode.replaceChild(text,img);
    }
  }
}

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }


  function para(){
    let para= getElementById("para");
    para.style.color = blue;

  }
