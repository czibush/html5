function clbpqf(pname,px,py,pmap){

				if(pname == "blue"){
				
					direction = 0;

					if($("#m"+( px )+"_"+( py -1)).hasClass("field") && $("#m"+(px )+"_"+( py -1)).html() == "1") direction = 0; 
					else if($("#m"+( px -1 )+"_"+( py  )).hasClass("field") && $("#m"+(px -1 )+"_"+( py  )).html() == "1") direction = 1; 
					else if($("#m"+( px )+"_"+( py + 1)).hasClass("field") && $("#m"+(px)+"_"+( py + 1)).html() == "1") direction = 2;  
					else if($("#m"+( px + 1)+"_"+( py )).hasClass("field") && $("#m"+(px + 1)+"_"+( py )).html() == "1") direction = 3; 
					else direction = Math.floor(Math.random()*4);
					
							
					fel = $("#m"+( px )+"_"+( py - 1));
					bal = $("#m"+( px - 1 )+"_"+( py ));
					le = $("#m"+( px )+"_"+( py + 1));
					jobb = $("#m"+( px + 1)+"_"+( py ));
					fel2 = $("#m"+( px )+"_"+( py - 2));
					bal2 = $("#m"+( px - 2 )+"_"+( py ));
					le2 = $("#m"+( px )+"_"+( py + 2));
					jobb2 = $("#m"+( px + 2)+"_"+( py ));
					fel3 = $("#m"+( px )+"_"+( py - 3));
					bal3 = $("#m"+( px - 3 )+"_"+( py ));
					le3 = $("#m"+( px )+"_"+( py + 3));
					jobb3 = $("#m"+( px + 3)+"_"+( py ));
					
					flee = false;
							
					if( fel.hasClass("m0") || fel.hasClass("m1") || fel.hasClass("m2") || fel.hasClass("m3") || fel.hasClass("m4")){ direction = 2; flee = true}
					else if( bal.hasClass("m0") || bal.hasClass("m1") || bal.hasClass("m2") || bal.hasClass("m3") || bal.hasClass("m4")){ direction = 3;  flee = true}
					else if( le.hasClass("m0") || le.hasClass("m1") || le.hasClass("m2") || le.hasClass("m3") || le.hasClass("m4")){ direction = 0;  flee = true}
					else if( jobb.hasClass("m0") || jobb.hasClass("m1") || jobb.hasClass("m2") || jobb.hasClass("m3") || jobb.hasClass("m4")) {direction = 1; flee = true}	
					else if( fel2.hasClass("m0") || fel2.hasClass("m1") || fel2.hasClass("m2") || fel2.hasClass("m3") || fel2.hasClass("m4")){ direction = 2; flee = true} 
					else if( bal2.hasClass("m0") || bal2.hasClass("m1") || bal2.hasClass("m2") || bal2.hasClass("m3") || bal2.hasClass("m4")){ direction = 3;  flee = true}
					else if( le2.hasClass("m0") || le2.hasClass("m1") || le2.hasClass("m2") || le2.hasClass("m3") || le2.hasClass("m4")){ direction = 0;  flee = true}
					else if( jobb2.hasClass("m0") || jobb2.hasClass("m1") || jobb2.hasClass("m2") || jobb2.hasClass("m3") || jobb2.hasClass("m4")){ direction = 1;   flee = true}		
					else if( fel3.hasClass("m0") || fel3.hasClass("m1") || fel3.hasClass("m2") || fel3.hasClass("m3") || fel3.hasClass("m4")){ direction = 2;  flee = true}
					else if( bal3.hasClass("m0") || bal3.hasClass("m1") || bal3.hasClass("m2") || bal3.hasClass("m3") || bal3.hasClass("m4")){ direction = 3; flee = true} 
					else if( le3.hasClass("m0") || le3.hasClass("m1") || le3.hasClass("m2") || le3.hasClass("m3") || le3.hasClass("m4")){ direction = 0;  flee = true}
					else if( jobb3.hasClass("m0") || jobb3.hasClass("m1") || jobb3.hasClass("m2") || jobb3.hasClass("m3") || jobb3.hasClass("m4")){ direction = 1;   flee = true}
	 				
					if(flee)
					{
						if(direction == 0 && fel.hasClass("map9")){
							if( bal.hasClass("map9")) direction = 3;
							else direction = 1;}
							
						else if(direction == 1 && bal.hasClass("map9")){
							if( fel.hasClass("map9") ) direction = 2;
							else direction = 0;}
							
						else if(direction == 2 && le.hasClass("map9")){
							if( bal.hasClass("map9")) direction = 3;
							else direction = 1;}
							
						else if(direction == 3 && $("#m"+( px + 1)+"_"+( py )).hasClass("map9")){
							if( fel.hasClass("map9") ) direction = 2;
							else direction = 0;}
					}	
					
					$("body").trigger({
					type: "refreshmap",
					name: pname,
					walk: direction
					});
				}
				if(pname != "blue")
				{
				     $("body").trigger({
					type: "refreshmap",
					name: pname,
					walk: Math.floor(Math.random()*4)
					});
				}
}

function move(pname,px,py,pmap){
	 $("body").trigger({
					type: "refreshmap",
					name: pname,
					walk: Math.floor(Math.random()*4)
					});
}