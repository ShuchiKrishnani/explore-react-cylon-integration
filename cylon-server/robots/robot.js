import cylon from "cylon";

class LEDRobot {
    constructor() {
        this.robot = null;
      }

    setLEDCOnfiguration() {
        this.robot = cylon.robot({
        // Change the port to the correct port for your Arduino.
        connections: {
            arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
        },

        devices: {
            led: { driver: 'led', pin: 13 }

        }
        }).start()
    }

    startLED() {
        this.robot.devices.led.turnOn()
    }

    stopLED() {
        this.robot.devices.led.turnOff()
    }

    flickerLED() {
        every((1).second(), function() {
            my.led.toggle();
          });
    }
    
}

export default new LEDRobot()