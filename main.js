canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);

if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
{
    alphabetkey();
    document.getElementById("d1").innerHTML="você pressionou uma tecla alfabeto";
    console.log("alphabet key");
}



}

function alphabetkey()
{
    img_image="cima.png";
add();
}


function alphabetkey()
{
    img_image="baixo.png";
add();
}


function alphabetkey()
{
    img_image="esquerda.png";
add(baixo.png);
}


function alphabetkey()
{
    img_image="direita.jpg";
add();
}







