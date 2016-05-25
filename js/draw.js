/*
draw.js 
version 1.0 : 

by Mustapha 
*/
 
				var canvas = document.getElementById( 'canvas' );
                var context = canvas.getContext( '2d' );
				var colors = ['Red','Green','Blue','Yellow','Brown','Gray','Cyan', 'Magenta', 'Orange','Pink','Purple'];
				//var COLS = 10, ROWS = 20;
				var board = [];	
				var forms=['I','T','L','J','O','Z','S'];
				
				var CurrentFormName;
				var CurrentX,CurrentY;
				var CurrentSens;
				var interval;
				/*id aleatoire pour la couleur de la forme*/
				var id; 
				var x,y,sens;
                
				/* 
                 Toutes les formes de ce jeu sont une composition de 4 carrés 
                  definissant ce carré de 29X29
                */    
                function draw(x,y){                
                     
                    context.fillRect(x, y, 29, 29);
                    context.strokeRect(x, y, 29, 29);
                }    
                    
                /**
				 Fonctions des differentes formes du jeu 
				*/
				
                function drawI(x,y,sens){
					CurrentFormName='I';
					sens=CurrentSens%2;
					switch (sens) {
                            case 1:
								 draw(x,y);
								 draw(x+29,y);
								 draw(x+58,y);
								 draw(x+87,y);
								break;
                            case 2:
  								draw(150,0);
								 draw(150,29);
								 draw(150,58);
								 draw(150,87);

                                break;  			
                            }	
                     
                }           
                  
                function drawT(x,y,sens){
				
					CurrentFormName='T';
					sens=CurrentSens%4;
					switch (sens) {
                            case 1:
								 draw(x,y);
								 draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+58,y);
								break;
                            case 2:
  								draw(x,y);
								 draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+29,y-29);

                                break; 
							case 3:
								draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+29,y+58);
								 draw(x+58,y+29);
								break;
                            case 4:
								draw(x+58,y);
								draw(x+29,y+29);
								draw(x+58,y+29);
								draw(x+87,y+29);
                                break; 			
                            }
                }   
                  
                function drawL(x,y,sens){
                    CurrentFormName='L';
					sens=CurrentSens%4;
					switch (sens) {
                            case 1:
								 draw(x,y);
								 draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+29,y+58);
								break;
                            case 2:
  								draw(x,y);
								draw(x+29,y);
								draw(x,y+29);
								draw(x+58,y);

                                break; 
							case 3:
								draw(x,y);
								 draw(x+29,y);
								 draw(x+58,y);
								 draw(x+58,y-29);
								break;
                            case 4:
								draw(x,y);
								draw(x+29,y);
								draw(x,y-29);
								draw(x,y-58);
                                break; 			
                            }		


                } 
                   
                function drawO(x,y,sens){
					CurrentFormName='O';
                     
                     draw(x,y);
                     draw(x+29,y);
                     draw(x,y+29);
                     draw(x+29,y+29);

                }  

                function drawJ(x,y,sens){
                    CurrentFormName='J';
                  
					sens=CurrentSens%4;
					switch (sens) {
                            case 1:
								draw(x,y);
								draw(x,y+29);
								draw(x+29,y+29);
								draw(x+58,y+29);
								break;
                            case 2:
  								draw(x,y);
								draw(x+29,y);
								draw(x,y+29);
								draw(x,y+58);

                                break; 
							case 3:
								draw(x,y);
								draw(x+29,y);
								draw(x+58,y);
								draw(x+58,y+29);
								break;
                            case 4:
								draw(x,y);
								draw(x+29,y);
								draw(x+29,y-29);
								draw(x+29,y-58);
                                break; 			
                            } 			

                }

                function drawZ(x,y,sens){
                    CurrentFormName='Z';
					sens=CurrentSens%2;
					switch (sens) {
                            case 1:
								draw(x,y);
								draw(x+29,y);
								draw(x+29,y+29);
								draw(x+58,y+29);
								break;
                            case 2:
                                draw(x,y);
								draw(x,y+29);
								draw(x-29,y+29);
								draw(x-29,y+58);
                                break;         
                            } 		
                }

                function drawS(x,y,sens){
					CurrentFormName='S';
					sens=CurrentSens%2
					
					 switch (sens) {
                            case 1:
                                draw(x,y);
								draw(x,y+29);
								draw(x+29,y+29);
								draw(x+29,y+58);
                                break;
                            case 2:
                                draw(x,y);
								draw(x-29,y);
								draw(x-29,y+29);
								draw(x-58,y+29);
                                break;         
                            } 
                }
                
				function formInit(x,y,FormName,sens){
                        switch (FormName) {
                            case 'S':
                                drawS(x,y,sens);
                                break;
                            case 'Z':
                                drawZ(x,y,sens);
                                break;
                            case 'J':
                                drawJ(x,y,sens);
                                break;
                            case 'L':
                                drawL(x,y,sens);
                                break;
                            case 'O':
                                drawO(x,y,sens);
                                break;
                            case 'I':
                                drawI(x,y,sens);
                                break;
                            case 'T':
                                drawT(x,y,sens);
                                break;          
                            } 
				}

				function rotate( CurrentFormName ) {
				
					formInit(CurrentX,CurrentY,CurrentFormName,CurrentSens);
				}


				
				function newForm(){
					CurrentX=150;
					CurrentY=0;
					CurrentSens=1;
                    id= Math.floor( Math.random() * colors.length );
                    context.fillStyle = colors[id];
					context.strokeStyle = 'black';	
					var id2=Math.floor(Math.random()*7);
					CurrentFormName=forms[id2];
					
				//	formInit(CurrentX,CurrentY,CurrentFormName);
					formInit(CurrentX,CurrentY,CurrentFormName,CurrentSens);
					
					
                }

				
				// clears
				function init() {
					context.clearRect(0, 0, canvas.width, canvas.height);
				}
					
				function DefaultMouve(){
					init();
					++CurrentY;
					formInit(CurrentX,CurrentY,CurrentFormName,CurrentSens);
											
				}
					
			
				function Game(){
					newForm();
					setInterval(DefaultMouve,50);
					
				}
				
				Game();		
                 //DefaultMouve();   
				    
        			

					
/*  
   Controle Clavier 
*/	

document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
     //   setInterval(DefaultMouve,50);
    }
};

function keyPress( key ) {
    switch ( key ) {
        case 'left':
			init();
            --CurrentX;
			formInit(CurrentX,CurrentY,CurrentFormName);
            break;
        case 'right':
			init();
            ++CurrentX;
			formInit(CurrentX,CurrentY,CurrentFormName);
            break;
        case 'down':
			init();
            ++CurrentY;
			formInit(CurrentX,CurrentY,CurrentFormName);
            break;
		case 'rotate':
			init();
            rotate(CurrentFormName);
			++CurrentSens
			//formInit(CurrentX,CurrentY,CurrentFormName);
            break;	
    }
}
	    

				
