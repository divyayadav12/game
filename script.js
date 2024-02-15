 var screen = document.querySelectorAll(".screen")
 var startBth = document.querySelector("button")
 var allElem = document.querySelectorAll(".elem")
 startBth.addEventListener("click",function(){
    screen[1].style.transform = "translateY(-100%)"
 })
//   window,onclick = function(e){
//      console.log("windows clicked",e.target);
//    }
/allElem.forEach(function(elem){ 
    elem.addEventListener("click",function(){
         screen[2].style.transform = "translateY(-200%)"
        selected = elem.childNodes[0].getAttribute("src")
        var newImg = document.createElement("img")
        newImg.setAttribute("src",selected)
        var x = Math.random()*100
        var y = Math.random()*100
        var rot = Math.random()*360
        newImg.style.left = x+"%"
        newImg.style.top = y+"%"
        newImg.style.rotate = rot+"deg"
        playGround.appendChild(newImg) 
    })
})