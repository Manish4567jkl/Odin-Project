let icon = document.querySelectorAll(".icon");
let shadow = document.querySelector(".shadow")

icon.forEach(function(val,index){
    val.addEventListener('click' , function(){
        hide();
       gsap.to(".shadow" , {
        x:index*100,
        ease:Expo.easeInOut,
        duration:0.19,
       })
     gsap.to(this.children , {
        opacity:1
    
     })
    })
})
function hide(){
gsap.to(".icon i" , {
    opacity:.3,
})
}

gsap.from("h1",{
    y:-400,
    opacity:0,
    duration:0.9
})
