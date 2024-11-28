
let links=document.querySelector(".nav .links")
let  Icon = document.querySelector(".icon")


Icon.onclick=function(){
   links.classList.toggle( "active")
   
}
let Images=document.querySelectorAll(".images img")
let poupUpImage=document.querySelector(".popup img")
let popUpDiv=document.querySelector(".popup")
let closeIcon=document.getElementById("icon")
for(Images of Images){
    Images.onclick=function(){
        popUpDiv.style.display="flex"
        poupUpImage.src=this.src
    }
    closeIcon.onclick=function(){
    popUpDiv.style.display="none"
    }
}