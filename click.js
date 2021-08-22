const mystyle = document.createElement('style')
document.body.appendChild(mystyle)
mystyle.innerHTML =
    `
    .heart {
        width: 10px;
        height: 10px;
        position: fixed;
        transform: rotate(45deg);
        animation: growing 1s ease-in-out 0s;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
    }

    .heart:after,
    .heart:before {
        content: '';
        width: inherit;
        height: inherit;
        background: inherit;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        position: fixed;
    }

    .heart:after {
        top: -5px;
    }

    .heart:before {
        left: -5px;
    }

    @keyframes growing {
        0% {
            transform: scale(1)  rotate(45deg);
        }
        100% {
            transform: scale(2.5)  rotate(45deg);
        }
    }
`
let mydiv = document.createElement('div')

mydiv.className = 'heart'

let mytimer

document.addEventListener('click', (e) => {

    clearInterval(mytimer)

    let opacity = 1

    let top = e.clientY

    let left = e.clientX

    let _top = top


    mydiv.style.position = "fixed"

    mydiv.style.top = top - 15 + 'px'

    mydiv.style.left = left - 15 + 'px'

    mydiv.style.cursor = "default"

    mydiv.style.background = getColor()

    mydiv.style.opacity = opacity

    mydiv.style.zIndex = 100000000000

    mydiv.style.fontFamily = "FZShuTi"

    document.body.appendChild(mydiv)

    mytimer = setInterval(() => {

        if (opacity > 0) {
            mydiv.style.opacity = opacity -= 0.005
        }

        if (_top - top > 100) {
            document.body.removeChild(mydiv)
            clearInterval(mytimer)
        }

        mydiv.style.top = (top--) - 15 + 'px'
    }, 5)
})

function getColor() {

    let colorarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += colorarr[Math.floor(Math.random() * colorarr.length)]
    }

    return color
}
