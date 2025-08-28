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
form.appendChild(startButton)
app.appendChild(pauseButton)
app.appendChild(stopButton)

let intervalId
let remainingTime

function countdown(timeMilliSec) {
  let countdownDate = new Date().getTime() + timeMilliSec

  intervalId = setInterval(function() {
    let now = new Date().getTime()
    remainingTime = countdownDate - now

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
  if (remainingTime) {
    countdown(remainingTime)
  } else if (timeInput.value === '') {
    alert('Please type in the number of minutes you would like focus for!')
  }else {
    let timeMilliSec = 1000 * 60 * timeInput.value
    countdown(timeMilliSec)
    timeInput.value = ''
  }
} 


function stopCountdown() {
  clearInterval(intervalId)
  intervalId = null
  remainingTime = null 
  timerPanel.textContent = ''
}

function pauseCountdown() {
  clearInterval(intervalId)
  intervalId = null
}

pauseButton.onclick = () => {pauseCountdown()}
stopButton.onclick = () => {stopCountdown()}

//Problems: 
//start is fundamentally different button from pause and stop
//intervalId and remaining time are global 
//not refresh persistant 
//two timers started can be started at same time
