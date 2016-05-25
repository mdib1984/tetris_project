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
				
				/*id aleatoire pour la couleur de la forme*/
				var id; 
				var x,y;
                
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
				
				
                function drawI(x,y){
					CurrentFormName='T';  
                     //sens 1   
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+58,y);
                     draw(x+87,y);
                /*
                     //Sens 2
                     draw(150,0);
                     draw(150,29);
                     draw(150,58);
                     draw(150,87);*/
                }           
                  
                function drawT(x,y){
				
					CurrentFormName='T';    
                     //sens 1
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+29,y+29);
                     draw(x+58,y);
                     /*
                     //sens 2 
                     x=10,y=100;
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+29,y+29);
                     draw(x+29,y-29);

                     //Sens 3
                     x=10,y=200;
                     draw(x+29,y);
                     draw(x+29,y+29);
                     draw(x+29,y+58);
                     draw(x+58,y+29);

                     //Sens 4
                     x=160,y=10;
                     draw(x+58,y);
                     draw(x+29,y+29);
                     draw(x+58,y+29);
                     draw(x+87,y+29);*/
                }   
                  
                function drawL(x,y){
                    CurrentFormName='L';
                     
                     //sens 1
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+29,y+29);
                     draw(x+29,y+58);

                     //sens 2
                  /*   x=x+87;   
                     draw(x,y);
                     draw(x+29,y);
                     draw(x,y+29);
                     draw(x+58,y);

                     //Sens 3
                     x=200,y=300;
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+58,y);
                     draw(x+58,y-29);

                     //Sens 4
                    x=300,y=300;
                     draw(x,y);
                     draw(x+29,y);
                     draw(x,y-29);
                     draw(x,y-58);*/

                } 
                   
                function drawO(x,y){
					CurrentFormName='O';
                     
                     draw(x,y);
                     draw(x+29,y);
                     draw(x,y+29);
                     draw(x+29,y+29);

                }  

                function drawJ(x,y){
                    CurrentFormName='J';
                   
                    //sens 1
                    draw(x,y);
                    draw(x,y+29);
                    draw(x+29,y+29);
                    draw(x+58,y+29);
/*                   

				   //sens 2
                    x=106;
                    draw(x,y);
                    draw(x+29,y);
                    draw(x,y+29);
                    draw(x,y+58);
                    //sens 3 
                    x=193;
                    draw(x,y);
                    draw(x+29,y);
                    draw(x+58,y);
                    draw(x+58,y+29);
                    //sens 4 
                    x=300;

                    draw(x,y);
                    draw(x+29,y);
                    draw(x+29,y-29);
                    draw(x+29,y-58);*/

                }

                function drawZ(x,y){
                    CurrentFormName='Z';
                
                    draw(x,y);
                    draw(x+29,y);
                    draw(x+29,y+29);
                    draw(x+58,y+29); 

                    //sens 2 
                   /* y=500;
                    x=145;
                    draw(x,y);
                    draw(x,y+29);
                    draw(x-29,y+29);
                    draw(x-29,y+58);    */               
                }

                function drawS(x,y){
					CurrentFormName='S';
					/*
				    draw(x,y);
                    draw(x,y+29);
                    draw(x+29,y+29);
                    draw(x+29,y+58);
                    */
					//Sens 2
					draw(x,y);
                    draw(x-29,y);
                    draw(x-29,y+29);
                    draw(x-58,y+29);
                   


                }
                
				function formInit(x,y,FormName){
                        switch (FormName) {
                            case 'S':
                                drawS(x,y);
                                break;
                            case 'Z':
                                drawZ(x,y);
                                break;
                            case 'J':
                                drawJ(x,y);
                                break;
                            case 'L':
                                drawL(x,y);
                                break;
                            case 'O':
                                drawO(x,y);
                                break;
                            case 'I':
                                drawI(x,y);
                                break;
                            case 'T':
                                drawT(x,y);
                                break;          
                            } 
				}

				function rotate( current ) {
				var newCurrent = [];
				for ( var y = 0; y < 4; ++y ) {
				newCurrent[ y ] = [];
				
				for ( var x = 0; x < 4; ++x ) {
						newCurrent[ y ][ x ] = current[ 3 - x ][ y ];
					}
				}

				return newCurrent;
				}


				
				function newForm(){
					CurrentX=150;
					CurrentY=0;
                    id= Math.floor( Math.random() * colors.length );
                    context.fillStyle = colors[id];
					context.strokeStyle = 'black';	
					var id2=Math.floor(Math.random()*7);
					CurrentFormName=forms[id2];
					
				//	formInit(CurrentX,CurrentY,CurrentFormName);
					formInit(CurrentX,CurrentY,'S');
					
					
                }

				
				// clears
				function init() {
					context.clearRect(0, 0, canvas.width, canvas.height);
				}
					
				function DefaultMouve(){
					init();
					++CurrentY;
					formInit(CurrentX,CurrentY,CurrentFormName);
											
				}
					
			
				function Game(){
					newForm();
					//setInterval(DefaultMouve,50);
					
				}
				
				Game();		
                    
				    
        			

					
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
        render();
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
    }
}
	    

				
