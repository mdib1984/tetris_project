/*
draw.js 
version 1.0 : 

by Mustapha 
*/
 
				var canvas = document.getElementById( 'canvas' );
                var context = canvas.getContext( '2d' );
				var colors = ['Red','Green','Blue','Yellow','Brown','Gray','Cyan', 'Magenta', 'Orange','Pink','Purple'];
				var CANVAS_W=canvas.width;
				var CANVAS_H=canvas.height;
				
				var forms=['I','T','L','J','O','Z','S'];
				
				var CurrentFormName;
				var CurrentX,CurrentY,CurrentX_OffSet,CurrentY_OffSet;
				var BLOC_W=29;
				var BLOC_H=29;
				var interval;
				
				
				/*id aleatoire pour la couleur de la forme*/
				var id; 
				var x,y,sens;
                
				/* 
                 Toutes les formes de ce jeu sont une composition de 4 carrés 
                  definissant ce carré de 29X29
                */    
                function draw(x,y){                
                    context.fillRect(x, y, BLOC_W, BLOC_H);
                    context.strokeRect(x, y, BLOC_W, BLOC_H);
                }    
                    
                /**
				 Fonctions des differentes formes du jeu 
				*/
				
                function drawI(x,y,sens){
					CurrentFormName='I';
					sens=CurrentSens%2;
					switch (sens) {
                            case 0:
								 draw(x,y);
								 draw(x+29,y);
								 draw(x+58,y);
								 draw(x+87,y);
								 CurrentX_OffSet=BLOC_W+x+87;
								 CurrentY_OffSet=BLOC_W+y;
								break;
                            case 1:
  								draw(x,y+0);
								 draw(x,y+29);
								 draw(x,y+58);
								 draw(x,y+87);
								 CurrentX_OffSet=BLOC_W+x;
								 CurrentY_OffSet=BLOC_W+y+87;

                                break;  			
                            }	
                     
                }           
                  
                function drawT(x,y,sens){
				
					CurrentFormName='T';
					sens=CurrentSens%4;
					switch (sens) {
                            case 0:
								 draw(x,y);
								 draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+58,y);
								 CurrentX_OffSet=BLOC_W+x+58;
								 CurrentY_OffSet=BLOC_W+y+29;								 
								break;
                            case 1:
  								draw(x,y);
								 draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+29,y-29);
								 CurrentX_OffSet=BLOC_W+x+29;
								 CurrentY_OffSet=BLOC_W+y-29;
                                break; 
							case 2:
								draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+29,y+58);
								 draw(x+58,y+29);
								 CurrentX_OffSet=BLOC_W+x+58;
								 CurrentY_OffSet=BLOC_W+y+58;								 
								break;
                            case 3:
								draw(x+58,y);
								draw(x+29,y+29);
								draw(x+58,y+29);
								draw(x+87,y+29);
								CurrentX_OffSet=BLOC_W+x+87;
								CurrentY_OffSet=BLOC_W+y+29;
                                break; 			
                            }
                }   
                  
                function drawL(x,y,sens){
                    CurrentFormName='L';
					sens=CurrentSens%4;
					switch (sens) {
                            case 0:
								 draw(x,y);
								 draw(x+29,y);
								 draw(x+29,y+29);
								 draw(x+29,y+58);
								CurrentX_OffSet=BLOC_W+x+29;
								CurrentY_OffSet=BLOC_W+y+58;								 
								break;
                            case 1:
  								draw(x,y);
								draw(x+29,y);
								draw(x,y+29);
								draw(x+58,y);
								CurrentX_OffSet=BLOC_W+x+58;
								CurrentY_OffSet=BLOC_W+y+29;
                                break; 
							case 2:
								draw(x,y);
								 draw(x+29,y);
								 draw(x+58,y);
								 draw(x+58,y-29);
								CurrentX_OffSet=BLOC_W+x+58;
								CurrentY_OffSet=BLOC_W+y-29;
								break;
                            case 3:
								draw(x,y);
								draw(x+29,y);
								draw(x,y-29);
								draw(x,y-58);
								CurrentX_OffSet=BLOC_W+x;
								CurrentY_OffSet=BLOC_W-58;
                                break; 			
                            }		


                } 
                   
                function drawO(x,y,sens){
					CurrentFormName='O';
                     
                     draw(x,y);
                     draw(x+29,y);
                     draw(x,y+29);
                     draw(x+29,y+29);
					 CurrentX_OffSet=BLOC_W+x+29;
					 CurrentY_OffSet=BLOC_W+y+29;

                }  

                function drawJ(x,y,sens){
                    CurrentFormName='J';
                  
					sens=CurrentSens%4;
					switch (sens) {
                            case 0:
								draw(x,y);
								draw(x,y+29);
								draw(x+29,y+29);
								draw(x+58,y+29);
								CurrentX_OffSet=BLOC_W+x+58;
								 CurrentY_OffSet=BLOC_W+y+29;
								break;
                            case 1:
  								draw(x,y);
								draw(x+29,y);
								draw(x,y+29);
								draw(x,y+58);
								CurrentX_OffSet=BLOC_W+x+29;
								 CurrentY_OffSet=BLOC_W+y+58;
                                break; 
							case 2:
								draw(x,y);
								draw(x+29,y);
								draw(x+58,y);
								draw(x+58,y+29);
								CurrentX_OffSet=BLOC_W+x+58;
								CurrentY_OffSet=BLOC_W+y+29;
								break;
                            case 3:
								draw(x,y);
								draw(x+29,y);
								draw(x+29,y-29);
								draw(x+29,y-58);
								CurrentX_OffSet=BLOC_W+x+58;
								 CurrentY_OffSet=BLOC_W+y-58;
                                break; 			
                            } 			

                }

                function drawZ(x,y,sens){
                    CurrentFormName='Z';
					sens=CurrentSens%2;
					switch (sens) {
                            case 0:
								draw(x,y);
								draw(x+29,y);
								draw(x+29,y+29);
								draw(x+58,y+29);
								CurrentX_OffSet=BLOC_W+x+58;
								CurrentY_OffSet=BLOC_W+y+29;
								break;
                            case 1:
                                draw(x,y);
								draw(x,y+29);
								draw(x-29,y+29);
								draw(x-29,y+58);
								CurrentX_OffSet=BLOC_W+x-29;
								CurrentY_OffSet=BLOC_W+y+58;
                                break;         
                            } 		
                }

                function drawS(x,y,sens){
					CurrentFormName='S';
					sens=CurrentSens%2
					
					 switch (sens) {
                            case 0:
                                draw(x,y);
								draw(x,y+29);
								draw(x+29,y+29);
								draw(x+29,y+58);
								CurrentX_OffSet=BLOC_W+x+29;
								CurrentY_OffSet=BLOC_W+y+58;
                                break;
                            case 1:
                                draw(x,y);
								draw(x-29,y);
								draw(x-29,y+29);
								draw(x-58,y+29);
								CurrentX_OffSet=BLOC_W+x-58;
								CurrentY_OffSet=BLOC_W+y+29;
                                break;         
                            } 
                }
                
				function formInit(x,y,FormName,sens){
				
					if ((x>=0)&&(y>=0)){ 
					
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
				}

				function rotate( CurrentFormName ) {
				
					formInit(CurrentX,CurrentY,CurrentFormName,CurrentSens);
				}


				
				function newForm(){
					CurrentX=150;
					CurrentY=0;
					CurrentSens=0;
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
					if(CurrentY_OffSet<600){
						init();
						++CurrentY;
						formInit(CurrentX,CurrentY,CurrentFormName,CurrentSens);
					}else{
					newForm();
					}						
				}

				function Game(){
					clearInterval(interval);
					newForm();
					interval = setInterval(DefaultMouve,50);
					
					
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
			if (CurrentX >0) {
				init();
				--CurrentX;
				formInit(CurrentX,CurrentY,CurrentFormName);
			}
            break;
        case 'right':
			if (CurrentX_OffSet <CANVAS_W) {
			init();
            ++CurrentX;
			formInit(CurrentX,CurrentY,CurrentFormName);
			}
            break;
        case 'down':
		
			if (CurrentY_OffSet <CANVAS_H) {
				init();
				++CurrentY;
				formInit(CurrentX,CurrentY,CurrentFormName);
			}
			
            break;
		case 'rotate':
					init();
					rotate(CurrentFormName);
					++CurrentSens;
				break;
    }
}
	    

				
