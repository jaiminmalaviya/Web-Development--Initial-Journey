let yourDate = new Date(2024, 10, 14)

function time() {
   let dayEl = document.getElementById('day-el')
   let hourEl = document.getElementById('hour-el')
   let minuteEl = document.getElementById('minute-el')
   let secondEl = document.getElementById('second-el')

   let currentDate = new Date()

   let totalSecond = (yourDate - currentDate) / 1000
   let days = Math.floor(totalSecond / 3600 / 24)
   let hours = Math.floor((totalSecond / 3600) % 24)
   let minutes = Math.floor((totalSecond / 60) % 60)
   let seconds = Math.floor(totalSecond) % 60

   dayEl.innerHTML = days
   hourEl.innerHTML = formatTime(hours)
   minuteEl.innerHTML = formatTime(minutes)
   secondEl.innerHTML = formatTime(seconds)
}
setInterval(time, 500)

function formatTime(time) {
   return time < 10 ? `0${time}` : time
}

console.log(new Date(2021, 9, 14))
