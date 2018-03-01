const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

// const partition = (collection, predicate) => {
//   // Solution 1
//   if (collection.length) {
//     return [
//       collection.filter(value => predicate(value)), 
//       collection.filter(value => !predicate(value))
//     ];
//   } else {
//     return [[],[]];
//   }
// };

// Solution 2 : récursif
const partition = (collection, predicate, acc_partition) => {
  if (!acc_partition) {
    acc_partition = [[], []];
  }

  if (collection.length === 0 ) {
    return acc_partition;
  } else {
    predicate(collection[0]) 
      ? acc_partition[0].push(collection[0]) 
      : acc_partition[1].push(collection[0]);
  }
  return partition(collection.slice(1), predicate, acc_partition);
};

module.exports = {
  partition: partition,
  run: partition
};