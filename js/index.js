const addButton = document.querySelector('.addButton')
const randomButton = document.querySelector('.randomButton')
const textResult = document.querySelector('.textResult')
const list = document.querySelector('.list')
let ArrayRandom = []

addButton.addEventListener('click', addItem)
window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        addItem()
    }
})
randomButton.addEventListener('click', randomItem)

function addItem(){
    let input = document.querySelector('.textInput').value
    if(input !== ''){
        ArrayRandom.push(input)
        
        let item = document.createElement('p')
        item.classList.add('item')
        item.innerText = input
        list.appendChild(item)
    }

    document.querySelector('.textInput').value = ''
}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function randomItem(){
    let max = ArrayRandom.length
    if(ArrayRandom.length >= 0){
        textResult.innerHTML = ArrayRandom[random(0, max)]
    }
}
