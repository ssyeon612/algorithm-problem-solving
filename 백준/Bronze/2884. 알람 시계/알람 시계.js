const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const [h, m] = input;

const timeGap = m - 45;

if (timeGap < 0) {
    const alarmHour = h - 1;
    const alarmMin = 60 + timeGap;
    alarmHour < 0 ? console.log(`23 ${alarmMin}`) : console.log(`${alarmHour} ${alarmMin}`);
} else {
    console.log(`${h} ${timeGap}`);
}




