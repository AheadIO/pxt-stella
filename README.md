# micro:bit STELLA Robot Kit

![](/stella.png/)

This extension is designed to programme and drive the micro:bit STELLA Robot Kit. You can [get micro:bit STELLA Robot Kit from Ahead.](https://www.ahead.io)

## Code Example
```JavaScript
input.onButtonPressed(Button.A, function () {
    stella.execution_action(stella.action_enum.Sit_down)
})
input.onButtonPressed(Button.AB, function () {
    stella.move_xgo(stella.direction_enum.Forward, 50)
})
input.onButtonPressed(Button.B, function () {
    stella.execution_action(stella.action_enum.Wave)
})
stella.init_xgo_serial(SerialPin.P1, SerialPin.P2)
stella.execution_action(stella.action_enum.Default_posture)
stella.leg_lift_continue(30, 3)
basic.forever(function () {
	
})
```

## Supported targets
for PXT/microbit

## License
MIT