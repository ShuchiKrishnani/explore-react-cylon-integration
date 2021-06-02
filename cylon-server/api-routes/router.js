import express from 'express';
import Cylon from 'cylon';
const router = express.Router();
import LEDRobot from '../robots/robot.js';

router.get('/setLEDConfiguration',(req,res) => {
    LEDRobot.setLEDCOnfiguration()
    res.send("LED Configuration Complete")
})

router.get('/startLED', (req,res) => {
    LEDRobot.startLED()
    res.send("LED ON")
})

router.get('/stopLED', (req,res) => {
    LEDRobot.stopLED()
    res.send("LED OFF")
})

router.get('/FlickerLED', (req,res) => {
    LEDRobot.flickerLED()
    res.send(" LED Flickering")
})

export default router