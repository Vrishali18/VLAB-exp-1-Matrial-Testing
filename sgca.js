//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
var n=0;




function navNext()
{

     for (temp = 0; temp <= 5 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}




//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";

		}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{    
		
		refresh();
		
		
      	 document.getElementById('nextButton').style.visibility="hidden";
      	 document.getElementById('sand').style.visibility="visible";
         setTimeout(function()
         {
			
		    setTimeout(function()
		    {
		        if(document.getElementById('r').checked)
		        {
			         flag=1;
	            }
	            else   if(document.getElementById('b').checked)
			    {
		             flag=2;
		        }
			},500);
		 	 document.getElementById('nextButton').style.visibility="visible";
	
	     }, 3000);
	}
	
	else if (simsubscreennum==2)
	{  
refresh();
		 document.getElementById('sand').style.visibility="hidden";
		 document.getElementById('nextButton').style.visibility="hidden";
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 393px; top:490px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     document.getElementById('tare2-1').onmouseover="";
	         document.getElementById('on2-1').onmouseover=function(){step2();}
		 },700);
    }
	
	
	else if (simsubscreennum==3)
	{
		refresh();
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('mw').style.visibility="hidden";
         document.getElementById('p2').style.visibility="hidden";
		 document.getElementById('rdr2').style.visibility="hidden";
         document.getElementById('rdb2').style.visibility="hidden";
         document.getElementById('v2-2').style.visibility="hidden";
         document.getElementById('on2-3').style.visibility="hidden";
         document.getElementById('tare2-3').style.visibility="hidden";
		 setTimeout(function()
		 {
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 450px; top:200px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('pan').onclick=function(){step3();}
		 },1200);
    }
	else if (simsubscreennum==4)
	{
		refresh();
		 document.getElementById('pan3-1').style.visibility="hidden";
		 document.getElementById('3-1').style.visibility="hidden";
		 document.getElementById('3-2').style.visibility="hidden";
		 document.getElementById('3-3').style.visibility="hidden";
		 document.getElementById('3-4').style.visibility="hidden";
		 document.getElementById('3-5').style.visibility="hidden";
		 document.getElementById('3-6').style.visibility="hidden";
	     document.getElementById('3-7').style.visibility="hidden";
		 document.getElementById('3-9').style.visibility="hidden";
		 document.getElementById('3-10').style.visibility="hidden";
		 document.getElementById('3-11').style.visibility="hidden";
		 document.getElementById('15').style.visibility="visible";
		 document.getElementById('15a').style.visibility="visible";
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 480px; top:250px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('10').onclick=function(){step4();}
		 },800);
	}
	else if (simsubscreennum==5)
	{
		 refresh();
		 document.getElementById('12s').style.visibility="hidden";
		 document.getElementById('10').style.visibility="hidden";
		 document.getElementById('11').style.visibility="hidden";
		 document.getElementById('12').style.visibility="hidden";
		 document.getElementById('15b').style.visibility="hidden";
		 document.getElementById('15c').style.visibility="hidden";
		 document.getElementById('9a').style.visibility="hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:410px; top:180px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('5-6').onclick=function(){step5();}
	}
	else if (simsubscreennum==6)
	{
		 refresh();
		 
		 document.getElementById('sp5-1').style.visibility="hidden";
         document.getElementById('ewm5').style.visibility="hidden";
		 document.getElementById('mw5').style.visibility="hidden";
		 document.getElementById('p5').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
		 document.getElementById('riv5-3').style.visibility="hidden";
         document.getElementById('on5-1').style.visibility="hidden";
		 document.getElementById('off5-1').style.visibility="hidden";
		 document.getElementById('zero5-1').style.visibility="hidden";
		 document.getElementById('tare5-1').style.visibility="hidden";
		 document.getElementById('v5-2').style.visibility="hidden";
		 if(flag==1)
		 {
			document.getElementById('tr5-1').style.visibility="visible";
		    document.getElementById('gv1').style.visibility="visible";
			document.getElementById('gv1').onclick=function(){step6();}

		 }
		 else  if(flag==2)
		 {
			document.getElementById('tb5-1').style.visibility="visible";
		    document.getElementById('gv3').style.visibility="visible";
			document.getElementById('gv3').onclick=function(){step6();}
		 }

		
	}
	
	else if (simsubscreennum==7)
	{
		document.getElementById('step6').style.visibility="hidden";
         document.getElementById('step6-1').style.visibility="hidden";

		 document.getElementById('six').style.visibility="hidden";

		 
		 document.getElementById('tr5-2').style.visibility="hidden";
	     document.getElementById('tb5-2').style.visibility="hidden";
	     
		 document.getElementById('nextButton').style.visibility="hidden";
         if(flag==1)
		 {
			  document.getElementById('rcan8-1').style.visibility="visible";
			  document.getElementById('rcan8-2').style.visibility="visible";
			  document.getElementById('rcan8-3').style.visibility="visible";
			  document.getElementById('rcan8-4').style.visibility="visible";
			  document.getElementById('rcan8-5').style.visibility="visible";
		 }
		 else if(flag==2)
		 {
			  document.getElementById('bcan8-1').style.visibility="visible";
			  document.getElementById('bcan8-2').style.visibility="visible";
			  document.getElementById('bcan8-3').style.visibility="visible";
			  document.getElementById('bcan8-4').style.visibility="visible";
			  document.getElementById('bcan8-5').style.visibility="visible";
		 }
		 
		 setTimeout(function()
		 {
		 if(flag==1)
		 {
			  document.getElementById('rcan8-1').innerHTML="Effective size at 10% finer by weight, D<sub>10</sub>="+river1[0];
			  document.getElementById('rcan8-2').innerHTML="Effective size at 30% finer by weight, D<sub>30</sub>="+river1[1];
			  document.getElementById('rcan8-3').innerHTML="Effective size at 60% finer by weight, D<sub>60</sub>="+river1[2];
			  document.getElementById('rcan8-4').innerHTML="Uniformity coefficient, C<sub>u</sub>="+river1[3];
			  document.getElementById('rcan8-5').innerHTML="Curvature coefficient, C<sub>c</sub>="+river1[4];
		 }
		 else if(flag==2)
		 {
			  document.getElementById('bcan8-1').innerHTML="Effective size at 10% finer by weight, D<sub>10</sub>="+beach1[0];
			  document.getElementById('bcan8-2').innerHTML="Effective size at 30% finer by weight, D<sub>30</sub>="+beach1[1];
			  document.getElementById('bcan8-3').innerHTML="Effective size at 60% finer by weight, D<sub>60</sub>="+beach1[2];
			  document.getElementById('bcan8-4').innerHTML="Uniformity coefficient, C<sub>u</sub>="+beach1[3];
			  document.getElementById('bcan8-5').innerHTML="Curvature coefficient, C<sub>c</sub>="+beach1[4];
		 }
		 },800);
		 		 document.getElementById('nextButton').style.visibility="visible";

	}
	
	
	else if (simsubscreennum==8)
	{
		document.getElementById('canvas7').style.visibility="hidden";

		document.getElementById('rcan8-1').style.visibility="hidden";
			  document.getElementById('rcan8-2').style.visibility="hidden";
			  document.getElementById('rcan8-3').style.visibility="hidden";
			  document.getElementById('rcan8-4').style.visibility="hidden";
			  document.getElementById('rcan8-5').style.visibility="hidden";
			  
			  
		      document.getElementById('bcan8-1').style.visibility="hidden";
			  document.getElementById('bcan8-2').style.visibility="hidden";
			  document.getElementById('bcan8-3').style.visibility="hidden";
			  document.getElementById('bcan8-4').style.visibility="hidden";
			  document.getElementById('bcan8-5').style.visibility="hidden";
	     
		 document.getElementById('six').style.visibility="hidden";

	     document.getElementById('nextButton').style.visibility="hidden";
		 
		 //document.getElementById('step7text1').style="visibility:visible; border:1px solid; position:absolute; cursor:pointer; padding:5px; left:30px; top:50px ";
		 //document.getElementById('graph').src="images/rivgraph.png"
		 document.getElementById('step7text1').onclick=function(){step8();}

    }
}
    
	
	
	function step2()
	{
		 myStopFunction();
		 document.getElementById('on2-1').style.visibility="hidden";
         document.getElementById('on2-2').style.visibility="visible";
         document.getElementById('on2-2').onclick=function(){step21();}
    }
	
	function step21()
	{
         document.getElementById('mw').style.visibility="visible";
	     document.getElementById('on2-3').style.visibility="visible";
		 document.getElementById('on2-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('hp2-1').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:300px; top:210px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(235deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(235deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(235deg)";
             document.getElementById('hp2-1').onclick=function(){step22();}
		 },1000);						             

	}
	
	
	
	function step22()
	{
		 myStopFunction();
		 document.getElementById('hp2-1').style.visibility="hidden";
	     document.getElementById('p2').style.visibility="visible";
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:485px; top:490px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
             document.getElementById('tare2-1').onmouseover=function(){step23();} 
		 },800); 		 
    }
	
	
	
	
	
	function step23()
	{
		 myStopFunction();
		 document.getElementById('tare2-1').style.visibility="hidden";
         document.getElementById('tare2-2').style.visibility="visible";
		 document.getElementById('tare2-2').onclick=function(){step24();}               
    }
	
	function step24()
	{
         document.getElementById('v2-1').style.visibility="visible";
	     document.getElementById('tare2-3').style.visibility="visible";
		 document.getElementById('tare2-2').style.visibility="hidden";
		 setTimeout(function()
		 {   if(flag==1)
			 {
		     document.getElementById('handr').style.visibility="visible";
			 }
			 else if(flag==2)
			 {
				document.getElementById('handb').style.visibility="visible";
			 }
		 },500);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:680px; top:180px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 if(flag==1)
             document.getElementById('handr').onclick=function(){step25();} 
		     else if(flag==2)
			 document.getElementById('handb').onclick=function(){step25();}
		 },1000);			 
	}
		
	function step25()
	{
	     myStopFunction();
		 if(flag==1)
		 {
         document.getElementById('handr').style.transformOrigin = "100% 80%";
	     document.getElementById('handr').style.animation = "valveturn-4 1.5s forwards ";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('handb').style.transformOrigin = "100% 80%";
	         document.getElementById('handb').style.animation = "valveturn-4 1.5s forwards ";
		 }
	    if(flag==1)
	    {
			   
			 setTimeout(function()
			 {
                 document.getElementById('prs2').style.visibility="visible";
        	 },700);
			 setTimeout(function()
			 {	
			     document.getElementById('v2-1').style.visibility="hidden";
                 document.getElementById('rdr2').style.visibility="visible";
			     document.getElementById('prs2').style.visibility="hidden";
			     document.getElementById('v2-2').style.visibility="visible";
             },1000);
             setTimeout(function(){
			 		     document.getElementById('handr').style.visibility="hidden";
			  },1500);
		}
	    else if(flag==2)
	    {
		     setTimeout(function()
			 {
			     document.getElementById('pbs2').style.visibility="visible";
		     },700);

		     setTimeout(function()
			 {
			     document.getElementById('v2-1').style.visibility="hidden";
                 document.getElementById('rdb2').style.visibility="visible";
				 document.getElementById('pbs2').style.visibility="hidden";
			     document.getElementById('v2-2').style.visibility="visible";
             },1000);
			 setTimeout(function()
			 {
				 document.getElementById('handb').style.visibility="hidden";
			 },1500);

	    }
		 setTimeout(function()
		 {
			 document.getElementById('nextButton').style.visibility="visible";
		 },2500);  
	}
	
	function step3()
	{
		 myStopFunction();
         document.getElementById('pan').style.visibility="hidden";
		 document.getElementById('pan3-1').style.visibility="visible";
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 600px; top:200px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
		     refresh();
		     document.getElementById('1').onclick=function(){step31();}
		 },500);
	}
	function step31()
	{
		 myStopFunction();
         document.getElementById('1').style.visibility="hidden";
		 document.getElementById('3-1').style.visibility="visible";
		 setTimeout(function()
		 {
            myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:300px; height: 40px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('2').onclick=function(){step32();}
		 },500);
	}
	function step32()
	{
		 myStopFunction();
         document.getElementById('2').style.visibility="hidden";
		 document.getElementById('3-2').style.visibility="visible";
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 600px; top:300px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('3').onclick=function(){step33();}
		 },500);
	}
	function step33()
	{
		 myStopFunction();
         document.getElementById('3').style.visibility="hidden";
		 document.getElementById('3-3').style.visibility="visible";
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 450px; top:400px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		  document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('4').onclick=function(){step34();}
		 },500);
	}
	function step34()
	{
		 myStopFunction();
         document.getElementById('4').style.visibility="hidden";
		 document.getElementById('3-4').style.visibility="visible";
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 600px; top:400px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('5').onclick=function(){step35();}
		 },500);
	}
	function step35()
	{
		 myStopFunction();
         document.getElementById('5').style.visibility="hidden";
		 document.getElementById('3-5').style.visibility="visible";
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 450px; top:500px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('6').onclick=function(){step36();}
		 },500);
	}
	function step36()
	{
		 myStopFunction();
         document.getElementById('6').style.visibility="hidden";
		 document.getElementById('3-6').style.visibility="visible";
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 600px; top:500px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 refresh();
		 document.getElementById('7').onclick=function(){step37();}
		 },500);
	}
	function step37()
	{
		 myStopFunction();
         document.getElementById('7').style.visibility="hidden";
		 document.getElementById('3-7').style.visibility="visible";
         myStopFunction();
         refresh();
		 setTimeout(function()
		 {
		    if(flag==1)
		    {    setTimeout(function(){
			     document.getElementById('plate3-2').style.visibility="visible";
		         document.getElementById('rdr3-1').style.visibility="visible";
			    },500);
				 setTimeout(function()
				 {
			     myInt = setInterval(function(){ animatearrow(); }, 500);
		         document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 465px; top:140px; height: 40px; z-index: 10;";
			     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		         // Code for IE9
		         document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		         // Standard syntax
		         document.getElementById("arrow1").style.transform = "rotate(360deg)";
                 document.getElementById('plate3-2').onclick=function(){step38();}
				 },900);
            }
		    else if(flag==2)
		    {
				setTimeout(function(){
			     document.getElementById('plate3-1').style.visibility="visible";
		         document.getElementById('rdb3-1').style.visibility="visible";
				},500);
				 setTimeout(function()
				 {
					 
			     myInt = setInterval(function(){ animatearrow(); }, 500);
		         document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 465px; top:140px; height: 40px; z-index: 10;";
			     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		         // Code for IE9
		         document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		         // Standard syntax
		         document.getElementById("arrow1").style.transform = "rotate(360deg)";
                 document.getElementById('plate3-1').onclick=function(){step39();}
				 },800);
            }
		 },500);
    }
	function step38()
	{
		 myStopFunction();
         document.getElementById('plate3-2').style.transformOrigin = "100% 80%";
	     document.getElementById('plate3-2').style.animation = "valveturn-2 1.0s forwards ";
		 setTimeout(function()
		 {
	         document.getElementById('rs3-1').style.visibility="visible";
		 },500);
		 document.getElementById('rdr3-1').style.visibility="hidden";
		 setTimeout(function()
		 {
		     document.getElementById('plate3-2').style.visibility="hidden";
             document.getElementById('rs3-1').style.visibility="hidden";
         },800); 

		 setTimeout(function()
		 {
		     document.getElementById('3-11').style.visibility="visible";
             document.getElementById('3-8').style.visibility="visible";
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 495px; top:240px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('3-8').onclick=function(){step310();}
		 },1000);
    }
	function step39()
	{
		 myStopFunction();
         document.getElementById('plate3-1').style.transformOrigin = "100% 80%";
	     document.getElementById('plate3-1').style.animation = "valveturn-2 1.0s forwards ";
		 setTimeout(function()
		 {
	         document.getElementById('bs3-1').style.visibility="visible";
		 },500);
		 document.getElementById('rdb3-1').style.visibility="hidden";
         setTimeout(function()
		 {
		     document.getElementById('plate3-1').style.visibility="hidden";
             document.getElementById('bs3-1').style.visibility="hidden";
         },800);

         setTimeout(function(){
		     document.getElementById('3-10').style.visibility="visible";
             document.getElementById('3-8').style.visibility="visible";
			 setTimeout(function(){
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 495px; top:240px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
		     document.getElementById('3-8').style.visibility="visible";
             document.getElementById('3-8').onclick=function(){step310();}
		 },950);
		 },1100);
    }
	
	function step310()
	{
		 myStopFunction();
		 document.getElementById('3-8').style.visibility="hidden";
		 document.getElementById('3-9').style.visibility="visible";
         setTimeout(function()
		 {
			 document.getElementById('nextButton').style.visibility="visible";
         },1000);
	}
	
	
	
	function step4()
	{
		 myStopFunction();
		 document.getElementById('10').style.visibility="hidden";
		 document.getElementById('12').style.visibility="visible";
		 document.getElementById('9').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:470px; top:235px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
         document.getElementById('9').onclick=function(){step41();}
	}
	 function step41()
	{
		 myStopFunction();
		 document.getElementById('9').style.visibility="hidden";
		 document.getElementById('9a').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:220px; top:200px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('15').onclick=function(){step42();}
    }
	function step42()
	{
		 myStopFunction();
		 document.getElementById('15').style.visibility="hidden";
		 document.getElementById('15b').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:400px; top:180px; height: 40px; z-index: 10;";
         document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('15a').onclick=function(){step43();}
	}
	function step43()
	{
		 myStopFunction();
		 document.getElementById('15a').style.visibility="hidden";
		 document.getElementById('15c').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:535px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		 document.getElementById('11on').onmouseover=function(){step44();}
	}
	function step44()
	{
	     myStopFunction();
		 document.getElementById('11on').style.visibility="hidden";
		 document.getElementById('11bon').style.visibility="visible";
		 document.getElementById('11bon').onclick=function(){step45();}
	}
	function step45()
	{
		 document.getElementById('12s').style.visibility="visible";

		 document.getElementById('11bon').style.visibility="hidden";
         document.getElementById('12').style.visibility="hidden";
		 // document.getElementById('12').style.visibility="hidden";
		 // document.getElementById('9a').style.visibility="hidden";
		 // document.getElementById('15b').style.visibility="hidden";
		 // document.getElementById('15c').style.visibility="hidden";
		/*  setTimeout(function()
		 {
			 alert("Please HOVER on the SIEVE SET to shake it");
		 },100); */
		 
		 document.getElementById('stat1').style.visibility="visible";
		 setTimeout(function(){
			 		 document.getElementById('stat1').style.visibility="hidden";
		 },2500);
        
		 setTimeout(function(){
			 		 //document.getElementById('stat2').style.visibility="visible";
					 document.getElementById('12s').style.visibility="hidden";
					 document.getElementById('12').style.visibility="visible";

		 },4000);
		 
		 setTimeout(function(){
         document.getElementById('nextButton').style.visibility="visible";
		 },4000);
    }
	
	
	
    function step5()
    {
		 myStopFunction();
		 document.getElementById('5-6').style.visibility="hidden";
		 document.getElementById('5-8').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:220px; top:200px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-5').onclick=function(){step51();}
    }
	function step51()
    {
		 myStopFunction();
		 document.getElementById('5-5').style.visibility="hidden";
		 document.getElementById('5-7').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:180px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(-900deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		 document.getElementById('5-3').onclick=function(){step52();}
    }
	function step52()
    {
		 myStopFunction();
		 document.getElementById('5-3').style.visibility="hidden";
		 document.getElementById('5-4').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:180px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		 document.getElementById('5-2').onclick=function(){step53();}
    }
	function step53()
    {
		 myStopFunction();
		 document.getElementById('5-2').style.visibility="hidden";
		 //document.getElementById('5-9').style.visibility="visible";
		 document.getElementById('5-4').style.visibility="hidden";
		 document.getElementById('5-7').style.visibility="hidden";
		 document.getElementById('5-8').style.visibility="hidden";
		 //setTimeout(function()
		 //{
		 //myStopFunction();
		 //document.getElementById('5-9').style.visibility="hidden";
	
		 document.getElementById('5-1').style.visibility="hidden";
		
		 document.getElementById('5-10').style.visibility="visible";
		 document.getElementById('5-11').style.visibility="visible";
		 document.getElementById('5-12').style.visibility="visible";
		 document.getElementById('5-13').style.visibility="visible";
		 document.getElementById('5-14').style.visibility="visible";
		 document.getElementById('5-15').style.visibility="visible";
		 document.getElementById('5-16').style.visibility="visible";
		 document.getElementById('5-17').style.visibility="visible";
		 document.getElementById('5-18').style.visibility="visible";
         // },1000);
		 
		 setTimeout(function()
		 {
             document.getElementById('zero5-1').style.visibility="visible";
             document.getElementById('on5-1').style.visibility="visible";
		     document.getElementById('off5-1').style.visibility="visible";
		     document.getElementById('mw5').style.visibility="visible";
		     document.getElementById('tare5-1').style.visibility="visible";
		     document.getElementById('ewm5').style.visibility="visible";
		     document.getElementById('p5').style.visibility="visible";
         },800);
		 
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:570px; top: 280px; height: 40px; z-index: 10;";
			 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(180deg)";
		     document.getElementById('5-18').onclick=function(){step54();}
         },1500);
	}
	
	function step54()
	{
		 myStopFunction();
		 document.getElementById('5-18').style.visibility="hidden";
		 if(flag==1)
		 {
			 document.getElementById('5a').style.visibility="visible";
         }
		 else if(flag==2)
		 {
			 document.getElementById('5b').style.visibility="hidden";
         }
		 setTimeout(function()
		 {
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top: 290px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-17').onclick=function(){step55();}
		 },300);
	}
	
	
	function step55()
	{
		 myStopFunction();
		 document.getElementById('5-17').style.visibility="hidden";
		 document.getElementById('s5-7').style.visibility="visible";
		 if(flag==1)
		 {
			 document.getElementById('5a').style.visibility="hidden";
			 document.getElementById('5c').style.visibility="visible";
			 document.getElementById('riv5-1a').style.visibility="visible";
         }
		 else if(flag==2)
		 {
			 document.getElementById('5b').style.visibility="hidden";
             document.getElementById('5d').style.visibility="hidden";
			 document.getElementById('bch5-1').style.visibility="hidden";
         }
		 setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step55a();}
		 },500);
	}
	function step55a()
	{
         myStopFunction();
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('s5-7').onclick=function(){step55b();}
		 },500);
	}
	function step55b()
	{
		 myStopFunction();
		 document.getElementById('s5-7').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-7').style.animation = "valveturn-2 1.0s forwards ";
		 if(flag==1)
		 {
			 document.getElementById('riv5-1a').style.visibility="hidden";
			 document.getElementById('riv5-4').style.visibility="visible";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="hidden";
		 }
		 setTimeout(function()
		 {
		    if(flag==1)
		    { 
			     document.getElementById('riv5-4').style.visibility="hidden";
				 document.getElementById('riv5-3a').style.visibility="visible";
		    }
		    else if(flag==2)
		    { 
			     document.getElementById('bch5-2').style.visibility="hidden";
				 document.getElementById('bch5-3').style.visibility="hidden";
		    }
		 },800);		
		 setTimeout(function()
		 {
            if(flag==1)
		    {
		 	     document.getElementById('s5-7').style.visibility="hidden";
			     document.getElementById('v5-1').style.visibility="hidden";
                 document.getElementById('v5-2').innerHTML=river[0] +".00 g";
			     document.getElementById('v5-2').style.visibility="visible";
            }
            else if(flag==2)
		    {
			     document.getElementById('s5-7').style.visibility="hidden";
			     document.getElementById('v5-1').style.visibility="hidden";
			     document.getElementById('v5-2').innerHTML=beach[0] +".00 g";
			 	 document.getElementById('v5-2').style.visibility="visible";
            }
		 },500);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:320px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-16').onclick=function(){step56();}
		 },800);
	}
	function step56()
	{
		 myStopFunction();
         document.getElementById('riv5-3a').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
         document.getElementById('5-16').style.visibility="hidden";
		 document.getElementById('s5-6').style.visibility="visible";
		if(flag==1)
		{
			 document.getElementById('5c').style.visibility="hidden";
			 document.getElementById('5e').style.visibility="visible";
			 document.getElementById('riv5-1b').style.visibility="visible";
        }
		else if(flag==2)
		{
			 document.getElementById('5d').style.visibility="hidden";
             document.getElementById('5f').style.visibility="visible";
			 document.getElementById('bch5-1').style.visibility="hidden";
        }
		setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step56a();}
		},500);
	}
	function step56a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:540px; top:185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-6').onclick=function(){step56b();}
		 },500);
	}
	
	function step56b()
	{
		
		 myStopFunction();
		 document.getElementById('s5-6').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-6').style.animation = "valveturn-2 1.0s forwards ";
		 
		 if(flag==1)
		 {
			 document.getElementById('riv5-1b').style.visibility="hidden";
			 document.getElementById('riv5-4').style.visibility="visible";
		 }
		 else if(flag==2)
		 {
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="hidden";
		 }
		 setTimeout(function()
		 {
		    if(flag==1)
		    { 
			     document.getElementById('riv5-4').style.visibility="hidden";
			     document.getElementById('riv5-3b').style.visibility="visible";
		    }
		    else if(flag==2)
		    { 
			     document.getElementById('bch5-2').style.visibility="hidden";
			     document.getElementById('bch5-3').style.visibility="hidden";
		    }
		 },800);	
        setTimeout(function()
		 {		 
        if(flag==1)
		{
			 document.getElementById('s5-6').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[1] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		}
        else if(flag==2)
		{
			 document.getElementById('s5-6').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[1] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		}
		},500);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:350px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-15').onclick=function(){step57();}
		 },800);
	}
	function step57()
	{
		 myStopFunction();
         document.getElementById('riv5-3b').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
         document.getElementById('5-15').style.visibility="hidden";
		 document.getElementById('s5-5').style.visibility="visible";
		if(flag==1)
		{
			 document.getElementById('5e').style.visibility="hidden";
			 document.getElementById('5g').style.visibility="visible";
			 document.getElementById('riv5-1c').style.visibility="visible";
        }
		else if(flag==2)
		{
			 document.getElementById('5f').style.visibility="hidden";
             document.getElementById('5h').style.visibility="visible";
			 document.getElementById('bch5-1').style.visibility="visible";
        }
		setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step57a();}
		},500);
	}
	function step57a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-5').onclick=function(){step57b();}
		 },500);
	}
	
	function step57b()
	{
		
		myStopFunction();
		document.getElementById('s5-5').style.transformOrigin = "100% 80%";
	    document.getElementById('s5-5').style.animation = "valveturn-2 1.0s forwards ";
		
		if(flag==1)
		{
			document.getElementById('riv5-1c').style.visibility="hidden";
			document.getElementById('riv5-4').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('bch5-1').style.visibility="hidden";
			document.getElementById('bch5-2').style.visibility="visible";
		}
		setTimeout(function()
		{
		if(flag==1)
		{ 
			 document.getElementById('riv5-4').style.visibility="hidden";
			  document.getElementById('riv5-3c').style.visibility="visible";
		}
		else if(flag==2)
		{ 
			 document.getElementById('bch5-2').style.visibility="hidden";
			 document.getElementById('bch5-3').style.visibility="visible";
		}
		},800);	
        setTimeout(function()
		 {		
        if(flag==1)
		{
			 document.getElementById('s5-5').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[2] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
		}
        else if(flag==2)
		{
			 document.getElementById('s5-5').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[2] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
		 },500);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:380px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-14').onclick=function(){step58();}
		 },800);
	}
	function step58()
	{
		 myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('riv5-3c').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
         document.getElementById('5-14').style.visibility="hidden";
		 document.getElementById('s5-4').style.visibility="visible";
		if(flag==1)
		{
			 document.getElementById('5g').style.visibility="hidden";
			 document.getElementById('5i').style.visibility="visible";
			 document.getElementById('riv5-1d').style.visibility="visible";
        }
		else if(flag==2)
		{
			 document.getElementById('5h').style.visibility="hidden";
             document.getElementById('5j').style.visibility="visible";
			 document.getElementById('bch5-1').style.visibility="visible";
        }
		setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute;left:380px; top:495px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step58a();}
		},500);
	}
	function step58a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-4').onclick=function(){step58b();}
		 },500);
	}
	
	function step58b()
	{
		
		 myStopFunction();
		 document.getElementById('s5-4').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-4').style.animation = "valveturn-2 1.0s forwards ";
		
		if(flag==1)
		{
			 document.getElementById('riv5-1d').style.visibility="hidden";
			 document.getElementById('riv5-4').style.visibility="visible";
		}
		else if(flag==2)
		{
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="visible";
		} 
		setTimeout(function()
		{
		     if(flag==1)
		    { 
			     document.getElementById('riv5-4').style.visibility="hidden";
				 document.getElementById('riv5-3d').style.visibility="visible";
		    }
		     else if(flag==2)
		    { 
			     document.getElementById('bch5-2').style.visibility="hidden";
				 document.getElementById('bch5-3').style.visibility="visible";
		    }
		},800);	
         setTimeout(function()
		 {		
        if(flag==1)
		{
			 document.getElementById('s5-4').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[3] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
        else if(flag==2)
		{
			 document.getElementById('s5-4').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[3] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
		 },500);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:410px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-13').onclick=function(){step59();}
		 },800);
	}
	function step59()
	{
		 myStopFunction();
         document.getElementById('riv5-3d').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
         document.getElementById('5-13').style.visibility="hidden";
		 document.getElementById('s5-3').style.visibility="visible";
		if(flag==1)
		{
			 document.getElementById('5i').style.visibility="hidden";
			 document.getElementById('5k').style.visibility="visible";
			 document.getElementById('riv5-1e').style.visibility="visible";
        }
		else if(flag==2)
		{
			 document.getElementById('5j').style.visibility="hidden";
             document.getElementById('5l').style.visibility="visible";
			 document.getElementById('bch5-1').style.visibility="visible";
        }
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step59a();}
	}
	function step59a()
	{
		 setTimeout(function(){
         myStopFunction();
	     document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-3').onclick=function(){step59b();}
		 },500);
	}
	
	function step59b()
	{
		 myStopFunction();
		 document.getElementById('s5-3').style.transformOrigin = "100% 80%";
	     document.getElementById('s5-3').style.animation = "valveturn-2 1.0s forwards ";
		if(flag==1)
		{
			 document.getElementById('riv5-1e').style.visibility="hidden";
			 document.getElementById('riv5-4').style.visibility="visible";
		}
		else if(flag==2)
		{
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="visible";
		}
		setTimeout(function()
		{
		    if(flag==1)
		    { 
			     document.getElementById('riv5-4').style.visibility="hidden";
				 document.getElementById('riv5-3e').style.visibility="visible";
		    }
		    else if(flag==2)
		    { 
			     document.getElementById('bch5-2').style.visibility="hidden";
				 document.getElementById('bch5-3').style.visibility="visible";
		    }
		},800);	
         setTimeout(function()
		 {		
        if(flag==1)
		{
			 document.getElementById('s5-3').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[4] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
        else if(flag==2)
		{
			 document.getElementById('s5-3').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[4] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
		 },500);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:440px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-12').onclick=function(){step510();}
		 },500);
	}
	
	
	
	
	function step510()
	{
		 myStopFunction();
         document.getElementById('riv5-3e').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
         document.getElementById('5-12').style.visibility="hidden";
		 document.getElementById('s5-2').style.visibility="visible";
		if(flag==1)
		{
			 document.getElementById('5k').style.visibility="hidden";
			 document.getElementById('5m').style.visibility="visible";
			 document.getElementById('riv5-1f').style.visibility="visible";
        }
		else if(flag==2)
		{
			 document.getElementById('5l').style.visibility="hidden";
             document.getElementById('5n').style.visibility="visible";
			 document.getElementById('bch5-1').style.visibility="visible";
        }
		setTimeout(function(){
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step510a();}
		},500);
	}
	function step510a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-2').onclick=function(){step510b();}
		 },500);
	}
	
	function step510b()
	{
		 myStopFunction();
		 
		     document.getElementById('s5-2').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-2').style.animation = "valveturn-2 1.0s forwards ";
		
		if(flag==1)
		{
			 document.getElementById('riv5-1f').style.visibility="hidden";
			 document.getElementById('riv5-4').style.visibility="visible";
		}
		else if(flag==2)
		{
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="visible";
		}
		setTimeout(function()
		{
		    if(flag==1)
		    { 
			     document.getElementById('riv5-4').style.visibility="hidden";
				 document.getElementById('riv5-3').style.visibility="visible";
		    }
		    else if(flag==2)
		    { 
			     document.getElementById('bch5-2').style.visibility="hidden";
				 document.getElementById('bch5-3').style.visibility="visible";
		    }
		},800);	
         setTimeout(function()
		 {		
        if(flag==1)
		{
			 document.getElementById('s5-2').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[5] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
        else if(flag==2)
		{
			 document.getElementById('s5-2').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[5] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
		},500);
		setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top: 470px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('5-11').onclick=function(){step511();}
		},800);
	}
	
	
	
	 function step511()
	{
		 myStopFunction();
         document.getElementById('riv5-3').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";
         document.getElementById('5-11').style.visibility="hidden";
		 document.getElementById('s5-1').style.visibility="visible";
		if(flag==1)
		{
			 document.getElementById('5m').style.visibility="hidden";
			 document.getElementById('5o').style.visibility="visible";
			 document.getElementById('riv5-1').style.visibility="visible";

		}
		else if(flag==2)
		{
			 document.getElementById('5n').style.visibility="hidden";
             document.getElementById('5p').style.visibility="visible";
			 document.getElementById('bch5-1').style.visibility="visible";

		}
         myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
         document.getElementById('tare5-1').onclick=function(){step511a();}
	}
	function step511a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('s5-1').onclick=function(){step511b();}
		 },500);
	}
	
	function step511b()
	{
		
		 myStopFunction();
		
		     document.getElementById('s5-1').style.transformOrigin = "100% 80%";
	         document.getElementById('s5-1').style.animation = "valveturn-2 1.0s forwards ";
		
		if(flag==1)
		{
			 document.getElementById('riv5-1').style.visibility="hidden";
			 document.getElementById('riv5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="visible";
		}
		setTimeout(function()
		{
		if(flag==1)
		{ 
			 document.getElementById('riv5-2').style.visibility="hidden";
			 document.getElementById('riv5-3').style.visibility="visible";
		}
		else if(flag==2)
		{ 
			 document.getElementById('bch5-2').style.visibility="hidden";
			 document.getElementById('bch5-3').style.visibility="visible";
		}
		},800);     
        		
		setTimeout(function()
		 {
        if(flag==1)
		{
			 document.getElementById('s5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[6] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		}
        else if(flag==2)
		{
			 document.getElementById('s5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[6] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";
        }
		 },500);
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px;  top:500px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		 document.getElementById('5-10').onclick=function(){step512();}
		 },800);
	}
	
	
	function step512()
	{
		 myStopFunction();
		

		 document.getElementById('riv5-3').style.visibility="hidden";
		 document.getElementById('bch5-3').style.visibility="hidden";

		 document.getElementById('5-10').style.visibility="hidden";
		 document.getElementById('sp5-1').style.visibility="visible";
		if(flag==1)
		{
			         document.getElementById('5m').style.visibility="hidden";
					 document.getElementById('5o').style.visibility="hidden";
					 document.getElementById('riv5-1').style.visibility="visible";

		}
		else if(flag==2)
		{
			         document.getElementById('5n').style.visibility="hidden";
                     document.getElementById('5p').style.visibility="hidden";
					 document.getElementById('bch5-1').style.visibility="visible";

		}

		setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:495px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
        document.getElementById('tare5-1').onclick=function(){step512a();}
		},500);
	}
	function step512a()
	{
         myStopFunction();
		 document.getElementById('v5-2').style.visibility="hidden";
         document.getElementById('v5-1').style.visibility="visible";
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:540px; top: 185px; height: 40px; z-index: 10;";
			
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		
		 document.getElementById('sp5-1').onclick=function(){step512b();}
		 },500);
	}
	
	function step512b()
	{
		
		 myStopFunction();
		 
		     document.getElementById('sp5-1').style.transformOrigin = "100% 80%";
	         document.getElementById('sp5-1').style.animation = "valveturn-2 1.0s forwards ";
		 
		if(flag==1)
		{
			 document.getElementById('riv5-1').style.visibility="hidden";
			 document.getElementById('riv5-2').style.visibility="visible";
		}
		else if(flag==2)
		{
			 document.getElementById('bch5-1').style.visibility="hidden";
			 document.getElementById('bch5-2').style.visibility="visible";
		}
		setTimeout(function()
		{
		    if(flag==1)
		    { 
			     document.getElementById('riv5-2').style.visibility="hidden";
				 document.getElementById('riv5-3').style.visibility="visible";
		    }
		    else if(flag==2)
		    { 
			     document.getElementById('bch5-2').style.visibility="hidden";
			     document.getElementById('bch5-3').style.visibility="visible";
		    }
		},800);	
        setTimeout(function()
		 {		
        if(flag==1)
		{
			 document.getElementById('sp5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
             document.getElementById('v5-2').innerHTML=river[7] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		}
        else if(flag==2)
		{
			 document.getElementById('sp5-1').style.visibility="hidden";
			 document.getElementById('v5-1').style.visibility="hidden";
			 document.getElementById('v5-2').innerHTML=beach[7] +".00 g";
			 document.getElementById('v5-2').style.visibility="visible";

		}
		},500);
		setTimeout(function()
		{		
	         document.getElementById('nextButton').style.visibility="visible";
		},500);
	}
	
	function step6()
	{
		if(flag==1)
		{
	     document.getElementById('gv1').style.visibility="hidden";
	     document.getElementById('tr5-2').style.visibility="visible";
         document.getElementById('tr5-1').style.visibility="hidden";
	    }
	
        else if(flag==2)
		{
	     document.getElementById('gv3').style.visibility="hidden";
	     document.getElementById('tb5-2').style.visibility="visible";
         document.getElementById('tb5-1').style.visibility="hidden";
	    }
		document.getElementById('nextButton').style.visibility="visible";
	}
	
	
	function step8()
	{
		if(flag==1)
		{
			  // document.getElementById('graph1').style.visibility="visible";
			  	
$("#chartContainer").ejChart(
        {
 		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Sieve Size in mm' },
                range: { min: 0, max: 5, interval:0.5 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				
				 labelFormat: "{value}",
                title: { text: 'Cumulative % error' },
                range: { min: 0, max: 100, interval: 10 }
				
               
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: rivval[0][0], y: rivval[1][0]},
				{ x: rivval[0][1], y: rivval[1][1]},
				{ x: rivval[0][2], y: rivval[1][2]},
				{ x: rivval[0][3], y: rivval[1][3]},
				{ x: rivval[0][4], y: rivval[1][4]},
				{ x: rivval[0][5], y: rivval[1][5]},
				{ x: rivval[0][6], y: rivval[1][6]}
				
				],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });

		}
		else if(flag==2)
		{
$("#chartContainer").ejChart(
        {
 		    //Initializing Primary X Axis	
		    primaryXAxis:
            {
			    labelFormat: "{value}",
                title: { text: 'Sieve Size in mm' },
                range: { min: 0, max: 5, interval:0.5 }
            },	
			
			//Initializing Primary Y Axis	
            primaryYAxis:
            {
				
				 labelFormat: "{value}",
                title: { text: 'Cumulative % error' },
                range: { min: 0, max: 110, interval: 10 }
				
               
            },	
			
			//Initializing Common Properties for all the series
           
            //Initializing Series				
            series: 
			[
			    {
                points: [
				{ x: bchval[0][0], y: bchval[1][0]},
				{ x: bchval[0][1], y: bchval[1][1]},
				{ x: bchval[0][2], y: bchval[1][2]},
				{ x: bchval[0][3], y: bchval[1][3]},
				{ x: bchval[0][4], y: bchval[1][4]},
				{ x: bchval[0][5], y: bchval[1][5]},
				{ x: bchval[0][6], y: bchval[1][6]}
				
				],
				type: 'spline',
					fill: "#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
						id:"cir",
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                }
			],
             load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });


		}
		 

		
	}

	
	

	function refresh()
	{
		  document.getElementById('pan').onclick="";      
		  document.getElementById('1').onclick="";              
		  document.getElementById('2').onclick="";              
		  document.getElementById('3').onclick="";              
		  document.getElementById('4').onclick="";              
		  document.getElementById('5').onclick="";              
		  document.getElementById('6').onclick="";              
		  document.getElementById('7').onclick="";                            
		  document.getElementById("arrow1").style.animation = "";
          document.getElementById("sand").style.transformOrigin = "";

		
	}
	
