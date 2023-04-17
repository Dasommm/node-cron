var cron = require('node-cron');    //import 같은 개념

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});