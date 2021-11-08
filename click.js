let mytext = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅","😎", "😍"]

        let mydiv = document.createElement('div')

        let mytimer
        
        

        document.addEventListener('click',(e) => { 

            clearInterval(mytimer)

            let opacity = 1

            let top = e.clientY

            let left = e.clientX
            // spot(top,left)
            let _top = top
            
            mydiv.innerText = mytext[Math.floor( Math.random() * mytext.length)]
         
            mydiv.style.position = "fixed"
            mydiv.style.top = top - 15 + 'px'
            mydiv.style.left = left - 15 + 'px'
            mydiv.style.width = "50px"
            mydiv.style.textAlign = "center"
            mydiv.style.letterSpacing = 3 + 'px'
            mydiv.style.fontSize = 18 + 'px'
            mydiv.style.cursor = "default"
            mydiv.style.color = getColor()
            mydiv.style.opacity = opacity
            mydiv.style.zIndex = 100000000000
            mydiv.style.fontFamily = "FZShuTi"

            document.body.appendChild(mydiv)

            mytimer = setInterval(() => {

                if(opacity > 0) {
                    mydiv.style.opacity = opacity -= 0.005
                }

                if (_top - top > 100) {
                    document.body.removeChild(mydiv)
                    clearInterval(mytimer)
                } 
                
                mydiv.style.top = (top--) - 15 + 'px'
            },5)
        })

        function getColor() {

            let colorarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

            let color = "#"

            for (let i = 0; i < 6; i++) {
                color += colorarr[Math.floor(Math.random() * colorarr.length)]
            }

            return color
        }