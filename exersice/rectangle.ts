// a code to find area of rectangle
const rectangleLenght: number = 5
const rectangleWidth: number = 3

const rectangleArea: number = rectangleLenght * rectangleWidth
const rectangparameter: number = rectangleLenght + rectangleLenght + rectangleWidth + rectangleWidth

console.log(rectangleArea)
console.log(rectangparameter)

// a code to find perimeter of rectangle
const radius: number = 5
const PI: number = 3.14159
const diameter: number = 2 * radius
const circumpference: number = 2 * PI * radius
const area: number = PI * radius * radius

console.log(`Diameter : ${diameter}`)
console.log(`circumpference : ${circumpference}`)
console.log(`area : ${area}`)

// a code to find angles of triangle if two angles are given
const angleA: number = 80
const angleB: number = 65 
const output: number = 180 - (angleA + angleB)

console.log(output)

//a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
const tahun1: number = 400; // Ganti dengan jumlah hari yang diinginkan

const tahun: number = Math.floor(tahun1 / 365);
const months: number = Math.floor((tahun1 % 365) / 30);
const remainingDays: number = (tahun1 % 365) % 30;

console.log(`${tahun1} days → ${tahun} year(s), ${months} month(s), ${remainingDays} day(s)`);

const tahun2: number = 366; // Ganti dengan jumlah hari yang diinginkan

const tahunn: number = Math.floor(tahun2 / 365);
const monthss: number = Math.floor((tahun2 % 365) / 30);
const remainingDayss: number = (tahun2 % 365) % 30;

console.log(`${tahun2} days → ${tahunn} year(s), ${monthss} month(s), ${remainingDayss} day(s)`);

//a code to get difference between dates in days.
const Date1: Date = new Date('2022-01-20');
const Date2: Date = new Date('2022-01-22');

const hasil: number = Date2.getTime() - Date1.getTime();
const keluar: number = hasil / (1000 * 3600 * 24);

console.log(`output : ${keluar} days`);

