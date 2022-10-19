import {
    switchTheme,
    switchColorTimer,
    buttonLightMode,
    buttonDarkMode,
    buttonForest,
    buttonRain,
    buttonCoffeshop,
    buttonFireplace,
    buttonForestVolume,
    buttonRainVolume,
    buttonCoffeshopVolume,
    buttonFireplaceVolume,
    svgPlay,
    svgPlayFake,
    svgStop,
    svgTimerUp,
    svgTimerDown,
    svgForest,
    svgRain,
    svgCoffeshop,
    svgFireplace,
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPlayFake,
    buttonStop,
    buttonTimerUp,
    buttonTimerDown
} from "./elements.js"

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeOut
const soundForest = new Audio('./sounds/floresta.mp3')
const soundRain = new Audio('./sounds/chuva.mp3')
const soundCoffeshop = new Audio('./sounds/cafeteria.mp3')
const soundFireplace = new Audio('./sounds/lareira.mp3')
const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

function lightMode() {
    buttonLightMode.classList.toggle('hide')
    buttonDarkMode.classList.toggle('hide')
    switchTheme.classList.toggle('darkMode')
    buttonForest.classList.toggle('cardDarkMode')
    buttonRain.classList.toggle('cardDarkMode')
    buttonCoffeshop.classList.toggle('cardDarkMode')
    buttonFireplace.classList.toggle('cardDarkMode')
    switchColorTimer.classList.toggle('displayDarkMode')
    svgPlay.classList.toggle('svgDarkMode')
    svgPlayFake.classList.toggle('svgDarkMode')
    svgStop.classList.toggle('svgDarkMode')
    svgTimerUp.classList.toggle('svgDarkMode')
    svgTimerDown.classList.toggle('svgDarkMode')
    svgForest.classList.toggle('svgDarkMode')
    svgRain.classList.toggle('svgDarkMode')
    svgCoffeshop.classList.toggle('svgDarkMode')
    svgFireplace.classList.toggle('svgDarkMode')
    buttonForestVolume.classList.toggle('volumeDarkMode')
    buttonRainVolume.classList.toggle('volumeDarkMode')
    buttonCoffeshopVolume.classList.toggle('volumeDarkMode')
    buttonFireplaceVolume.classList.toggle('volumeDarkMode')
}

function darkMode() {
    buttonLightMode.classList.toggle('hide')
    buttonDarkMode.classList.toggle('hide')
    switchTheme.classList.toggle('darkMode')
    buttonForest.classList.toggle('cardDarkMode')
    buttonRain.classList.toggle('cardDarkMode')
    buttonCoffeshop.classList.toggle('cardDarkMode')
    buttonFireplace.classList.toggle('cardDarkMode')
    switchColorTimer.classList.toggle('displayDarkMode')
    svgPlay.classList.toggle('svgDarkMode')
    svgPlayFake.classList.toggle('svgDarkMode')
    svgStop.classList.toggle('svgDarkMode')
    svgTimerUp.classList.toggle('svgDarkMode')
    svgTimerDown.classList.toggle('svgDarkMode')
    svgForest.classList.toggle('svgDarkMode')
    svgRain.classList.toggle('svgDarkMode')
    svgCoffeshop.classList.toggle('svgDarkMode')
    svgFireplace.classList.toggle('svgDarkMode')
    buttonForestVolume.classList.toggle('volumeDarkMode')
    buttonRainVolume.classList.toggle('volumeDarkMode')
    buttonCoffeshopVolume.classList.toggle('volumeDarkMode')
    buttonFireplaceVolume.classList.toggle('volumeDarkMode')
}

function resetControls() {
    buttonForest.classList.remove('forestOn', 'forestOnDarkMode')
    buttonRain.classList.remove('rainOn', 'rainOnDarkMode')
    buttonCoffeshop.classList.remove('coffeshopOn', 'coffeshopOnDarkMode')
    buttonFireplace.classList.remove('fireplaceOn', 'fireplaceOnDarkMode')
    svgForest.classList.remove('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.remove('white')
    buttonPlay.classList.remove('hide')
    buttonPlayFake.classList.add('hide')
    buttonForestVolume.classList.remove('white')
    buttonRainVolume.classList.remove('white')
    buttonCoffeshopVolume.classList.remove('white')
    buttonFireplaceVolume.classList.remove('white')
    soundForest.pause()
    soundRain.pause()
    soundCoffeshop.pause()
    soundFireplace.pause()
    minutes = 25
    switchTheme.classList.remove('themeForest', 'themeRain', 'themeCoffeshop', 'themeFireplace', 'themeForestDarkMode', 'themeRainDarkMode', 'themeCoffeshopDarkMode', 'themeFireplaceDarkMode')
    volumeClear()
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

function resetTimer() {
    updateTimerDisplay(25, 0)
    clearTimeout(timerTimeOut)
}

/* CONTADOR REGRESSIVO */
function countdown() {
    timerTimeOut = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
  
    updateTimerDisplay(25, 0)
  
    if (minutes <= 0 && seconds <= 0) {
        resetControls()
        kitchenTimer.play()
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

/* FUNCTION TOGGLE PARA CADA BOTÃO DE SOM */
let isForestPlaying
let isRainPlaying
let isCoffeshopPlaying 
let isFireplacePlaying 

function toggleForest() {
    if(isForestPlaying) {
        soundForest.pause()
    } else {
        soundForest.play()
        soundForest.loop = true
    }
}

function toggleRain() {
    if(isRainPlaying) {
        soundRain.pause()
    } else {
        soundRain.play()
        soundRain.loop = true
    }
}

function toggleCoffeshop() {
    if(isCoffeshopPlaying) {
        soundCoffeshop.pause()
    } else {
        soundCoffeshop.play()
        soundCoffeshop.loop = true
    }
}

function toggleFireplace() {
    if(isFireplacePlaying) {
        soundFireplace.pause()
    } else {
        soundFireplace.play()
        soundFireplace.loop = true
    }
}

/* IDENTIFICA SE O SOM ESTA TOCANDO */
soundForest.onplaying = function() {
    isForestPlaying = true
}
soundForest.onpause = function() {
    isForestPlaying = false
}

soundRain.onplaying = function() {
    isRainPlaying = true
}
soundRain.onpause = function() {
    isRainPlaying = false
}

soundCoffeshop.onplaying = function() {
    isCoffeshopPlaying = true
}
soundCoffeshop.onpause = function() {
    isCoffeshopPlaying = false
}

soundFireplace.onplaying = function() {
    isFireplacePlaying = true
}
soundFireplace.onpause = function() {
    isFireplacePlaying = false
}


/* EVENTOS DO PLAYER */
buttonPlay.addEventListener('click', function() {
    countdown()
    buttonPlay.classList.add('hide')
    buttonPlayFake.classList.remove('hide')
})
    
buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
})

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

function inputClear() {
    buttonForest.classList.remove('forestOnDarkMode', 'forestOn')
    buttonForestVolume.classList.remove('white')
    svgForest.classList.remove('white')
    buttonRain.classList.remove('rainOnDarkMode', 'rainOn')
    buttonRainVolume.classList.remove('white')
    svgRain.classList.remove('white')
    buttonCoffeshop.classList.remove('coffeshopOnDarkMode', 'coffeshopOn')
    buttonCoffeshopVolume.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    buttonFireplace.classList.remove('fireplaceOnDarkMode', 'fireplaceOn')
    buttonFireplaceVolume.classList.remove('white')
    svgFireplace.classList.remove('white')
    switchTheme.classList.remove('themeForest', 'themeRain', 'themeCoffeshop', 'themeFireplace')
    switchTheme.classList.remove('themeForestDarkMode', 'themeRainDarkMode', 'themeCoffeshopDarkMode', 'themeFireplaceDarkMode')                        
}

function volumeClear() {
    buttonForestVolume.value = 0.5
    buttonRainVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
}

buttonForestVolume.addEventListener('click', function() {
    inputClear()
    soundForest.onpause()
    buttonRainVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
})

buttonRainVolume.addEventListener('click', function() {
    inputClear()
    soundRain.onpause()
    buttonForestVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
})

buttonCoffeshopVolume.addEventListener('click', function() {
    inputClear()
    soundCoffeshop.onpause()
    buttonForestVolume.value = 0.5
    buttonRainVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
})

buttonFireplaceVolume.addEventListener('click', function() {
    inputClear()
    soundFireplace.onpause()
    buttonForestVolume.value = 0.5
    buttonRainVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
})

/* EVENTOS DO PAINEL DIREITO */
buttonForest.addEventListener('click', function() {
    buttonForest.classList.toggle('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.toggle('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.remove('white')
    buttonForestVolume.classList.toggle('white')
    buttonRainVolume.classList.remove('white')
    buttonCoffeshopVolume.classList.remove('white')
    buttonFireplaceVolume.classList.remove('white')
    buttonForest.classList.toggle('forestOnDarkMode')
    buttonRain.classList.remove('rainOnDarkMode')
    buttonCoffeshop.classList.remove('coffeshopOnDarkMode')
    buttonFireplace.classList.remove('fireplaceOnDarkMode')
    toggleForest()
    soundRain.pause()
    soundCoffeshop.pause()
    soundFireplace.pause()
    soundForest.onplaying()
    switchTheme.classList.toggle('themeForest')
    switchTheme.classList.remove('themeRain')
    switchTheme.classList.remove('themeCoffeshop')
    switchTheme.classList.remove('themeFireplace')
    switchTheme.classList.toggle('themeForestDarkMode')
    switchTheme.classList.remove('themeRainDarkMode')
    switchTheme.classList.remove('themeCoffeshopDarkMode')
    switchTheme.classList.remove('themeFireplaceDarkMode')
    buttonRainVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
})

buttonRain.addEventListener('click', function() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.toggle('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.toggle('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.remove('white')
    buttonForestVolume.classList.remove('white')
    buttonRainVolume.classList.toggle('white')
    buttonCoffeshopVolume.classList.remove('white')
    buttonFireplaceVolume.classList.remove('white')
    buttonForest.classList.remove('forestOnDarkMode')
    buttonRain.classList.toggle('rainOnDarkMode')
    buttonCoffeshop.classList.remove('coffeshopOnDarkMode')
    buttonFireplace.classList.remove('fireplaceOnDarkMode')
    toggleRain()
    soundForest.pause()
    soundCoffeshop.pause()
    soundFireplace.pause()
    soundRain.onplaying()
    switchTheme.classList.remove('themeForest')
    switchTheme.classList.toggle('themeRain')
    switchTheme.classList.remove('themeCoffeshop')
    switchTheme.classList.remove('themeFireplace')
    switchTheme.classList.remove('themeForestDarkMode')
    switchTheme.classList.toggle('themeRainDarkMode')
    switchTheme.classList.remove('themeCoffeshopDarkMode')
    switchTheme.classList.remove('themeFireplaceDarkMode')
    buttonForestVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
})

buttonCoffeshop.addEventListener('click', function() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.toggle('coffeshopOn')
    buttonFireplace.classList.remove('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.toggle('white')
    svgFireplace.classList.remove('white')
    buttonForestVolume.classList.remove('white')
    buttonRainVolume.classList.remove('white')
    buttonCoffeshopVolume.classList.toggle('white')
    buttonFireplaceVolume.classList.remove('white')
    buttonForest.classList.remove('forestOnDarkMode')
    buttonRain.classList.remove('rainOnDarkMode')
    buttonCoffeshop.classList.toggle('coffeshopOnDarkMode')
    buttonFireplace.classList.remove('fireplaceOnDarkMode')
    toggleCoffeshop()
    soundForest.pause()
    soundRain.pause()
    soundFireplace.pause()
    soundCoffeshop.onplaying()
    switchTheme.classList.remove('themeForest')
    switchTheme.classList.remove('themeRain')
    switchTheme.classList.toggle('themeCoffeshop')
    switchTheme.classList.remove('themeFireplace')
    switchTheme.classList.remove('themeForestDarkMode')
    switchTheme.classList.remove('themeRainDarkMode')
    switchTheme.classList.toggle('themeCoffeshopDarkMode')
    switchTheme.classList.remove('themeFireplaceDarkMode')
    buttonForestVolume.value = 0.5
    buttonRainVolume.value = 0.5
    buttonFireplaceVolume.value = 0.5
})

buttonFireplace.addEventListener('click', function() {
    buttonForest.classList.remove('forestOn')
    buttonRain.classList.remove('rainOn')
    buttonCoffeshop.classList.remove('coffeshopOn')
    buttonFireplace.classList.toggle('fireplaceOn')
    svgForest.classList.remove('white')
    svgRain.classList.remove('white')
    svgCoffeshop.classList.remove('white')
    svgFireplace.classList.toggle('white')
    buttonForestVolume.classList.remove('white')
    buttonRainVolume.classList.remove('white')
    buttonCoffeshopVolume.classList.remove('white')
    buttonFireplaceVolume.classList.toggle('white')
    buttonForest.classList.remove('forestOnDarkMode')
    buttonRain.classList.remove('rainOnDarkMode')
    buttonCoffeshop.classList.remove('coffeshopOnDarkMode')
    buttonFireplace.classList.toggle('fireplaceOnDarkMode')
    toggleFireplace()
    soundForest.pause()
    soundRain.pause()
    soundCoffeshop.pause()
    soundFireplace.onplaying()
    switchTheme.classList.remove('themeForest')
    switchTheme.classList.remove('themeRain')
    switchTheme.classList.remove('themeCoffeshop')
    switchTheme.classList.toggle('themeFireplace')
    switchTheme.classList.remove('themeForestDarkMode')
    switchTheme.classList.remove('themeRainDarkMode')
    switchTheme.classList.remove('themeCoffeshopDarkMode')
    switchTheme.classList.toggle('themeFireplaceDarkMode')
    buttonForestVolume.value = 0.5
    buttonRainVolume.value = 0.5
    buttonCoffeshopVolume.value = 0.5
})

/* EVENTOS DO VOLUME */
buttonForestVolume.addEventListener('input', function() {
    soundForest.volume = buttonForestVolume.value
})

buttonRainVolume.addEventListener('input', function() {
    soundRain.volume = buttonRainVolume.value
})

buttonCoffeshopVolume.addEventListener('input', function() {
    soundCoffeshop.volume = buttonCoffeshopVolume.value
})

buttonFireplaceVolume.addEventListener('input', function() {
    soundFireplace.volume = buttonFireplaceVolume.value
})

/* EVENTOS DARK MODE */
buttonLightMode.addEventListener('click', function() {
    lightMode()
})

buttonDarkMode.addEventListener('click', function() {
    darkMode()
})
