const n: number = 400

const sisa: number = n % 365
const sisa2: number = sisa % 30

const tahun: number = (n - sisa) /365
const bulan: number = (sisa - sisa2) / 30
const hari: number = sisa2

const result: string = `400 days -> ${tahun} year, ${bulan} month, ${hari} days.`

console.log(result)

const n1: number = 366

const sisaa: number = n1 % 365
const sisaa2: number = sisaa % 30

const tahunn: number = (n1 - sisaa) /365
const bulann: number = (sisaa - sisaa2) / 30
const harii: number = sisaa2

const result2: string = `366 days -> ${tahunn} year, ${bulann} month, ${harii} day.`

console.log(result2)