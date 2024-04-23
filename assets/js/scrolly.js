var scrollVis=function(){var width=window.innerWidth,height=window.innerHeight;var margin={top:0,left:0,bottom:0,right:0};var lastIndex=-1;var activeIndex=0;var svg=null;var g=null;var activateFunctions=[];var updateFunctions=[];var chart=function(selection){selection.each(function(){setupSections();});};setupVis=function(){};setupSections=function(){activateFunctions[0]=showTitle0;activateFunctions[1]=showTitle1;activateFunctions[2]=showTitle2;activateFunctions[3]=showTitle3;activateFunctions[4]=showTitle4;activateFunctions[5]=showTitle5;activateFunctions[6]=showTitle6;activateFunctions[7]=showTitle7;activateFunctions[8]=showTitle8;activateFunctions[9]=showTitle9;activateFunctions[10]=showTitle10;activateFunctions[11]=showTitle11;activateFunctions[12]=showTitle12;activateFunctions[13]=showTitle13;activateFunctions[14]=showTitle14;activateFunctions[15]=showTitle15;activateFunctions[16]=showTitle16;activateFunctions[17]=showTitle17;activateFunctions[18]=showTitle18;activateFunctions[19]=showTitle19;activateFunctions[20]=showTitle20;activateFunctions[21]=showTitle21;activateFunctions[22]=showTitle22;activateFunctions[23]=showTitle23;for(var i=0;i<24+1;i++){updateFunctions[i]=function(){};}};

function showTitle0(){var vis=document.getElementById("vis");vis.setAttribute("style","display:none; ");
                      var outputA=document.getElementById("outputA");outputA.setAttribute("style","display:none; ");
                      var logoOpener=document.getElementById("logoOpener");logoOpener.setAttribute("style","display:inline-block; ");
                      var openerimg=document.getElementById("openerimg");openerimg.setAttribute("style","visibility:visible; ");}
function showTitle1(){
var scrollimg=document.getElementById("scrollimg");
var vid1=document.getElementById("bgvid1");vid1.play();
scrollimg.setAttribute("style","display:none; ");
var logoOpener=document.getElementById("logoOpener");
logoOpener.setAttribute("style","display:none; ");
var openerimg=document.getElementById("openerimg");
openerimg.setAttribute("style","visibility:hidden; ");

  ////var outputA=document.getElementById("outputA");
//////outputA.setAttribute("style","display:fixed; ");
  
 ///   var outputB=document.getElementById("outputB");
////outputB.setAttribute("style","display:none; ");

                         
                         
}
function showTitle2(){
var vid1=document.getElementById("bgvid1");vid1.pause();
var vid2=document.getElementById("bgvid1");vid2.pause();
 
  ///////var outputA=document.getElementById("outputA");
///////// outputA.setAttribute("style","display:none; ");

///var outputB=document.getElementById("outputB");
////outputB.setAttribute("style","display:fixed; ");
}
function showTitle3(){
var vid2=document.getElementById("bgvid2");
vid2.play();
///////  var outputB=document.getElementById("outputB");
///////// outputB.setAttribute("style","display:none; ");


}
function showTitle4(){
var vid2=document.getElementById("bgvid2");
vid2.pause();}
function showTitle5(){
  var vid3=document.getElementById("bgvid3");vid3.pause();
}
function showTitle6(){
  var vid3=document.getElementById("bgvid3");vid3.play();
}
function showTitle7(){
  var vid3=document.getElementById("bgvid3");vid3.pause();
var vid4=document.getElementById("bgvid4");vid4.play();
}
function showTitle8(){
var vid4=document.getElementById("bgvid4");vid4.play();
var vid5=document.getElementById("bgvid5");vid5.pause();
}
function showTitle9(){
var vid4=document.getElementById("bgvid4");vid4.pause();
var vid5=document.getElementById("bgvid5");vid5.play();
}
function showTitle10(){
var vid5=document.getElementById("bgvid5");vid5.pause();
var vid6=document.getElementById("bgvid6");vid6.pause();
}

function showTitle11(){
var vid6=document.getElementById("bgvid6");vid6.play();
}
function showTitle12(){
var vid6=document.getElementById("bgvid6");vid6.pause();
var vid7=document.getElementById("bgvid7");vid7.pause();
}
function showTitle13(){
  var vid7=document.getElementById("bgvid7");vid7.play();
/////////var vid8=document.getElementById("bgvid8");vid8.pause();
}
function showTitle14(){
var vid7=document.getElementById("bgvid7");vid7.pause();
///////var vid8=document.getElementById("bgvid8");vid8.play();
}
function showTitle15(){
//////var vid8=document.getElementById("bgvid8");vid8.pause();
}
function showTitle16(){}
function showTitle17(){
}
                         
function showTitle18(){
var titleCloser=document.getElementById("titleCloser");
  titleCloser.setAttribute("style","display:none; ");

}
function showTitle19(){

}
                         
function showTitle20(){}
                         
function showTitle21(){  
 /////// var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:inline-block; ");
}
                         
function showTitle22(){
}
function showTitle23(){
}
chart.activate=function(index){activeIndex=index;
                               var sign=activeIndex-lastIndex<0?-1:1;
                               var scrolledSections=d3.range(lastIndex+sign,activeIndex+sign,sign);scrolledSections.forEach(function(i){activateFunctions[i]();});lastIndex=activeIndex;};chart.update=function(index,progress){updateFunctions[index](progress);};return chart;};
function display(){var plot=scrollVis();d3.select("#vis").call(plot);var scroll=scroller().container(d3.select("#graphic"));scroll(d3.selectAll(".step"));scroll.on("active",function(index){for(var i=0;i<window.slides.length;i++){var slide=window.slides[i];if(i+1===index){slide.show();console.log("show");}else{slide.hide();console.log("hide");}}plot.activate(index);});}document.addEventListener("DOMContentLoaded",function(){display();});window.addEventListener("resize",onResize);function onResize(h){var height=window.windowHeight;var width=window.windowWidth;var eBG=document.getElementById("bg"+h);}
