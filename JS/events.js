import {
    buttonPlay,
    buttonStop,
    buttonLightMode,
    buttonDarkMode,
    buttonForestVolume,
    buttonRainVolume,
    buttonCoffeshopVolume,
    buttonFireplaceVolume,
    buttonForest,
    buttonRain,
    buttonCoffeshop,
    buttonFireplace,
    svgForest,
    svgRain,
    svgCoffeshop,
    svgFireplace,
    switchTheme,
} from "./elements.js"

export default function Events({
    timer,
    controls,
    sound,
}) {

    buttonLightMode.addEventListener('click', function() {
        controls.lightMode()
    })
    
    buttonDarkMode.addEventListener('click', function() {
        controls.darkMode()
    })

    buttonPlay.addEventListener('click', function() {
        controls.play()
        timer.countdown()
    })

    buttonStop.addEventListener('click', function() {
        controls.resetControls()
        timer.resetTimer()
        timer.updateMinutes(25, 0)
    })

    buttonForestVolume.addEventListener('input', function() {
        sound.soundForest.volume = buttonForestVolume.value
    })

    buttonRainVolume.addEventListener('input', function() {
        sound.soundRain.volume = buttonRainVolume.value
    })
    
    buttonCoffeshopVolume.addEventListener('input', function() {
        sound.soundCoffeshop.volume = buttonCoffeshopVolume.value
    })
    
    buttonFireplaceVolume.addEventListener('input', function() {
        sound.soundFireplace.volume = buttonFireplaceVolume.value
    })

    buttonForestVolume.addEventListener('click', function() {
        controls.inputClear()
        sound.soundForest.onpause()
        buttonRainVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    })

    buttonRainVolume.addEventListener('click', function() {
        controls.inputClear()
        sound.soundRain.onpause()
        buttonForestVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    })
    
    buttonCoffeshopVolume.addEventListener('click', function() {
        controls.inputClear()
        sound.soundCoffeshop.onpause()
        buttonForestVolume.value = 0.9
        buttonRainVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    })
    
    buttonFireplaceVolume.addEventListener('click', function() {
        controls.inputClear()
        sound.soundFireplace.onpause()
        buttonForestVolume.value = 0.5
        buttonRainVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
    })

    buttonForest.addEventListener('click', function() {
        buttonForest.classList.toggle('forestOn')
        buttonRain.classList.remove('rainOnDarkMode')
        buttonRain.classList.remove('rainOn')
        buttonCoffeshop.classList.remove('coffeshopOnDarkMode')
        buttonCoffeshop.classList.remove('coffeshopOn')
        buttonFireplace.classList.remove('fireplaceOnDarkMode')
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
        sound.soundPause()
        sound.toggleForest()
        sound.soundForest.onplaying()
        switchTheme.classList.toggle('themeForestDarkMode')
        switchTheme.classList.toggle('themeForest')
        switchTheme.classList.remove('themeRainDarkMode')
        switchTheme.classList.remove('themeRain')
        switchTheme.classList.remove('themeCoffeshopDarkMode')
        switchTheme.classList.remove('themeCoffeshop')
        switchTheme.classList.remove('themeFireplaceDarkMode')
        switchTheme.classList.remove('themeFireplace')
        buttonRainVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    })
    
    buttonRain.addEventListener('click', function() {
        buttonForest.classList.remove('forestOnDarkMode')
        buttonForest.classList.remove('forestOn')
        buttonRain.classList.toggle('rainOn')
        buttonCoffeshop.classList.remove('coffeshopOnDarkMode')
        buttonCoffeshop.classList.remove('coffeshopOn')
        buttonFireplace.classList.remove('fireplaceOnDarkMode')
        buttonFireplace.classList.remove('fireplaceOn')
        svgForest.classList.remove('white')
        svgRain.classList.toggle('white')
        svgCoffeshop.classList.remove('white')
        svgFireplace.classList.remove('white')
        buttonForestVolume.classList.remove('white')
        buttonRainVolume.classList.toggle('white')
        buttonCoffeshopVolume.classList.remove('white')
        buttonFireplaceVolume.classList.remove('white')
        buttonRain.classList.toggle('rainOnDarkMode')
        sound.soundPause()
        sound.toggleRain()
        sound.soundRain.onplaying()
        switchTheme.classList.remove('themeForest')
        switchTheme.classList.remove('themeCoffeshop')
        switchTheme.classList.remove('themeFireplace')
        switchTheme.classList.remove('themeForestDarkMode')
        switchTheme.classList.remove('themeCoffeshopDarkMode')
        switchTheme.classList.remove('themeFireplaceDarkMode')
        switchTheme.classList.toggle('themeRain')
        switchTheme.classList.toggle('themeRainDarkMode')
        buttonForestVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    })
    
    buttonCoffeshop.addEventListener('click', function() {
        buttonForest.classList.remove('forestOnDarkMode','forestOn')
        buttonRain.classList.remove('rainOnDarkMode','rainOn')
        buttonCoffeshop.classList.toggle('coffeshopOn')
        buttonFireplace.classList.remove('fireplaceOnDarkMode','fireplaceOn')
        svgForest.classList.remove('white')
        svgRain.classList.remove('white')
        svgCoffeshop.classList.toggle('white')
        svgFireplace.classList.remove('white')
        buttonForestVolume.classList.remove('white')
        buttonRainVolume.classList.remove('white')
        buttonCoffeshopVolume.classList.toggle('white')
        buttonFireplaceVolume.classList.remove('white')
        buttonCoffeshop.classList.toggle('coffeshopOnDarkMode')
        sound.soundPause()
        sound.toggleCoffeshop()
        sound.soundCoffeshop.onplaying()
        switchTheme.classList.remove('themeForest', 'themeRain', 'themeFireplace','themeForestDarkMode', 'themeRainDarkMode','themeFireplaceDarkMode')
        switchTheme.classList.toggle('themeCoffeshopDarkMode')
        switchTheme.classList.toggle('themeCoffeshop')
        buttonForestVolume.value = 0.5
        buttonRainVolume.value = 0.5
        buttonFireplaceVolume.value = 0.5
    })
    
    buttonFireplace.addEventListener('click', function() {
        buttonForest.classList.remove('forestOnDarkMode','forestOn')
        buttonRain.classList.remove('rainOnDarkMode','rainOn')
        buttonCoffeshop.classList.remove('coffeshopOnDarkMode','coffeshopOn')
        buttonFireplace.classList.toggle('fireplaceOn')
        svgForest.classList.remove('white')
        svgRain.classList.remove('white')
        svgCoffeshop.classList.remove('white')
        svgFireplace.classList.toggle('white')
        buttonForestVolume.classList.remove('white')
        buttonRainVolume.classList.remove('white')
        buttonCoffeshopVolume.classList.remove('white')
        buttonFireplaceVolume.classList.toggle('white')
        buttonFireplace.classList.toggle('fireplaceOnDarkMode')
        sound.soundPause()
        sound.toggleFireplace()
        sound.soundFireplace.onplaying()
        switchTheme.classList.remove('themeForest','themeRain', 'themeCoffeshop', 'themeRainDarkMode', 'themeCoffeshopDarkMode')
        switchTheme.classList.toggle('themeFireplaceDarkMode')
        switchTheme.classList.toggle('themeFireplace')
        buttonForestVolume.value = 0.5
        buttonRainVolume.value = 0.5
        buttonCoffeshopVolume.value = 0.5
    })
}