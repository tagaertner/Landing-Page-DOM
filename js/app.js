const navagation = document.querySelectorAll(".toggle")
function navBar(){
return`<ul class ="active">
       <li><a href='#'>nave content 1</a></li>
       <li><a href='#'>nav content 2</a></li>
       <li><a href='#'>nav content 3</a></li>
       <li><a href='#'>nav content 4</a></li>
       </ul>`
}
document.addEventListener("DOMContentLoaded", (e)=>{
  e.preventDefault()
navagation.forEach(navItem=> {
  navItem.insertAdjacentHTML("beforeend", navBar())
})
})