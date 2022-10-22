import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
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
} from "./elements.js"

const sound = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    reset: controls.resetControls
})

const controls = Controls({
    buttonPlay,
    buttonPlayFake,
    timer,
    sound,
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
})

Events({
    sound,
    controls, 
    timer,
})