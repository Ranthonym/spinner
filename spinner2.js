let spinner = (count) => { 
//count stores the number of times user wants to rotate /
  let slashArray = ['|', '/', '-', '\\', '|' ];
  let delay = 100;

for (let j = 0; j < count; j ++) {

  for (let i = 0; i < slashArray.length; i++) {
    setTimeout(() => { 
      process.stdout.write('\r' + slashArray[i] + '    ');
    }, delay += 200);
  }
  }
}

spinner(4);