import Sounds from "./sounds.js"
import {
    buttonTimerUp,
    buttonTimerDown,
} from "./elements.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    controls,
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
      }

      function resetTimer() {
        updateTimerDisplay(25, 0)
        clearTimeout(timerTimeOut)
        controls.resetControls()
    }

    function countdown() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
      
        updateTimerDisplay(25, 0)
      
        if (minutes <= 0 && seconds <= 0) {
            resetTimer()
            Sounds().kitchenTimer.play()
            return
        }
    
        if( seconds <= 0 ) {
            seconds = 60
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))
    
        countdown()
    }, 1000)
    }

    buttonTimerUp.addEventListener('click', function() {
        let newMinutes = Number(minutesDisplay.textContent) + 5
        let newSeconds = Number(secondsDisplay.textContent)

        if(minutesDisplay.textContent >= 55) {
            newMinutes = 60
            newSeconds = 0
            updateTimerDisplay(newMinutes, newSeconds)
        }

        minutes = newMinutes
        updateTimerDisplay(minutes, secondsDisplay.textContent)
    })

    buttonTimerDown.addEventListener('click', function() {
        let newMinutes = Number(minutesDisplay.textContent) - 5
        let newSeconds = Number(secondsDisplay.textContent)

        if(minutesDisplay.textContent < 5) {
            newMinutes = 25
            newSeconds = 0
            updateTimerDisplay(newMinutes, newSeconds)
            resetTimer()
        }

        minutes = newMinutes
        updateTimerDisplay(minutes, secondsDisplay.textContent)
    })

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

      return {
        updateTimerDisplay,
        resetTimer,
        countdown,
        updateMinutes,
      }
}