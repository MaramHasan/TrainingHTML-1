function createNode(element) {
    return document.createElement(element);
  }
fetch('http://192.168.1.100/store2',{mode:'no-cors'})
.then(response =>{
    if (response.ok){return Promise.resolve(response);}
    else{return Promise.reject(new Error('Failed To Load'));}
  })
  .then(response => response.json())
  .then(responseJson=>{
    var obj = responseJson;
    const MainContent=document.getElementById('MainContent');
  let c = obj; 
  var ln = c.length;
  
  c.map(function(cc) {
    let DivImg=createNode('div');
  
    let img = createNode("img");
    let div = createNode("div");
    let p = createNode("li");
    let p2 = createNode("li");
    let p3 = createNode("li");
    let fig=createNode("div");
    let divs = createNode("div");
    let sw =[];
    let n = 0;
    let btn =createNode('button');
  for (var i =0 ; i<ln ; i++){
    img.src =cc.productImg;
     p.innerHTML='QUICK SHOP'  ;
     p.style='font-weight:bold';
     p.tabindex='0';
     p2.innerHTML=cc.productName  ; 
     p2.tabindex='0';
     img.alt="Product Photo";
     DivImg.append(img);
     let k = cc.swatches.length;
   
   for ( ;n<k;n++){ 
     if(n<6){
    sw[n]=createNode("img");
        sw[n].src=cc.swatches[n].img.src;
        sw[n].alt='Swatches';
        sw[n].tabindex='0';
        divs.append(sw[n]);   
     }
     else{
       btn.tabindex='0';
       btn.innerHTML='More';
       btn.style='border:none;position:relative;top:5px;width:30px;height:20px;font-size:14px; border-top:1px solid black;border-bottom:1px solid black;'
       divs.append(btn);
       break;
     }
    }
   
  p3.innerHTML=cc.productPrice+"$";
  p3.style='font-weight:bold';
  p3.tabindex='0';
  div.tabindex='0';
  div.append(p,p2,divs,p3);
  fig.tabindex='0';
    DivImg.append(div);
   
  MainContent.append(DivImg);
    
  }
  })
  
  
  })