serial.write_string("pir0 ON")
radio.set_group(1)
radio.set_frequency_band(7)
radio.set_transmit_power(7)

def on_forever():
    radio.send_value("pir0", pins.digital_read_pin(DigitalPin.P0))
    serial.write_string("" + str((pins.digital_read_pin(DigitalPin.P0))))
    basic.pause(60000)
basic.forever(on_forever)
