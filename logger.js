const { createLogger, format, transports } = require('winston')
const path = require('path')
const moment = require('./moment')

const colors = {
	error: 'red',
	warn: 'yellow',
	info: 'blue',
	debug: 'green',
}

const logger = createLogger({
	transports: [
		new transports.File({
			maxsize: 8388608,
			maxFiles: 10,
			filename: `${path.join(__dirname, './logs')}/events-analyzer-${moment().format('YYYYMMDDHHmmss')}.log`,
			level: 'info',
		}),
		new transports.Console({
			level: 'debug',
			colorize: true,
		}),
	],
	format: format.combine(
		format.colorize({ all: false, colors }),
		format.timestamp(),
		format.printf((log) => `${moment(log.timestamp).format('DD/MM/YYYY HH:mm:ss')} | ${log.level} - ${log.message}`),
	),
})

module.exports = logger
