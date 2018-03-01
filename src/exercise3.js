const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const injectStar = (input, acc) => {
  // var output;
  // if(input.length) {
  //   for (var i = 0; i < input.length - 1; i++) {
  //     if(input[i] == input[i+1]) {
  //       output = [input.slice(0, i+1) +'*'+ input.slice(i+1)].join();
  //     }
  //   }
  //   return output;
  // } else {
  //   return input;
  // }

  if(!acc) {
    acc = [];
  }
  input = input.split('');
  if(input.length) {
    if(acc[acc.length-1] === input[0]) {
      acc.push('*');
    }
    acc.push(input[0]);
    return injectStar(input.slice(1).join(''), acc);
  } else {
    return acc.join('');
  }
};

module.exports = {
  injectStar: injectStar,
  run: injectStar
};