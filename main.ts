function ampel () {
    if (150 < durchschnitt) {
        basic.setLedColor(0xff0000)
    } else if (100 < durchschnitt) {
        basic.setLedColor(0xff8000)
    } else {
        basic.setLedColor(0x00ff00)
    }
}
function durchschnittsberechnung () {
    summeMessungen = 0
    for (let Index = 0; Index <= messungen.length - 1; Index++) {
        summeMessungen += messungen[Index]
    }
    durchschnitt = summeMessungen / messungen.length
}
let summeMessungen = 0
let durchschnitt = 0
let messungen: number[] = []
messungen = [0, 0, 0, 0, 0]
basic.forever(function () {
    messungen.push(input.soundLevel())
    messungen.shift()
    basic.pause(1000)
    durchschnittsberechnung()
    ampel()
})
