let row = 0
basic.forever(function () {
    row = 0
    while (row <= 4) {
        led.plot(row, 0)
        basic.pause(500)
        led.unplot(row, 0)
        row += 1
    }
})
