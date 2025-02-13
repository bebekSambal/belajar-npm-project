const notifier = require('node-notifier');
const moment = require('moment');

const argTime = process.argv.slice(2);

const POMO_DURATION = argTime[0];
const BREAK_DURATION = argTime[1];

let isWorking = false;
let remainingTime = 0;

function formattingTime(totalSecond) {
    const duration = moment.duration(totalSecond, 'seconds');
    const hours = duration.hours().toString().padStart(2,'0')
    const minutes = duration.minutes().toString().padStart(2,'0')
    const seconds = duration.seconds().toString().padStart(2,'0')

    return `${hours}:${minutes}:${seconds}`;
};

function startTimer(duration){
    isWorking = !isWorking;
    remainingTime = duration *60;

    const timer = setInterval(() => {
        remainingTime--;

        const formattedTime = formattingTime(remainingTime);
        console.log(`${isWorking ? 'Work': 'break'}: ${formattedTime}`);

        if (remainingTime === 0){
            clearInterval(timer);
            notifier.notify({
                title: isWorking? 'break time': 'working time',
                message: isWorking ? 'good break' : 'good work' ,
                sound: true,
                wait: true
            });
            startTimer(isWorking? BREAK_DURATION : POMO_DURATION);
        }
    },1000);
}

startTimer(POMO_DURATION);