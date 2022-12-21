function effect(){
const color=["#6e051c","#067234","#cdcdcc","#d8a24a","#17181a"];
let i=0;

setInterval(()=>{
    i=i%(color.length);
    let x=document.body;

    x.style.backgroundColor=color[i];
    i++;
},2000);

} 

effect();


