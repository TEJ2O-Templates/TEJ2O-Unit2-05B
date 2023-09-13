"""
Created by: Mr. Coxall
Created on: Sep 2020
This module shows current temperature, in Kelvin.
"""

from microbit import *


# variables
current_temperature_celcius = 0
current_temperature_kelvin = 0

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        current_temperature_celcius = temperature()
        current_temperature_kelvin = current_temperature_celcius + 273.15
        current_temperature_kelvin = round(current_temperature_kelvin)
        display.scroll("The temperature is: " + str(current_temperature_kelvin) + " K.")

        display.clear()
        display.show(Image.HAPPY)
