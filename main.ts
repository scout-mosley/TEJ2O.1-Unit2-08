/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: Oct 2025
 * This program Program now shows all the possible colours on the RGB LED
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//when button pressed 
input.onButtonPressed(Button.A, function () {

//turn on red RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    control.waitMicros(1000)

//turn off red RGB LED        
    pins.digitalWritePin(DigitalPin.P13, 0)

//turn on green RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    control.waitMicros(1000)

//turn off green RGB LED        
    pins.digitalWritePin(DigitalPin.P14, 0)

//turn on blue RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    control.waitMicros(1000)

//turn off blue RGB LED        
    pins.digitalWritePin(DigitalPin.P15, 0)

//turn on red and green RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    control.waitMicros(1000)

//turn off red and green RGB LED        
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

//turn on red and blue RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    control.waitMicros(1000)

//turn off red and blue RGB LED        
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

//turn on blue and green RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    control.waitMicros(1000)

//turn off blue and green RGB LED        
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    
//turn on red, blue and green RGB LED        
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    control.waitMicros(1000)
    
//turn off red, blue and green RGB LED        
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    })
