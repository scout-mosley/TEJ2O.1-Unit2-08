/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: Oct 2025
 * This program Program now shows all the possible colours on the RGB LED
*/


basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {

    // turns on red pin
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turns on blue pin
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turns on green pin
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on blue and red pin
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on green and red pin
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turns on green and blue pin
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)

    // turns on green, red and blue pin
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
