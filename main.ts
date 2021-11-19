let Value = 0
basic.forever(function () {
    Value = pins.analogReadPin(AnalogPin.P0)
    if (Value > 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
