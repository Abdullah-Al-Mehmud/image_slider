let flag = 0;

let slider = (num) => {
  let slide = document.getElementsByClassName("slide");

  if(num == slide.length){
    flag = 0;
    num = 0;
  }
  if(num < 0){
    flag = slide.length-1;
    num = slide.length-1;
  }

  for(let y of slide){
    y.style.display = "none";
  }

  slide[num].style.display = "block";
}



function controller(x){
  flag = flag + x;

  slider(flag);
  // left
 //flag = 2 + (-1) = 1;

  //right
 //flag = 2 + (1) = 3;
}

slider(flag);




