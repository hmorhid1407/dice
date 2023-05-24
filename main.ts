input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C D E A D F G B ", 120)
        basic.showNumber(randint(1, 6))
    }
})
basic.showLeds(`
    . # # # .
    # . # . #
    # # # # #
    # . . . #
    . # # # .
    `)
