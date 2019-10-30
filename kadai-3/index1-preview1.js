const day = parseInt(process.argv[2])

if (day <= 10) {
  if (day === 5) {
      console.log('あなたは特別な性格')
  } else {
  console.log('あなたはいい性格')
  }
} else if (day <= 20) {
    if (day === 15) {
      console.log('あなたは特別な性格')
  } else {
  console.log('あなたはわるい性格')
  }
} else if (day <= 31) {
    if (day === 25) {
      console.log('あなたは特別な性格')
  } else {
  console.log('あなたはどうでもよい性格')
  }
} else {
  console.log('error')
}