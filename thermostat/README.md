## A Thermostat

## Objectives
Test-drive a JavaScript class.

You'll build, test-driving your code, a simple program to manage a thermostat. Here is the specification for the initial MVP of the program:

1. The Thermostat starts with an initial temperature of 20 degrees
2. You can increase the temperature with an up method
3. You can decrease the temperature with a down method
4. The minimum possible temperature is 10 degrees
5. The Power saving mode is on by default but it can also be turned off
6. If power saving mode is on, the maximum temperature is 25 degrees
7. If power saving mode is off, the maximum temperature is 32 degrees
8. You can reset the temperature to 20 with a reset method
9. You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

You'll know if your class Thermostat is correctly implemented if you can run the following code. Your tests should also reflect the same requirements.

```javascript
const thermostat = new Thermostat();

thermostat.getTemperature(); // should return 20

thermostat.up();
thermostat.up();
thermostat.getTemperature(); // should now return 22

thermostat.down();
thermostat.getTemperature(); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

thermostat.getTemperature(); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20
```

## Phase 2

## Exercise: thermostat over the web

To complete this exercise, you'll have to:

1. Implement a route GET /temperature to print the thermostat temperature.
2. Implement a route POST /up to increase the temperature.
3. Implement a route POST /down to decrease the temperature.
4. Implement a route DELETE /temperature to reset the thermostat.

If your program is correct, you should be able to execute the following curl commands in the terminal, and get the same output:

```zsh
$ curl -XGET http://localhost:3000/temperature 
{"temperature":20}

$ curl -XPOST http://localhost:3000/up 
$ curl -XPOST http://localhost:3000/up 
$ curl -XGET http://localhost:3000/temperature 
{"temperature":22}

$ curl -XDELETE http://localhost:3000/temperature
$ curl -XGET http://localhost:3000/temperature 
{"temperature":20}
```