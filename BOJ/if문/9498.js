let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

const record = input[0]

if (record >= 90) {
  console.log('A')
} else if (record >= 80) {
  console.log('B')
} else if (record >= 70) {
  console.log('C')
} else if (record >= 60) {
  console.log('D')
} else {
  console.log('F')
}
