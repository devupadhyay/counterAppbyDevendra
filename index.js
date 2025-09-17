// document.getElementById('count').innerText = 5;

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let currCount = `${count} - `
    saveEl.textContent += currCount
    console.log(count)
    countEl.textContent = 0
    count = 0
}