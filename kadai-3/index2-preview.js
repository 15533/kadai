const max = parseInt(process.argv[2])

for (let n = 1; n <= max; n = n +1) {
   if (n / 100 === 3 || (n-n % 100)// mistake / 10 === 3 ||  ) {
       console.log( n + ' は 3 の付く数字(1~1000)')
   }　else {
       console.log(n)
   }
}