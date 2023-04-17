const { timeLog, log } = require('console');
const winston = require('winston');
var cron = require('node-cron');    //import 같은 개념

const logFilePath = 'logs/app.log';

const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    transports : [
        new winston.transports.File({ filename : logFilePath })
    ]
})

cron.schedule('*/10 * * * * *', () => {
    console.log('running a task every 10 seconds');
    let today = new Date();
  logger.info({message: "running!!!", timestamp : today.toLocaleTimeString()});
});
