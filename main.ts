input.onButtonPressed(Button.A, function () {
    Stop = input.runningTime()
    basic.showString("Time used: ")
    basic.showNumber(Stop - Start)
    serial.writeValue("Time used: ", Stop - Start)
    Start = input.runningTime()
})
let Stop = 0
let Start = 0
Start = input.runningTime()
