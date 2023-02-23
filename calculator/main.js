const res = document.querySelector('#result')

const numAC = document.querySelector('#numAC')
numAC.addEventListener('click', () => {
    res.textContent = 0
})

let count1
let count2
let mark
let str
const result = () => {
    count2 = res.innerText
    console.log(count2)
    str = `${count1}${mark}${count2}`
    if(str == `${count1}/0`)
        res.innerText = 'No results'
        else
    res.innerText = eval(str)
}

const firstNum = () => {
    if(res.innerText == '0'){
        res.textContent = ''
    }
}

const num7 = document.querySelector('#num7')
num7.addEventListener('click', () => {
    firstNum()
    res.innerText += num7.textContent
})

const num8 = document.querySelector('#num8')
num8.addEventListener('click', () => {
    firstNum()
    res.innerText += num8.textContent
})

const num9 = document.querySelector('#num9')
num9.addEventListener('click', () => {
    firstNum()
    res.innerText += num9.textContent
})

const num4 = document.querySelector('#num4')
num4.addEventListener('click', () => {
    firstNum()
    res.innerText += num4.textContent
})

const num5 = document.querySelector('#num5')
num5.addEventListener('click', () => {
    firstNum()
    res.innerText += num5.textContent
})

const num6 = document.querySelector('#num6')
num6.addEventListener('click', () => {
    firstNum()
    res.innerText += num6.textContent
})

const num1 = document.querySelector('#num1')
num1.addEventListener('click', () => {
    firstNum()
    res.innerText += num1.textContent
})

const num2 = document.querySelector('#num2')
num2.addEventListener('click', () => {
    firstNum()
    res.innerText += num2.textContent
})

const num3 = document.querySelector('#num3')
num3.addEventListener('click', () => {
    firstNum()
    res.innerText += num3.textContent
})

const num0 = document.querySelector('#num0')
num0.addEventListener('click', () => {
    firstNum()
    res.innerText += num0.textContent
})

const numDot = document.querySelector('#numDot')
numDot.addEventListener('click', () => {
    res.innerText += numDot.textContent
})

const numPlus = document.querySelector('#numPlus')
numPlus.addEventListener('click', () => {
    count1 = res.innerText
    mark = '+'
    console.log(count1)
    res.innerText = 0
})

const numEqually = document.querySelector('#numEqually')
numEqually.addEventListener('click', () => {
    result()
})

const numMinus = document.querySelector('#numMinus')
numMinus.addEventListener('click', () => {
    count1 = res.innerText
    mark = '-'
    res.innerText = 0
})

const numX = document.querySelector('#numX')
numX.addEventListener('click', () => {
    count1 = res.innerText
    mark = '*'
    res.innerText = 0
})

const numSlash = document.querySelector('#numSlash')
numSlash.addEventListener('click', () => {
    count1 = res.innerText
    mark = '/'
    res.innerText = 0
})

const numProcent = document.querySelector('#numProcent')
numProcent.addEventListener('click', () => {
    count1 = res.innerText
    res.innerText = count1/100
})

const nextPage = document.querySelector('#nextPage')
nextPage.addEventListener('click', () => {
    window.location.href = 'todo/index.html'
})