const max = parseInt(process.argv[2])

for (let n = 1; n <= max; n = n +1) {
   if (n % 3 ===0) {
       console.log( n + ' は 3 の倍数')
   }　else {
       console.log(n)
   }
}