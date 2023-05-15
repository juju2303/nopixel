let strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        strip.setPixelColor(0 + 1, neopixel.colors(NeoPixelColors.Red))
    }
})
