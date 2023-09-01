/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows current temperature, in Kelvin.
*/

// variables
let currentTemperatureCelcius = 0
let currentTemperatureKelvin = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  currentTemperatureCelcius = input.temperature()
  currentTemperatureKelvin = currentTemperatureCelcius + 273.15
  
  basic.showString('The temperature is: ' + currentTemperatureKelvin.toString() + ' K.')
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})