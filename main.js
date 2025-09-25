let sekund = document.querySelector('.secund')
let minut = document.querySelector('.minut')
let soat = document.querySelector('.soat')

let year = document.querySelector('.year')
let weekday = document.querySelector('.weekday')
let dat = document.querySelector('.date')

setInterval ( () => {
    let date = new Date()
    let sec = date.getSeconds()
    sekund.textContent = sec

    let min = date.getMinutes()
    minut.textContent = min

    let soa = date.getHours()
    soat.textContent = soa

    
    let years = date.getFullYear()
    year.textContent = years

    let weeks = date.getDay()
    weekday.textContent = weeks

    let days = date.getDate()
    dat.textContent = days
}, 1000)