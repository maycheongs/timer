let args = process.argv.slice(2);

for (const sec of args) {
  if (Number(sec)) {
    setTimeout(() => {
    process.stdout.write('.')
    }, sec * 1000);
  }
}




