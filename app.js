const board = document.querySelector('#board')
const colors = ['#FF69B4', '#00FA9A', '#008B8B', '#CD5C5C', '#8A2BE2', '#DAA520', '#E6E6FA', '#B22222', '#00FF7F', '#40E0D0', '#FFA07A', '#6495ED', '#FFFF00']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}