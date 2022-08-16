// Select some elements...
let header = document.querySelector('#page-header')
// modifining style
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}
let dogName = document.querySelectorAll('.dog-name')
for (let i=0;i<dogName.length; i++){
dogName[i].style.textAlign = "left"
}
console.log (dogName)

let footer= document.querySelector('.footer')
footer.style.color = 'red'

document.querySelector('.dog-image').style.transform = "rotate(180deg)"
 for(let i=0;i<dogImages.length;i++){
dogImages[i].style.transform = "rotate(180deg)"

}
