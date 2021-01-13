const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('SIGINT', () => {
  console.log('Thanks for using my silent alarm!');
  rl.close()
})

process.stdin.on('keypress', function(char,key) {

  if(Number(char) > 0 && Number(char) <= 9) {

    console.log(`\nSetting timer for ${char} second/s:`);
    setTimeout(() => {
      process.stdout.write('beep!\n')
    }, Number(char)*1000)
    } else if (!(key.ctrl && key.name === 'c')) {
      process.stdout.write(`\nbeep!\n`)
  }
})