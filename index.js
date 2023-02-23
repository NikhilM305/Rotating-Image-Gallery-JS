const imagecuntEl=document.querySelector(".image-container");
const prevEl=document.getElementById("prev")
const nextEl=document.getElementById("next")
let x=0;
let timer;

prevEl.addEventListener("click",()=>{
x=x+45;
clearTimeout(timer)
updateGallery()

})
nextEl.addEventListener("click",()=>{
x=x-45;
clearTimeout(timer)
updateGallery()

})


function updateGallery(){
imagecuntEl.style.transform= `perspective(1000px) rotateY(${x}deg)`;

   timer=setTimeout(()=>{
    x=x-45
    console.log(x)
updateGallery()
},3000)

}
updateGallery()