let images = ['1.webp','2.jpeg','3.jpeg'];



let img = document.getElementById('img')
let imgIndex = 2;
let leftarrow = document.querySelector('.left')
let rightarrow = document.querySelector('.right')


leftarrow.onclick = function(){
     imgIndex-=1
     if (imgIndex==0) {
        leftarrow.style.display = 'none'
     } else {
        leftarrow.style.display = 'block'
     }
     img.style.animationPlayState = 'running'
     setTimeout(()=>{
        img.style.animationPlayState = 'paused'
        img.setAttribute('src','images/'+images[imgIndex])

         },1000)

     
     if(imgIndex<images.length-1){
        rightarrow.style.display = 'block'
    }

}

rightarrow.onclick = function(){
    imgIndex+=1
    if (imgIndex==images.length-1 ) {
        rightarrow.style.display = 'none'
     } else {
        rightarrow.style.display = 'block'
     }
     img.style.animationPlayState = 'running'
     setTimeout(()=>{
        img.style.animationPlayState = 'paused'
        img.setAttribute('src','Images/'+images[imgIndex])
         },1000)

    
    if(imgIndex>1){
        leftarrow.style.display = 'block'
    }
}
