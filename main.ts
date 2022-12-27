let value = 0
input.onButtonPressed(Button.B, function () {
    led.setBrightness(255)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(200)
    value = randint(1, 3)
    if (value == 1) {
        led.setBrightness(100)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
    } else if (value == 2) {
        led.setBrightness(50)
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    } else if (value == 3) {
        led.setBrightness(20)
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
	
})
