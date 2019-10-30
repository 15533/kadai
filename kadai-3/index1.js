const day = parseInt(process.argv[2])

if (day%5 === 0) {
  console.log('あなたは特別な性格')
} else if (day <= 10) {
  console.log('あなたはいい性格')
} else if (day <= 20) {
  console.log('あなたはわるい性格')
} else if (day <= 31) {
  console.log('あなたはどうでもよい性格')
} else {
  console.log('error')
}