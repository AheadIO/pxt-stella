input.onButtonPressed(Button.A, function () {
    stella.translational_step_continue(stella.translation_direction_enum.Forward, 10, 5)
})
input.onButtonPressed(Button.B, function () {
    stella.rotate_angle_continue(stella.rotate_direction_enum.turn_left, 60, 5)
})
stella.init_xgo_serial(SerialPin.P1, SerialPin.P2)
stella.execution_action(stella.action_enum.Squat)
stella.rotate_angle_reel(stella.body_direction_xyz_enum.X, 120)
stella.translational_motion_reciprocate(stella.body_direction_xyz_enum.X, 6)
basic.forever(function () {
	
})