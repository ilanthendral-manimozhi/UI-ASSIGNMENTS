//storing section
const section1=document.getElementById("section1");
const section2=document.getElementById("section2");
const section3=document.getElementById("section3");
const shapes={circle:"circle",triangle:"triangle",square:"square"};
let obj1={area:0,perimeter:0};
//storing each shape function in an object
const obj = {
  circle(num) {
    /**   * circle function find the area,perimeter and push the calculated values to DOM
          * @param {radius}.
          * @return  type num*/
    document.getElementById("shape").innerHTML='<div id="circle"></div>';
    //formulating area and perimeter
    obj1.area=3.14*num*num;
    obj1.area= obj1.area.toFixed(2);
    obj1.perimeter=2*3.14*num;
    obj1.perimeter= obj1.perimeter.toFixed(2);
    //pushing value to DOM
    document.getElementById("name").innerHTML='<h1 class="shape-name">Circle</h1>';
    document.getElementById("row1").innerHTML='<div class="measurement"> RADIUS </div><div class="formula">r</div><div class="result">'+num+'</div>';
    document.getElementById("row2").innerHTML='<div class="measurement"> AREA </div><div class="formula">&#960;r<sup>2</sup></div><div class="result">'+obj1.area+'</div>';
    document.getElementById("row3").innerHTML='<div class="measurement"> PERIMETER </div><div class="formula">2&#960;r</div><div class="result">'+obj1.perimeter+'</div>';
  },
  triangle(num){
    /**   * triangle function find the area,perimeter and push the calculated values to DOM
          * @param {base and height}.
          * @return  type num*/
    document.getElementById("shape").innerHTML='<div id="triangle"></div>';
     //formulating area and perimeter
    obj1.area=0.433*num*num;
    obj1.area= obj1.area.toFixed(2);
    obj1.perimeter=3*num;
    obj1.perimeter= obj1.perimeter.toFixed(2);
    //pushing value to DOM
    document.getElementById("name").innerHTML='<h1 class="shape-name">Equilateral Triangle</h1>';
    document.getElementById("row1").innerHTML='<div class="measurement"> SIDE </div><div class="formula">s</div><div class="result">'+num+'</div>';
    document.getElementById("row2").innerHTML='<div class="measurement"> AREA </div><div class="formula">0.433*s*s</div><div class="result">'+obj1.area+'</div>';
    document.getElementById("row3").innerHTML='<div class="measurement"> PERIMETER </div><div class="formula">3*s</div><div class="result">'+obj1.perimeter+'</div>';
  },
  square(num){
    /**   * square function find the area,perimeter and push the calculated values to DOM
          * @param {side}.
          * @return  type num*/
    document.getElementById("shape").innerHTML='<div id="square"></div>';
     //formulating area and perimeter
    obj1.area=num*num;
    obj1.area= obj1.area.toFixed(2);
    obj1.perimeter=4*num;
    obj1.perimeter= obj1.perimeter.toFixed(2);
    //pushing value to DOM
    document.getElementById("name").innerHTML='<h1 class="shape-name">Square</h1>';
    document.getElementById("row1").innerHTML='<div class="measurement"> SIDE </div><div class="formula">S</div><div class="result">'+num+'</div>';
    document.getElementById("row2").innerHTML='<div class="measurement"> AREA </div><div class="formula">s*s</div><div class="result">'+obj1.area+'</div>';
    document.getElementById("row3").innerHTML='<div class="measurement"> PERIMETER </div><div class="formula">4s</div><div class="result">'+obj1.perimeter+'</div>';
  }
};
//choosing shapes
section3.style.display="none";
section2.style.display="none";
const sec1_dis=document.getElementById("shapes");
let count=0;
sec1_dis.addEventListener("click",(event)=>{
  /**   * on selecting shapes display next button and check symbol on shape
          * @param {event}.
          * @return  type num*/
  let selected_shape=document.getElementById(event.target.id).getAttribute("data-shape-type");
  // assigning check to shape
  if(selected_shape=="circle")
  {
    document.getElementById("tick1").setAttribute("style","display:block;");
    document.getElementById("tick2").setAttribute("style","display:none;");
    document.getElementById("tick3").setAttribute("style","display:none;");

  }
  if(selected_shape=="square")
  {
    document.getElementById("tick3").setAttribute("style","display:block;");
    document.getElementById("tick2").setAttribute("style","display:none;");
    document.getElementById("tick1").setAttribute("style","display:none;");
  }
  if(selected_shape=="triangle")
  {
    document.getElementById("tick2").setAttribute("style","display:block;");
    document.getElementById("tick3").setAttribute("style","display:none;");
    document.getElementById("tick1").setAttribute("style","display:none;");
  }
  localStorage.setItem("choosen",event.target.id);
  document.getElementById("next-button").setAttribute("style","display:block;");
});
// bringing next section
const move_nxt=document.getElementById("next-button");
move_nxt.addEventListener("click",move_nxt_sec);
function move_nxt_sec(){
  /**   * move_nxt_sec display next section and get the required measured from user
          * @param {}.
          * @return  */
  document.getElementById("section1").setAttribute("style","display:none");
  document.getElementById("section2").setAttribute("style","display:block;");
  //setting requirements fron user
  for (const key in shapes) {
    if(key==localStorage.getItem("choosen"))   
    {
      if(key=="circle")
      {
        document.getElementById("requirement").innerHTML="Radius";
      }
      if(key=="triangle")
      {
        document.getElementById("requirement").innerHTML="(Base and Height)";
      }
      if(key=="square")
      {
        document.getElementById("requirement").innerHTML="Side";
      }
    }
  }

}
//bringing section-3 through calculate button
const cal_but=document.getElementById("calculate");
cal_but.addEventListener("click",cal_sec);
function cal_sec(){
  /**   * cal_sec call the function associated with shapes 
          * @param {}.
          * @return  */
  let found=localStorage.getItem("choosen");
  let val=document.getElementById("cal-val").value;
  document.getElementById("section2").setAttribute("style","display:none");
  document.getElementById("section3").setAttribute("style","display:block;");
  //calling function based on shape selected
  if(found=="circle"){
    document.getElementById("sample").innerHTML=obj.circle(val);
  }
  if(found=="triangle"){
    document.getElementById("sample").innerHTML=obj.triangle(val);
  }
  if(found=="square"){
    document.getElementById("sample").innerHTML=obj.square(val)
  }
}
const again_but=document.getElementById("star-again");
again_but.addEventListener("click",ag_sec);
// Start again to restart the entire process
function ag_sec(){
  /**   * ag_sec start the process again and called when start again is clicked 
          * @param {}.
          * @return  */
  location.reload();
}