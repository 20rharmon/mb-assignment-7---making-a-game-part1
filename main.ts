let score = 0
input.onButtonPressed(Button.A, function () {
    score += 1
})
input.onButtonPressed(Button.AB, function () {
    score += 3
})
input.onButtonPressed(Button.B, function () {
    score += 2
})
basic.forever(function () {
    basic.showNumber(score)
})
