'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/500

module.exports = new ZwaveDriver( path.basename(__dirname), {
	capabilities: {
		'alarm_smoke': {
			'command_class': 'COMMAND_CLASS_SENSOR_ALARM',
			'command_get': 'SENSOR_ALARM_GET',
			'command_get_parser': () => {
				return {
					'Sensor Type': 'Smoke Alarm'
				};
			},
			'command_report': 'SENSOR_ALARM_REPORT',
			'command_report_parser': report => {
				if (report['Sensor Type'] !== 'Smoke Alarm') return null;

				return report['Sensor State'] === 'alarm';
			}
		},
		
		'alarm_heat': {
			'command_class': 'COMMAND_CLASS_SENSOR_ALARM',
			'command_get': 'SENSOR_ALARM_GET',
			'command_get_parser': () => {
				return {
					'Sensor Type': 'Heat Alarm'
				};
			},
			'command_report': 'SENSOR_ALARM_REPORT',
			'command_report_parser': report => {
				if (report['Sensor Type'] !== 'Heat Alarm') return null;

				return report['Sensor State'] === 'alarm';
			}
		},
		
		'alarm_tamper': {
			'command_class': 'COMMAND_CLASS_SENSOR_ALARM',
			'command_get': 'SENSOR_ALARM_GET',
			'command_get_parser': () => {
				return {
					'Sensor Type': 'General Purpose Alarm'
				};
			},
			'command_report': 'SENSOR_ALARM_REPORT',
			'command_report_parser': report => {
				if(report['Sensor Type'] !== 'General Purpose Alarm') return null;

				return report['Sensor State'] === 'alarm';
			}
		},
		
		'measure_temperature': {
			'command_class': 'COMMAND_CLASS_SENSOR_MULTILEVEL',
			'command_get': 'SENSOR_MULTILEVEL_GET',
			'command_get_parser': () => {
				return {
					'Sensor Type': 'Temperature (version 1)'
				};
			},
			'command_report': 'SENSOR_MULTILEVEL_REPORT',
			'command_report_parser': report => {
				if (report['Sensor Type'] !== 'Temperature (version 1)') return null;

				return report['Sensor Value (Parsed)'];
			}
		},
		
		'measure_battery': {
			'command_class': 'COMMAND_CLASS_BATTERY',
			'command_get': 'BATTERY_GET',
			'command_report': 'BATTERY_REPORT',
			'command_report_parser': report => {
				if (report['Battery Level'] === "battery low warning") return 1;
				
				return report['Battery Level (Raw)'][0];
			},
			'optional': true
		}
	},
	settings: {
		"smoke_alarm_cancellation_delay" : {
			"index": 1,
			"size": 2,
		},
		"led_and_acoustic_alarm" : {
			"index": 2,
			"size": 1,
		},
		"temperature_report_interval": {
			"index": 10,
			"size": 2,
		},
		"temperature_report_hysteresis": {
			"index": 12,
			"size": 1,
		},
		"temperature_offset": {
			"index": 73,
			"size": 2,
		},
		"range_test": {
			"index": 80,
			"size": 1,
		},
		"temperature_alarm_treshold": {
			"index": 81,
			"size": 1,
		},
		"smoke_sensitivity": {
			"index": 82,
			"size": 1,
		},
		"tamper_alarm": {
			"index": 89,
			"size": 1,
		},
	}
});
