input.onButtonPressed(Button.A, function () {
    led.unplot(paddlePosition, 4)
    paddlePosition += -1
    if (paddlePosition < 0) {
        paddlePosition = 0
    }
    led.plot(paddlePosition, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(paddlePosition, 4)
    paddlePosition += 1
    if (paddlePosition > 4) {
        paddlePosition = 4
    }
    led.plot(paddlePosition, 4)
})
let paddlePosition = 0
paddlePosition = 3
led.plot(paddlePosition, 4)
let ballY = 0
let ballX = randint(0, 4)
led.plot(ballX, ballY)
basic.forever(function () {
    basic.pause(200)
    led.unplot(ballX, ballY)
    ballY += 1
    if (ballY == 4 && ballX == paddlePosition) {
        ballY = 0
        ballX = randint(0, 4)
        led.plot(ballX, ballY)
    } else if (ballY == 4 && ballX != paddlePosition) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.showString("You lose!")
    } else {
        led.plot(ballX, ballY)
    }
})
