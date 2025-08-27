const app = document.getElementById('main')
const form = document.createElement('form')
const timeInput = document.createElement('input')
const timerPanel = document.createElement('p')
const startButton = document.createElement('button')
const pauseButton = document.createElement('button')
const stopButton = document.createElement('button')

timeInput.type = 'number'
timeInput.placeholder = 'Enter your focus time'
startButton.textContent = 'Start'
pauseButton.textContent = 'Pause'
stopButton.textContent = 'Stop'

app.appendChild(form)
form.appendChild(timeInput)
app.appendChild(timerPanel)
app.appendChild(startButton)
app.appendChild(pauseButton)
app.appendChild(stopButton)


function countdown(TimeMilliSec) {
  let countdownDate = new Date().getTime() + TimeMilliSec

  var x = setInterval(function() {
    let now = new Date().getTime()
    let remainingTime = countdownDate - now

    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

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
    let TimeMilliSec = 1000 * 60 * timeInput.value
    countdown(TimeMilliSec)
    timeInput.value = ''
  }
} 

stopButton.onclick

//timer start ~= form.onsubmit  ?=> gleiche Funktion???
//timer stop ~= stops the countdown function and stores remaining time
//timer clear 
//make it refresh persistant 
//solve problem with two timers started at once
