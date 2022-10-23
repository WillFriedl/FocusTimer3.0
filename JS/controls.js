export default function Controls({
    buttonPlay,
    buttonPlayFake,
    buttonLightMode,
    buttonDarkMode,
    switchTheme,
    buttonForest,
    buttonRain,
    buttonCoffeshop,
    buttonFireplace,
    switchColorTimer,
    svgPlay,
    svgPlayFake,
    svgStop,
    svgTimerUp,
    svgTimerDown,
    svgForest,
    svgRain,
    svgCoffeshop,
    svgFireplace,
    buttonForestVolume,
    buttonRainVolume,
    buttonCoffeshopVolume,
    buttonFireplaceVolume,
    sound,
}) {

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
        switchTheme.classList.remove('themeForest', 'themeRain', 'themeCoffeshop', 'themeFireplace', 'themeForestDarkMode', 'themeRainDarkMode', 'themeCoffeshopDarkMode', 'themeFireplaceDarkMode')
        sound.soundPause()
        sound.volumeClear()
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPlayFake.classList.remove('hide')
    }

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

    return {
        resetControls,
        play,
        lightMode,
        darkMode,
        inputClear,
    }
}