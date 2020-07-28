let wage = prompt("How much do you make per hour?");
let hours = prompt("How many hours did you work this week");
let totalPay = hours * wage;

if (hours > 40) {
  let regTime = wage * 40;
  let overTime = (hours - 40) * (wage * 1.5);
  totalPay = regTime + overTime;
  console.log(`You worked overtime and made $${totalPay} this week!`);
} else {
  console.log(`You made $${totalPay} this week!`);
}


// if this person got the same paycheck every week, count how many weeks it would take them to earn $1,000,000.

let regTime = wage * 40;
let overTime = (hours - 40) * (wage * 1.5);
let weeksToMill = 1000000 / (regTime + overTime);
console.log(`It will take you ${Math.ceil(weeksToMill)} weeks to make a million at your current salary!`);

//it would take me 2,798 weeks to make a million on my old barista salary! \:D/