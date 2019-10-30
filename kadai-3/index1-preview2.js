const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    console.log('あなたはいい性格')
} else if(day % 3 === 1) {
    console.log('あなたはわるい性格')
} else if(day % 3 === 2) {
    console.log('あなたはどうでもよい性格')
}