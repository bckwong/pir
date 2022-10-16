serial.writeString("pir0 ON")
radio.setGroup(1)
radio.setFrequencyBand(7)
radio.setTransmitPower(7)
basic.forever(function on_forever() {
    radio.sendValue("pir0", pins.digitalReadPin(DigitalPin.P0))
    serial.writeString("" + ("" + pins.digitalReadPin(DigitalPin.P0)))
    basic.pause(60000)
})
