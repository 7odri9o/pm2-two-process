const cron = require('node-cron')
const logger = require('./logger')

cron.schedule("*/20 * * * * *", () => logger.info("Executando a tarefa a cada 20 segundos"));