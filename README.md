# Fibaro
This app adds support for Fibaro devices in Homey.

## Supported devices with most common parameters:
* FGD-211, Dimmer
* FGD-212, Dimmer 2
* FGFS-101, Flood Sensor
* FGFS-101-PLUS, Flood Sensor (Z-Wave Plus)
* FGGC-001, Swipe
* FGK-101, Door/Window Sensor
* FGK-10x, Door/Window Sensor (Z-Wave Plus)
* FGMS-001, Motion Sensor
* FGMS-001-PLUS, Motion Sensor (Z-Wave Plus)
* FGPB-101, Push Button
* FGS-211, Relay Switch
* FGS-212, Relay Switch 2
* FGS-213, Single Switch 2
* FGS-221, Double Relay Switch
* FGS-222, Double Relay Switch 2
* FGS-223, Double Switch 2
* FGSD-002, Smoke Detector (Z-Wave Plus)
* FGSS-001, Smoke Sensor
* FGRGBWM-441, RGBW Controller
* FGWPx-101/102, Wall Plug
* FGWPx-102-PLUS, Wall Plug (Z-Wave Plus)

## Supported devices with some parameters:
* FGRM-222, Roller Shutter 2
* FGR-222, Roller Shutter 2 (v2.5)

## Supported Languages:
* English
* Dutch (Nederlands)

## NOTE:
**FGS-2xx Devices:**  
Main Device = Also Relay/Switch 1 (S1/Q1)  
Relay/Switch 2 = Relay/Switch 2 (S2/Q2)

**FGPB-101:**  
When the app has just started, it can take up to 2 minutes before it reacts.
If it takes longer you (probably) need to restart your homey.

## Change Log:
### v 1.1.1
**add support:**  
FGWPx-102-PLUS  
FGD-211 - Scene Activation  
FGD-212 - Scene Activation

### v 1.1.0
**fixed:**  
Removed "Fibaro" from all names  
FGMS-001-PLUS - Motion and Tamper Trigger report  
FGWPx-101/102 - led ring color now also changes in device's settings

  
**add support:**  
FGBS-Universal Binary Sensor  
FGRGBWM-441 - light temperature (capability)  
FGS-223 - S2 support re-added  
FGD-212 - parameter 29 (Switch S1 and S2)  
FGS-213 - scene activation (S1 switched, S2 switched)

### v 1.0.12
**fixed:**  
FGK-101 - Trigger Report  
FGSS-001 - Trigger Report  
FGSD-002 - Trigger Report  
FGS-213 - Adding  
FGS-223 - Adding  
**add support**  
FGK-101 - Temperature Sensor now possible*  
FGK-101-PLUS Temperature Sensor now possible*  
*only when a temperature module (DS18B20) is attached, and re-inclusion is needed.

### v 1.0.11
**fixed:**  
FGFS-101 - can now be used using dc-power and battery

### v 1.0.10
**add support (incl. parameter):**  
FGS-213, FGS-223, FGPB-101, FGR-222  
**add parameters (incl. dutch translation):**  
FGGC-001, FGRGBWM-441, FGSD-002, FGSS-001, FGWPE-001  
**add triggers:**  
FGGC-001 - All default swipe posibilities  
FGWPE-001 - LED Ring colour (on status and off status)  
FGPB-101 - 1-5x Pressed, Long Press, Long Press Released

### v1.0.9
**add support (incl. parameters):**  
FGRM-222

### v1.0.8
**add support (incl. parameters):**  
FGS-211, FGS-212, FGS-221, FGS-222, FGFS-001-PLUS  
**add parameters (incl. dutch translation):**  
FGD-211, FGD-212, FGFS-001 (+ PLUS), FGK-001 (+ PLUS)

### v1.0.7
**add support:**  
FGD-211, FGD-212  
add dutch language to existing parameters.
