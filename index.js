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
let today = new Date();

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  logger.info(today.toLocaleTimeString, "running!!!");
});