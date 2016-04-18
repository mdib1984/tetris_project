/*
draw.js 
version 1.0 : 

by Mustapha 
*/

 var canvas = document.getElementById( 'canvas' );
                var context = canvas.getContext( '2d' );
				var colors = ['Red','Green','Blue','Yellow','Brown','Gray','Cyan', 'Magenta', 'Orange','Pink','Purple'];

				var forms=[];
				
				/*id aleatoire pour la couleur de la forme*/
				var id; 
                
				/* 
                 Toutes les formes de ce jeu sont une composition de 4 carrés 
                  definissant ce carré de 29X29
                */    
                function draw(x,y){                
                     
                    context.fillRect(x, y, 29, 29);
                    context.strokeRect(x, y, 29, 29);
                }    
                    
                
                context.strokeStyle = 'black';      
                

                // fonctions 
                function drawI(){

                     //sens 1   
                     draw(0,0);
                     draw(29,0);
                     draw(58,0);
                     draw(87,0);
                
                     //Sens 2
                     draw(150,0);
                     draw(150,29);
                     draw(150,58);
                     draw(150,87);
                }

               

                     var x,y;
                function drawT(){
                    
 
                     x=150,y=150;
                     //sens 1
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+29,y+29);
                     draw(x+58,y);
                     
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
                     draw(x+87,y+29);
                }   
                  

                function drawL(){
                    
                     x=10,y=300;
                     //sens 1
                     draw(x,y);
                     draw(x+29,y);
                     draw(x+29,y+29);
                     draw(x+29,y+58);

                     //sens 2
                     x=x+87;   
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
                     draw(x,y-58);

                } 
                   
                function drawO(){
                   
                     x=300,y=100;
                     draw(x,y);
                     draw(x+29,y);
                     draw(x,y+29);
                     draw(x+29,y+29);

                }  

                function drawJ(){
                    
                    x=10,y=400;
                    //sens 1
                    draw(x,y);
                    draw(x,y+29);
                    draw(x+29,y+29);
                    draw(x+58,y+29);
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
                    draw(x+29,y-58);

                }

                function drawZ(){
                    
                    x=10,y=480;
                    draw(x,y);
                    draw(x+29,y);
                    draw(x+29,y+29);
                    draw(x+58,y+29); 

                    //sens 2 
                    y=500;
                    x=145;
                    draw(x,y);
                    draw(x,y+29);
                    draw(x-29,y+29);
                    draw(x-29,y+58);                   
                }

                function drawS(){
                  
                    x=258;
                    y=500;
                    draw(x,y);
                    draw(x-29,y);
                    draw(x-29,y+29);
                    draw(x-58,y+29);
                    //sens 2
                    x=300;
                    draw(x,y);
                    draw(x,y+29);
                    draw(x+29,y+29);
                    draw(x+29,y+58);
                }

                function newForm(){
                    id= Math.floor( Math.random() * colors.length );
                    context.fillStyle = colors[id];

                    var i=Math.floor(Math.random()*6);
                        switch (i) {
                            case 0:
                                drawS();
                                break;
                            case 1:
                                drawZ();
                                break;
                            case 2:
                                drawJ();
                                break;
                            case 3:
                                drawL();
                                break;
                            case 4:
                                drawO();
                                break;
                            case 5:
                                drawI();
                                break;
                            case 6:
                                drawT();
                                break;          
                            } 
                }

                newForm();
                /*
                 drawL();
                 drawI();
                 drawT();
                 drawO();
                 drawJ();
                 drawZ();    
                 drawS();   
                */
