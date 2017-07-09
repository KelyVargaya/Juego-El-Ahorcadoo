function imprimirHTML() {
if(acierto){
    var correcto = "Ganaste la palabra era: "+result+ " y con " +intentos + "intentos :)!";
        //var incorrecto = "<br>Perdsitee la palabra era: "+result+ " fallaste con " +intentos + "intentos :c";
    document.write(correcto);
   for (i in intentos)
  document.write(result+"<br>");
}
  }

function obtenerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round (Math.random() * 27);
   var cadena = new String(libreriaPalabras[indice]);
   var palabra = cadena.split(" ");
      return palabra;
}

function dibujaHombre(partes)
{
	var hombre =  [        "________",
	                       "   |\n",
	                       "  | \n",
	                       "   |\n",
	                       "   O\n",
	                        "  /|\\\n",
	                       "  / \\\n",
	                       "       |",
	                       "|       ",
	                       "________"];

  	for (var x= 0; x< hombre.length; x++) {
		    if(partes<hombre.length){
			    console.log(hombre[x]);
			partes++;
		}
		else{
			console.log("Continuaa... :3");
    }
  	}
}


function juega(){
  var palabra=obtenerPalabraSecreta();
	var intentos=10;
  var acierto=false;
  var letraCorrecta=false;
  var palabraOculta="";
	var result = palabra = palabra.join("");

	for(var i=0;i<palabra.length;i++)
		palabraOculta = palabraOculta + "*";

	do{
		var letraNueva =prompt("Tienes que adivinar esta palabra oculta: " +palabraOculta+ "\n" +"Empiezaaa... Poniendo una letrita" );
		var indice = palabra.indexOf(letraNueva);
		  console.clear();

      if(letraNueva.length==1){
			        while(indice>=0){
				            letraCorrecta=true;

				   palabraOculta = palabraOculta.split("");
				   palabraOculta[indice]=letraNueva;
				   palabraOculta = palabraOculta.join("");
				    console.log(palabraOculta);
				   palabra = palabra.split("");
				   palabra[indice]="_";
				   palabra = palabra.join("");
				   indice = palabra.indexOf(letraNueva);
			}


			      if(palabraOculta.indexOf("*")==-1){
				    alert("Ohhhh... Juego Ganado" + "\n" + "La palabra era:" + "\n" +result);
				    acierto=true;
				     break;
			     }

		      	if(letraCorrecta){
				    console.log("Letra correcta");
             }

           else if(!letraCorrecta){
				   intentos--;
				   console.log("error! la palabra oculta no contiene esta letra :3" + "\n" + "Sigue intentando :3 tienes " +intentos+" intentos disponibles");
			      }
			   letraCorrecta=false;
			      dibujaHombre(intentos);
		    }
  }

    while(intentos>0);
	     if(!acierto){
		       alert("Ahorcadaaa... Perdiste :c" + "\n" + "La palabra era: " + "\n" +result);
	        }
}


console.log(juega());

/*
function DibujaLetra(letra) {
var flag = false;
var letrasCadena = cadena.split("");
cadena = "";
for (var x = 0; x < palabra.length; x++) {
if (palabra[x] == letra) {
cadena += letra + "";
flag = true;
}
  else
cadena += letrasCadena[x] + "";
}
*/
