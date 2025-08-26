const app = document.getElementById('main')
const form = document.createElement('form')
const timerPanel = document.createElement('p')
const timeInput = document.createElement('input')

timeInput.type = 'number'
timeInput.placeholder = 'Enter your focus time'


app.appendChild(form)
form.appendChild(timeInput)
app.appendChild(timerPanel)


function countdown(TimeMilliSec) {
  var countdownDate = new Date().getTime() + TimeMilliSec

  var x = setInterval(function() {
    var now = new Date().getTime()
    var remainingTime = countdownDate - now

    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

    timerPanel.textContent = hours + 'h ' + minutes + 'm ' + seconds + 's'

    if (remainingTime < 0) {
      clearInterval(x)
      timerPanel.textContent = 'Well done!'
    }

  }, 500)
}

form.onsubmit = (event) => {
  event.preventDefault()
  if (timeInput.value === '') {
    alert('Please type in the number of minutes you would like focus for!')
  } else {
    var TimeMilliSec = 1000 * 60 * timeInput.value
    countdown(TimeMilliSec)
    timeInput.value = ''
  }
} 


//timer start ~= form.onsubmit  ?=> gleiche Funktion???
//timer stop ~= stops the countdown function and stores remaining time
//timer clear 
//make it refresh persistant 
//solve problem with two timers started at once
