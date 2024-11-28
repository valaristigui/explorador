canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
mariposa_ancho=100;
mariposa_alto=90;

background_image = "campo.jpg";

mariposa_image = "mariposa2.png";

mariposa_x = 10;
mariposa_y = 10;

//Crea la función "add()"
 
background_imgTag= new	Image();                                     //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;	                                     // Define una función para cargar esta variable
background_imgTag.src=background_image;	                                     // Carga la imagen

mariposa_imgTag = new Image();                                       //Define la variable con una nueva imagen
mariposa_imgTag.onload=uploadMariposa;	                                     // Define una función para cargar esta variable
mariposa_imgTag.src=mariposa_image;	                                     // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){
 ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height)
}                           
                                         //Dibuja la imagen de fondo

//Crea una función "uploadrover()".
function uploadMariposa(){
    ctx.drawImage(mariposa_imgTag, mariposa_x, mariposa_y, mariposa_ancho, mariposa_alto );
}
                                        //Dibuja la imagen del explorador
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed== '38'){
        up();
    }	
    if(keyPressed== '40'){
        down();
    }	
    if(keyPressed== '37'){
        left();
    }	
    if(keyPressed== '39'){
        right();
    }	

    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
if(mariposa_y >=0){
    mariposa_y= mariposa_y -10; //cada que se presione la tecla flecha arriba
    uploadBackground(); //aca re recsrga la imagen de fondo
    uploadMariposa(); //aca re recsrga la imagen de la mariposa
}
}
function down(){
	if(mariposa_y <=500){
        mariposa_y= mariposa_y + 10; //Cada que se presiona
        uploadBackground();//aca se recarga la imagen de fondo
        uploadMariposa();
    }
}
function right(){ 
	if(mariposa_x >=0){
        mariposa_x= mariposa_x + 10; //cada que se presione la tecla flecha arriba
        uploadBackground(); //aca re recsrga la imagen de fondo
        uploadMariposa(); //aca re recsrga la imagen de la mariposa
    }
}
function left(){
	if(mariposa_x <=900){
        mariposa_x= mariposa_x - 10; //Cada que se presiona
        uploadBackground();//aca se recarga la imagen de fondo
        uploadMariposa();
    }
}



