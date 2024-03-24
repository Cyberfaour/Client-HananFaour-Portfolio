let intro=document.querySelector(".intro");
let logo=document.querySelector(".logo-loader");
let logoSpan=document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () =>{
    
    
    setTimeout(() =>{
        document.body.classList.add("loading");
        logoSpan.forEach((span,idx)=>{
            setTimeout(() => {
               span.classList.add("active"); 
            }, (idx+1) *200)
        });
        setTimeout(() =>{
            logoSpan.forEach((span,idx)=>{
            setTimeout(() => {
                span.classList.remove("active"); 
                span.classList.add("fade"); 
                },(idx+1) *100);
            })
         },1500)
         setTimeout(() =>{
            intro.style.top="-100vh";
            document.body.classList.remove("loading");
            document.body.classList.add("loaded");
         },2300)


    })
    
    
});