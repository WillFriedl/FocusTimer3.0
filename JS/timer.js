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
    }

    function countdown() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
      
        updateTimerDisplay(25, 0)
      
        if (minutes <= 0 && seconds <= 0) {
            Sounds().kitchenTimer.play()
            resetControls()
            return
        }
    
        if( seconds <= 0 ) {
            seconds = 2
            --minutes
        }

        console.log(updateTimerDisplay)
    
        updateTimerDisplay(minutes, String(seconds - 1))
    
        countdown()
    }, 1000)
    }

    buttonTimerUp.addEventListener('click', function() {
        let newMinutes = minutes + 5
        if(!newMinutes) {
            return
        }

        minutes = newMinutes
        updateTimerDisplay(minutes, secondsDisplay.textContent)
    })

    buttonTimerDown.addEventListener('click', function() {
        let newMinutes = minutes - 5
        if(!newMinutes) {
            return
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
        setTimeout,
        timerTimeOut,
        updateMinutes,
      }
}