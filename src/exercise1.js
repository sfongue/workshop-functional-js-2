const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const partition = (collection, predicate) => {
  if (collection.length) {
    return [
      collection.filter( value => predicate(value)), 
      collection.filter(value => !predicate(value))
    ];
  } else {
    return [[],[]];
  }

};

module.exports = {
  partition: partition,
  run: partition
};