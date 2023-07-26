const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'WELCOME TO BLOG'
let idx = 1
let speed = 700 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, 700)
}


speedEl.addEventListener('input', (e) => speed = 700 / e.target.value)