const cron = require('node-cron')
const logger = require('./logger')

cron.schedule("*/10 * * * * *", () => logger.info("Executando a tarefa a cada 10 segundos"));