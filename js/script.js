window.addEventListener("load", start)

var redRange = document.querySelector("#redRange")
var redText = document.querySelector("#redText")

var greenRange = document.querySelector("#greenRange")
var greenText = document.querySelector("#greenText")

var blueRange = document.querySelector("#blueRange")
var blueText = document.querySelector("#blueText")

var backgroundRGB = document.querySelector("#backgroundRGB")
var backgroundColorRGB = null

function start(){
    // backgroundColorRGB = "rgb("+redText.value+","+greenText.value+","+blueText.value+")"
    backgroundColorRGB = `rgb(${redText.value}, ${greenText.value}, ${blueText.value})`
    redRange.addEventListener("input", handleRedRangeValueChange)
    greenRange.addEventListener("input", handleGreenRangeValueChange)
    blueRange.addEventListener("input", handleBlueRangeValueChange)

    backgroundRGB.style.backgroundColor = backgroundColorRGB
}

const handleRedRangeValueChange = () => {
    redText.value = event.target.value
    start()
}
function handleGreenRangeValueChange(event){
    greenText.value = event.target.value
    start()
}

function handleBlueRangeValueChange(event){
    blueText.value = event.target.value
    start()
}