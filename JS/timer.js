import Sounds from "./sounds.js"
import { buttonTimerUp, buttonTimerDown } from "./elements.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  controls
}) {
  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)
  let endTime
  let minutesDefault

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
    updateTimerDisplay(25, 0)
    clearTimeout(timerTimeout)
    controls.resetControls()
  }

  function countdown() {
      console.time("timer")
    const startTime = Date.now()
    endTime = startTime + 25 * 60 * 1000 // 25 minutes in milliseconds

    function updateRemainingTime() {
      const currentTime = Date.now()
      const remainingTime = endTime - currentTime

      if (remainingTime <= 0) {
        resetTimer()
        Sounds().kitchenTimer.play()
        return
      }

      minutesDefault = Math.floor(remainingTime / 60000)
      let remainingSeconds = Math.ceil((remainingTime / 1000) % 60)

      if (remainingSeconds === 60) {
        remainingSeconds = 0
        minutesDefault++
      }

      if (minutesDefault < 0) {
        minutesDefault = 0
      }

      if (minutesDefault === 25 && remainingSeconds === 0) {
        minutesDefault = 25
        remainingSeconds = 0
      }

      updateTimerDisplay(minutesDefault, remainingSeconds)

      const elapsedMilliseconds = currentTime - startTime
      const delay = 1000 - (elapsedMilliseconds % 1000) // Adjust to sync with seconds


      const timeDiff = delay - 1000 // Time in milliseconds of difference every 1 second
      console.log(timeDiff)

      timerTimeout = setTimeout(updateRemainingTime, delay)
    }

    updateRemainingTime()
    console.timeEnd("timer")
  }

  buttonTimerUp.addEventListener("click", function () {
    let newMinutes = Number(minutesDisplay.textContent) + 5
    let newSeconds = Number(secondsDisplay.textContent)

    if (minutesDisplay.textContent >= 55) {
        return 
    }

    minutes = newMinutes

    if (endTime) {
      const currentTime = Date.now()
      const remainingTimeMillis = endTime - currentTime
      const newRemainingTimeMillis = remainingTimeMillis + 5 * 60 * 1000
      const newEndTime = currentTime + newRemainingTimeMillis
      endTime = newEndTime
      minutesDefault = Math.floor(newRemainingTimeMillis / 60000)
      updateTimerDisplay(minutesDefault, newSeconds)
    } else {
      updateTimerDisplay(newMinutes, newSeconds)
    }
  })

  buttonTimerDown.addEventListener("click", function () {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    let newSeconds = Number(secondsDisplay.textContent)

    if (minutesDisplay.textContent < 5) {
      newMinutes = 25
      newSeconds = 0
      updateTimerDisplay(newMinutes, newSeconds)
      resetTimer()
      const currentTime = Date.now()
      endTime = currentTime + newMinutes * 60 * 1000
      minutesDefault = newMinutes
    } else {
      minutes = newMinutes
      updateTimerDisplay(minutes, newSeconds)
      const currentTime = Date.now()
      const remainingTimeMillis = endTime - currentTime
      const newRemainingTimeMillis = remainingTimeMillis - 5 * 60 * 1000
      const newEndTime = currentTime + newRemainingTimeMillis
      endTime = newEndTime
      minutesDefault = Math.floor(newRemainingTimeMillis / 60000)
    }
  })

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    updateTimerDisplay,
    resetTimer,
    countdown,
    updateMinutes
  }
}
