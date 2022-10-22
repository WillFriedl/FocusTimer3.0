import {
    buttonForestVolume,
    buttonRainVolume,
    buttonCoffeshopVolume,
    buttonFireplaceVolume,
} from "./elements.js"

export default function Sounds() {
    
    const soundForest = new Audio('./sounds/floresta.mp3')
    const soundRain = new Audio('./sounds/chuva.mp3')
    const soundCoffeshop = new Audio('./sounds/cafeteria.mp3')
    const soundFireplace = new Audio('./sounds/lareira.mp3')
    const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')
    let isForestPlaying
    let isRainPlaying
    let isCoffeshopPlaying 
    let isFireplacePlaying 
   
    function soundPause() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeshop.pause()
        soundFireplace.pause()
    }

    function volumeClear() {
        buttonForestVolume.value = 0.5
        buttonRainVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    }

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

    return {
        soundPause,
        soundForest,
        soundRain,
        soundCoffeshop,
        soundFireplace,
        kitchenTimer,
        volumeClear,
        toggleForest,
        toggleRain,
        toggleCoffeshop,
        toggleFireplace,
    }
}